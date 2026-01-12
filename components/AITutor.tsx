import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { getTutorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AITutorProps {
  subjectName: string;
}

const AITutor: React.FC<AITutorProps> = ({ subjectName }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isAiTalking, setIsAiTalking] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef<number>(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopVoiceSession();
    };
  }, []);

  const stopVoiceSession = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    for (const source of sourcesRef.current) {
      source.stop();
    }
    sourcesRef.current.clear();
    setIsVoiceMode(false);
    setIsAiTalking(false);
  };

  const startVoiceMode = async () => {
    try {
      setIsVoiceMode(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const base64 = btoa(String.fromCharCode(...new Uint8Array(int16.buffer)));
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: { data: base64, mimeType: 'audio/pcm;rate=16000' } });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64 = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64) {
              setIsAiTalking(true);
              const binary = atob(base64);
              const bytes = new Uint8Array(binary.length);
              for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
              
              const dataInt16 = new Int16Array(bytes.buffer);
              const buffer = outputCtx.createBuffer(1, dataInt16.length, 24000);
              const channelData = buffer.getChannelData(0);
              for (let i = 0; i < dataInt16.length; i++) channelData[i] = dataInt16[i] / 32768.0;

              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsAiTalking(false);
              });
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              for (const s of sourcesRef.current) s.stop();
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsAiTalking(false);
            }
          },
          onerror: (e) => console.error('Live API Error:', e),
          onclose: () => setIsVoiceMode(false),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: `Anda adalah "Cikgu AI", seorang guru sekolah rendah Tahun 1 yang peramah. Topik: ${subjectName}. Gunakan Bahasa Melayu mudah.`
        }
      });
      
      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error("Failed to start voice mode", err);
      setIsVoiceMode(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getTutorResponse(input, subjectName, messages);
    
    const aiMessage: ChatMessage = { role: 'model', text: response };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[600px] border border-gray-100 relative">
      {/* Header */}
      <div className="bg-blue-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg border-2 border-blue-400 ${isAiTalking ? 'animate-pulse' : ''}`}>
            <i className={`fa-solid ${isAiTalking ? 'fa-volume-high' : 'fa-robot'} text-2xl`}></i>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg leading-tight">Cikgu AI</h4>
            <p className="text-blue-100 text-xs">
              {isVoiceMode ? 'Mod Suara Aktif (Dengar & Bercakap)' : `Sedia membantu belajar ${subjectName}!`}
            </p>
          </div>
        </div>
        
        {isVoiceMode && (
          <button 
            onClick={stopVoiceSession}
            className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-red-600 transition-colors"
          >
            Tamat Suara
          </button>
        )}
      </div>

      {/* Messages / Voice UI Overlay */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-blue-50/30 relative"
      >
        {isVoiceMode ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-blue-100 p-12 rounded-full">
                <i className={`fa-solid ${isAiTalking ? 'fa-face-smile text-blue-600' : 'fa-microphone text-blue-500'} text-6xl`}></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {isAiTalking ? 'Cikgu Sedang Bercakap...' : 'Cikgu Sedang Mendengar...'}
            </h3>
            <p className="text-blue-600/70 text-sm">
              {isAiTalking ? 'Dengar penjelasan Cikgu dengan teliti ya!' : 'Tanya apa-apa saja, Cikgu sedia mendengar.'}
            </p>
          </div>
        ) : (
          <>
            {messages.length === 0 && (
              <div className="text-center py-10 px-6">
                <p className="text-gray-400 text-sm mb-4 italic">Belum ada perbualan. Jom tanya Cikgu AI!</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button 
                    onClick={() => setInput("Apa itu " + subjectName + "?")}
                    className="bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full text-xs hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    Apa itu {subjectName}?
                  </button>
                  <button 
                    onClick={() => setInput("Boleh cikgu beri contoh?")}
                    className="bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full text-xs hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    Boleh beri contoh?
                  </button>
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2">
          {!isVoiceMode && (
            <button 
              onClick={startVoiceMode}
              className="bg-green-100 text-green-600 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-green-200 transition-colors shadow-sm group relative"
              title="Bercakap dengan Cikgu"
            >
              <i className="fa-solid fa-microphone text-xl group-hover:scale-110 transition-transform"></i>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Mod Suara</span>
            </button>
          )}
          
          <div className="flex-1 flex items-center gap-2 bg-gray-100 p-2 rounded-2xl focus-within:ring-2 ring-blue-500 transition-all">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              disabled={isVoiceMode}
              placeholder={isVoiceMode ? "Tutup mod suara untuk menaip..." : "Tanya sesuatu kepada Cikgu AI..."}
              className="flex-1 bg-transparent border-none focus:outline-none px-3 py-2 text-sm text-gray-700 disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading || isVoiceMode}
              className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-300 transition-colors shadow-md active:scale-95"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;