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
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-700 rounded-lg">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-300">{edu.description}</p>
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