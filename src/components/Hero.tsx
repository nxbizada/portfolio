'use client';

import React, { useRef, useState } from 'react';
import { FaLinkedin, FaArrowDown, FaServer, FaChartLine, FaUsers, FaDownload, FaEnvelope } from 'react-icons/fa';
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

        <div className="text-center space-y-12 relative z-10 px-4 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glass-card gradient-border shadow-2xl">
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
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text tracking-tight">
                Farhad Nabizada
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-white">
                Associate Manager - Operations & IT
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Overseeing IT operations across multiple European offices with 300+ employees at s360
              </p>
            </div>

            {/* Key Expertise Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="glass-card hover-card p-6 rounded-xl group">
                <FaServer size={36} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300 mt-2">Infrastructure</p>
              </div>
              <div className="glass-card hover-card p-6 rounded-xl group">
                <FaChartLine size={36} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300 mt-2">Analytics</p>
              </div>
              <div className="glass-card hover-card p-6 rounded-xl group">
                <FaUsers size={36} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300 mt-2">Leadership</p>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="glass-card gradient-border p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Associate Manager at s360, overseeing IT operations across multiple European offices with over 300 employees. 
                Specializing in optimizing IT processes, reducing costs, and managing key platforms like Google Workspace and Microsoft Azure 
                to ensure robust infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond corporate responsibilities, I mentor IT interns, design custom IT internship programs, and professionally produce music. 
                Passionate about solving challenges programmatically through app development and problem-solving.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://dk.linkedin.com/in/farhad-nabizada"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card flex items-center space-x-3 px-8 py-4 rounded-full w-full md:w-auto justify-center bg-blue-500/20"
            >
              <FaLinkedin size={24} />
              <span className="text-lg font-medium">LinkedIn Profile</span>
            </a>
            <a
              href="#contact"
              className="glass-card hover-card flex items-center space-x-3 px-8 py-4 rounded-full w-full md:w-auto justify-center bg-purple-500/20"
            >
              <FaEnvelope size={24} />
              <span className="text-lg font-medium">Contact Me</span>
            </a>
            <button 
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="glass-card hover-card flex items-center space-x-3 px-8 py-4 rounded-full w-full md:w-auto justify-center bg-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaDownload size={24} className={isDownloading ? 'animate-bounce' : ''} />
              <span className="text-lg font-medium">
                {isDownloading ? 'Generating CV...' : 'Download CV'}
              </span>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FaArrowDown size={24} className="text-gray-400" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* Hidden CV Document for PDF Generation */}
      <div className="fixed -top-[9999px] left-0 opacity-0 pointer-events-none">
        <CVDocument ref={cvRef} />
      </div>
    </>
  );
};

export default Hero; 