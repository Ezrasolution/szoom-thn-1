
import React, { useState } from 'react';
import Header from './components/Header';
import SubjectGrid from './components/SubjectGrid';
import AITutor from './components/AITutor';
import { Subject } from './types';

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const resetToHome = () => setSelectedSubject(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onHomeClick={resetToHome} />
      
      <main className="flex-1 flex flex-col">
        {!selectedSubject ? (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-4 md:py-24 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 opacity-20 rotate-12">
                <i className="fa-solid fa-cloud text-9xl"></i>
              </div>
              <div className="absolute bottom-10 right-10 opacity-10">
                <i className="fa-solid fa-rocket text-9xl"></i>
              </div>
              
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-white/30 uppercase tracking-widest">
                  Tahun 1 (T7) - Sekolah Rendah
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Belajar Lebih Seronok Dengan <br/>
                  <span className="text-yellow-400">SmartZoom Tutor!</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  Modul interaktif, video menarik, dan Cikgu AI sedia membantu anda mencapai kecemerlangan dalam setiap subjek.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-yellow-400/20 transition-all transform hover:scale-105 w-full sm:w-auto">
                    Mula Sekarang
                  </button>
                  <a 
                    href="https://drive.google.com/file/d/1zjRibbchQXfBnrl8UNIyW9ZAiunH13nC/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-circle-play"></i> Lihat Video Demo
                  </a>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">Pilih Subjek Kegemaran Anda</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Terdapat pelbagai pilihan subjek mengikut silibus KSSR Semakan terkini untuk murid Tahun 1.</p>
              </div>
              <SubjectGrid onSelectSubject={setSelectedSubject} />
            </section>

            {/* Parent Monitoring Section (New) */}
            <section className="py-12 px-4 bg-indigo-50">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-2 border-indigo-100 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 lg:w-1/3 flex justify-center">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <i className="fa-solid fa-user-shield text-white text-5xl md:text-7xl"></i>
                    </div>
                  </div>

                  <div className="relative z-10 lg:w-2/3 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                      <i className="fa-solid fa-lock"></i> Khas Untuk Ibu Bapa
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-heading leading-tight">
                      Pantauan Aktiviti Belajar <br/>
                      <span className="text-indigo-600">Secara Sistematik</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                      Gunakan <strong>StudCKLIST</strong> untuk memantau setiap langkah pembelajaran anak anda. Pastikan setiap modul dan kuiz diselesaikan dengan teratur mengikut jadual yang ditetapkan.
                    </p>
                    <a 
                      href="https://scoremax.interactivelink.site/studcklist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-indigo-200 active:scale-95 group"
                    >
                      <i className="fa-solid fa-clipboard-check text-yellow-400"></i>
                      Buka Checklist Belajar
                      <i className="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Activities Zone (FunGAME, IQ FunTEST, SMART IQRA' & Panduan Solat) */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-bold text-gray-800 font-heading">Zon Aktiviti & Hiburan 🌟</h2>
                   <p className="text-gray-500">Asah minda dan berseronok dengan aktiviti interaktif kami.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {/* FunGAME Card */}
                  <div className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group h-full flex flex-col justify-between">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <i className="fa-solid fa-gamepad text-[120px]"></i>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                          <i className="fa-solid fa-gamepad text-xl"></i>
                        </div>
                        <h3 className="text-xl font-black font-heading">FunGAME</h3>
                      </div>
                      <p className="text-sm text-white/90 mb-6 font-medium leading-relaxed">
                        Permainan didik hibur yang menguji IQ dan mencabar minda secara santai!
                      </p>
                    </div>
                    <div className="relative z-10">
                      <a 
                        href="https://sites.google.com/smartreker.net/smartzoom-tutor-sr/fg-t1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-yellow-400 hover:text-white px-5 py-2 rounded-lg font-black transition-all shadow-md active:scale-95 group/btn text-xs"
                      >
                        Click n Play
                        <i className="fa-solid fa-play text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                      </a>
                    </div>
                  </div>

                  {/* SMART IQRA' Card */}
                  <div className="bg-emerald-600 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group h-full flex flex-col justify-between">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <i className="fa-solid fa-book-quran text-[120px]"></i>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                          <i className="fa-solid fa-book-quran text-xl"></i>
                        </div>
                        <h3 className="text-xl font-black font-heading">SMART IQRA'</h3>
                      </div>
                      <p className="text-sm text-white/90 mb-6 font-medium leading-relaxed">
                        Belajar IQRA 1-6 dengan panduan menarik untuk penguasaan bacaan.
                      </p>
                    </div>
                    <div className="relative z-10">
                      <a 
                        href="https://sites.google.com/view/smartiqra/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-yellow-400 hover:text-white px-5 py-2 rounded-lg font-black transition-all shadow-md active:scale-95 group/btn text-xs"
                      >
                        Mula Belajar
                        <i className="fa-solid fa-book-open text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                      </a>
                    </div>
                  </div>

                  {/* Panduan Solat Card */}
                  <div className="bg-indigo-500 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group h-full flex flex-col justify-between">
                    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <i className="fa-solid fa-person-praying text-[120px]"></i>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                          <i className="fa-solid fa-person-praying text-xl"></i>
                        </div>
                        <h3 className="text-xl font-black font-heading">PANDUAN SOLAT</h3>
                      </div>
                      <p className="text-sm text-white/90 mb-6 font-medium leading-relaxed">
                        Belajar cara solat dengan sempurna melalui video tutorial yang mudah diikuti.
                      </p>
                    </div>
                    <div className="relative z-10">
                      <a 
                        href="https://sites.google.com/smartreker.net/ezrasolution/smartzoom-tutor/panduan-solat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-yellow-400 hover:text-white px-5 py-2 rounded-lg font-black transition-all shadow-md active:scale-95 group/btn text-xs"
                      >
                        Belajar Solat
                        <i className="fa-solid fa-video text-[10px] group-hover/btn:scale-110 transition-transform"></i>
                      </a>
                    </div>
                  </div>

                  {/* IQ FunTEST Card */}
                  <div className="bg-[#1a237e] rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group h-full flex flex-col justify-between border-4 border-blue-400/20">
                    <div className="absolute top-3 right-3 text-yellow-400 opacity-40 animate-pulse">
                      <i className="fa-solid fa-star text-2xl"></i>
                    </div>
                    <div className="relative z-10">
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black font-heading text-white">IQ</span>
                          <div className="flex text-xl font-black font-heading tracking-tighter">
                            <span className="text-orange-500">F</span>
                            <span className="text-yellow-400">u</span>
                            <span className="text-pink-500">n</span>
                            <span className="text-yellow-400">T</span>
                            <span className="text-orange-500">E</span>
                            <span className="text-blue-400">S</span>
                            <span className="text-cyan-400">T</span>
                          </div>
                        </div>
                        <p className="text-[8px] font-bold text-blue-200 tracking-widest uppercase">Edufusion Smartzoom</p>
                      </div>
                      <p className="text-sm text-blue-100/90 mb-6 font-medium leading-relaxed">
                        Uji tahap kecerdasan anda dengan koleksi ujian visual yang mencabar!
                      </p>
                    </div>
                    <div className="relative z-10">
                      <a 
                        href="https://sites.google.com/view/funtestgalery/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-white hover:text-blue-900 px-5 py-2 rounded-lg font-black transition-all shadow-md active:scale-95 group/btn border border-white/20 text-xs"
                      >
                        Uji IQ Sekarang
                        <i className="fa-solid fa-brain text-[10px] group-hover/btn:scale-125 transition-transform"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="bg-gray-50 flex-1 py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Subject Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <button 
                    onClick={resetToHome}
                    className="flex items-center text-blue-600 font-bold mb-6 hover:gap-2 transition-all"
                  >
                    <i className="fa-solid fa-arrow-left mr-2"></i> Kembali ke Utama
                  </button>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${selectedSubject.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                      <i className={`fa-solid ${selectedSubject.icon} text-white text-3xl`}></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 font-heading">{selectedSubject.name}</h2>
                      <p className="text-gray-500">Tahun 1 • Kurikulum SmartZoom</p>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-gray-600 mb-8">
                    <p className="text-lg leading-relaxed">{selectedSubject.description}</p>
                  </div>

                  {/* scoreMAX Premium Module */}
                  {selectedSubject.scoreMax && (
                    <div className="mb-10 bg-gradient-to-r from-indigo-900 to-blue-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group border border-blue-400/30">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <i className="fa-solid fa-award text-[120px]"></i>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-yellow-500 text-indigo-900 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Premium</span>
                          <h3 className="text-2xl font-bold text-yellow-400 font-heading">{selectedSubject.scoreMax.title}</h3>
                        </div>
                        <p className="text-blue-100 mb-6 max-w-lg leading-relaxed">
                          {selectedSubject.scoreMax.description}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {selectedSubject.scoreMax.links.map((link, lIdx) => (
                            <a 
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-4 py-3 rounded-2xl font-bold transition-all shadow-lg active:scale-95 text-sm"
                            >
                              <i className="fa-solid fa-trophy"></i> {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4 font-heading">Topik Pembelajaran</h3>
                  <div className="space-y-4">
                    {selectedSubject.topics.map((topic, idx) => (
                      <div key={topic.id} className="bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex gap-4">
                            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                              {idx + 1}
                            </span>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">{topic.title}</h4>
                              <p className="text-sm text-gray-500">{topic.description}</p>
                            </div>
                          </div>
                          
                          {topic.videoUrl && (
                            <a 
                              href={topic.videoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 shrink-0"
                            >
                              <i className="fa-solid fa-play"></i> Tonton Video
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl shrink-0">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-800 mb-2 font-heading">Kuiz Cabaran Minda</h4>
                    <p className="text-yellow-700">Uji kefahaman anda tentang {selectedSubject.name} dengan menjawab kuiz interaktif kami dan kumpul bintang!</p>
                    <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-yellow-600 transition-colors">
                      Mula Kuiz
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Tutor Side-by-Side */}
              <div className="lg:col-span-5">
                <div className="sticky top-24">
                  <AITutor subjectName={selectedSubject.name} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-400 p-1.5 rounded-lg">
                <i className="fa-solid fa-graduation-cap text-gray-900"></i>
              </div>
              <h2 className="text-2xl font-bold text-white">SmartZoom<span className="text-yellow-400">Tutor</span></h2>
            </div>
            <p className="mb-6 leading-relaxed">
              Platform pembelajaran digital terbaik untuk murid sekolah rendah di Malaysia. Kami komited dalam menyediakan kandungan pendidikan berkualiti tinggi yang mudah diakses oleh sesiapa sahaja, di mana-mana sahaja.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Pautan Pantas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Subjek Tahun 1</a></li>
              <li><a href="https://sites.google.com/smartreker.net/smartzoom-tutor-sr/fg-t1" target="_blank" className="hover:text-yellow-400 transition-colors">FunGAME Zone</a></li>
              <li><a href="https://sites.google.com/view/smartiqra/home" target="_blank" className="hover:text-yellow-400 transition-colors">SMART IQRA'</a></li>
              <li><a href="https://sites.google.com/view/funtestgalery/home" target="_blank" className="hover:text-yellow-400 transition-colors">IQ FunTEST</a></li>
              <li><a href="https://sites.google.com/smartreker.net/ezrasolution/smartzoom-tutor/panduan-solat" target="_blank" className="hover:text-yellow-400 transition-colors">Panduan Solat</a></li>
              <li><a href="https://scoremax.interactivelink.site/studcklist" target="_blank" className="hover:text-yellow-400 transition-colors font-bold">Zon Ibu Bapa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="fa-solid fa-envelope mt-1 text-yellow-400"></i>
                <span>ezrasolution.net@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone mt-1 text-yellow-400"></i>
                <span>+60 16-402 2866</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-yellow-400"></i>
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>Edufusion Smartzoom - Hakcipta Terpelihara 2026</p>
        </div>
      </footer>

      {/* Custom Styles for Animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
