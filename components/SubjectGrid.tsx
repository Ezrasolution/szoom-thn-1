
import React from 'react';
import { SUBJECTS } from '../constants';
import { Subject } from '../types';

interface SubjectGridProps {
  onSelectSubject: (subject: Subject) => void;
}

const SubjectGrid: React.FC<SubjectGridProps> = ({ onSelectSubject }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 max-w-7xl mx-auto">
      {SUBJECTS.map((subject) => (
        <div
          key={subject.id}
          onClick={() => onSelectSubject(subject)}
          className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-b-8 border-transparent hover:border-current transform hover:-translate-y-2 group"
          style={{ color: subject.color.replace('bg-', '') }}
        >
          <div className={`${subject.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
            <i className={`fa-solid ${subject.icon} text-white text-3xl`}></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{subject.name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {subject.description}
          </p>
          <div className="flex items-center text-blue-600 font-bold text-sm">
            Mula Belajar <i className="fa-solid fa-arrow-right ml-2 group-hover:ml-4 transition-all"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectGrid;
