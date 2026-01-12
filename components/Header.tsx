
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onHomeClick}
        >
          <div className="bg-yellow-400 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-sm">
            <i className="fa-solid fa-graduation-cap text-white text-xl"></i>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight">
            SmartZoom<span className="text-yellow-500">Tutor</span>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={onHomeClick} className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Utama</button>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-bold transition-colors">Kurikulum</a>
          <a 
            href="https://scoremax.interactivelink.site/studcklist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-black border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
          >
            <i className="fa-solid fa-user-shield text-sm"></i>
            Zon Ibu Bapa
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
            Log Masuk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
