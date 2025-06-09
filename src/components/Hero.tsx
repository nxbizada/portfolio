'use client';

import React, { useRef, useState } from 'react';
import { FaLinkedin, FaServer, FaChartLine, FaUsers, FaDownload } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Image from 'next/image';
import CVDocument from './CVDocument';
import { downloadCV } from '../utils/pdfGenerator';

const Hero = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      await downloadCV(cvRef);
    } catch (error) {
      console.error('Failed to download CV:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="text-center space-y-8 md:space-y-12 relative z-10 px-4 max-w-6xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden glass-card gradient-border shadow-2xl">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFk0I6hhGzkAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684838139084?e=1753315200&v=beta&t=Bu40Kqemnziwa4ToGKQjm6xaHVhf0hIdy1KxqCFrPZY"
                  alt="Farhad Nabizada - IT & Operations Manager"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Professional Title and Name */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradient-text tracking-tight leading-tight">
                Farhad Nabizada
              </h1>
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold text-white leading-tight">
                Associate Manager - Operations & IT
              </h2>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                Overseeing IT operations across multiple European offices with 300+ employees at s360
              </p>
            </div>

            {/* Skills & Personal Aspects Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Personal Aspects */}
              <div className="glass-card gradient-border p-4 md:p-6 rounded-2xl max-w-5xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Personal Aspects</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                  {[
                    { trait: "Good Vibes", icon: "😊", color: "from-yellow-400 to-orange-500" },
                    { trait: "Straight to the Point", icon: "🎯", color: "from-blue-400 to-blue-600" },
                    { trait: "Transparent", icon: "🔍", color: "from-cyan-400 to-teal-500" },
                    { trait: "Creative & Innovative", icon: "💡", color: "from-purple-400 to-pink-500" },
                    { trait: "Solution-Oriented", icon: "⚡", color: "from-green-400 to-emerald-500" }
                  ].map((aspect, index) => (
                    <div 
                      key={index} 
                      className="group relative overflow-hidden rounded-xl hover:scale-105 transition-all duration-500"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${aspect.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="glass-card p-3 md:p-4 rounded-xl relative z-10 text-center">
                        <div className="text-lg md:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {aspect.icon}
                        </div>
                        <h4 className="text-xs md:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                          {aspect.trait}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Expertise Icons */}
              <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6">
                <div className="glass-card hover-card p-3 sm:p-4 md:p-6 rounded-xl group">
                  <FaServer size={24} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 md:mt-2">Infrastructure</p>
                </div>
                <div className="glass-card hover-card p-3 sm:p-4 md:p-6 rounded-xl group">
                  <FaChartLine size={24} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-purple-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 md:mt-2">Analytics</p>
                </div>
                <div className="glass-card hover-card p-3 sm:p-4 md:p-6 rounded-xl group">
                  <FaUsers size={24} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 md:mt-2">Leadership</p>
                </div>
              </div>

              {/* Core Skills */}
              <div className="glass-card gradient-border p-4 md:p-6 rounded-2xl max-w-5xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 text-center">Core Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { title: "IT & Operations", skills: ["Infrastructure", "System Admin", "Cloud Architecture"], color: "from-blue-500 to-cyan-500" },
                    { title: "Process & Automation", skills: ["Optimization", "Change Mgmt", "Automation"], color: "from-purple-500 to-pink-500" },
                    { title: "Leadership", skills: ["Project Mgmt", "Mentorship", "Strategy"], color: "from-green-500 to-emerald-500" },
                    { title: "Development", skills: ["Programming", "App Dev", "Integration"], color: "from-orange-500 to-red-500" }
                  ].map((category, index) => (
                    <div key={index} className="text-center">
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${category.color}/20 mb-2 md:mb-3`}>
                        <h4 className="text-xs md:text-sm font-semibold text-white mb-1 md:mb-2">{category.title}</h4>
                        <div className="space-y-1">
                          {category.skills.map((skill, idx) => (
                            <p key={idx} className="text-xs text-gray-300 leading-tight">{skill}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 md:mb-4">
                Associate Manager at s360, overseeing IT operations across multiple European offices with over 300 employees. 
                Specializing in optimizing IT processes, reducing costs, and managing key platforms like Google Workspace and Microsoft Azure 
                to ensure robust infrastructure.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Beyond corporate responsibilities, I mentor IT interns, design custom IT internship programs, and professionally produce music. 
                Passionate about solving challenges programmatically through app development and problem-solving.
              </p>
            </div>
          </div>

          {/* Action Buttons - Removed Contact Me button */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
            <a
              href="https://dk.linkedin.com/in/farhad-nabizada"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-full w-full md:w-auto justify-center bg-blue-500/20"
            >
              <FaLinkedin size={20} className="md:w-6 md:h-6" />
              <span className="text-base md:text-lg font-medium">LinkedIn Profile</span>
            </a>
            <button 
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="glass-card hover-card flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-full w-full md:w-auto justify-center bg-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaDownload size={20} className={`md:w-6 md:h-6 ${isDownloading ? 'animate-bounce' : ''}`} />
              <span className="text-base md:text-lg font-medium">
                {isDownloading ? 'Generating CV...' : 'Download CV'}
              </span>
            </button>
          </div>
        </div>

        {/* Decorative elements */}
      </section>

      {/* Hidden CV Document for PDF Generation */}
      <div className="fixed -top-[9999px] left-0 opacity-0 pointer-events-none">
        <CVDocument ref={cvRef} />
      </div>
    </>
  );
};

export default Hero; 