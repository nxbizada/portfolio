import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const Education = () => {
  const education = [
    {
      degree: "Master's in Management Engineering",
      institution: "Your University",
      description: "Specialized in operational excellence and strategic management",
      icon: <FaGraduationCap size={24} color="#60A5FA" />
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "Your University",
      description: "Focused on IT infrastructure and systems management",
      icon: <FaGraduationCap size={24} color="#60A5FA" />
    }
  ];

  return (
    <section id="education" className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Education
        </h2>
        <div className="space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 p-4 md:p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                  <FaGraduationCap size={20} className="md:w-6 md:h-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight">{edu.degree}</h3>
                  <p className="text-blue-400 mb-2 text-sm md:text-base">{edu.institution}</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 