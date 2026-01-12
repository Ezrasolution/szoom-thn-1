
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getTutorResponse = async (
  prompt: string, 
  subject: string, 
  history: ChatMessage[]
) => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `
      Anda adalah "Cikgu AI", seorang guru sekolah rendah yang sangat peramah, penyabar dan ceria untuk murid Tahun 1 (umur 7 tahun) di Malaysia.
      Topik perbincangan sekarang: ${subject}.
      
      Garis panduan:
      1. Gunakan bahasa Melayu yang sangat mudah difahami oleh kanak-kanak 7 tahun.
      2. Berikan jawapan yang pendek, padat dan menarik.
      3. Gunakan banyak emoji yang ceria (🌟, 📚, 🍎, ✅).
      4. Jika murid bertanya tentang sesuatu yang sukar, terangkan dengan analogi harian.
      5. Sentiasa beri pujian dan galakan ("Bagus!", "Hebat sekali!", "Mari kita cuba lagi!").
      6. Elakkan menggunakan istilah teknikal yang terlalu berat.
    `;

    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Maaf, Cikgu AI sedang berfikir. Cuba tanya lagi ya!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ops! Ada sedikit masalah teknikal. Cuba sebentar lagi ya sayang.";
  }
};
