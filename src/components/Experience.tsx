import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Manager - Operations & IT",
      company: "s360",
      location: "Aarhus, Denmark",
      period: "2023 - Present",
      description: "Co-leading IT operations across multiple European offices with 300+ employees.",
      highlights: [
        "Google Workspace & Azure administration",
        "IT internship program design",
        "Cost optimization & process improvement"
      ],
      color: "from-blue-500 to-cyan-500",
      logo: "/logos/s360_logo_1200x628.png",
      isActive: true
    },
    {
      title: "Music Producer",
      company: "Sony Music Entertainment",
      location: "Remote",
      period: "2023 - Present",
      description: "Professional music production, beatmaking, and recording engineering.",
      highlights: [
        "Contract work with Sony Music",
        "Music composition & production",
        "Audio engineering & mastering"
      ],
      color: "from-purple-500 to-pink-500",
      logo: "/logos/png-clipart-sony-music-headline-security-entertainment-music-industry-logo-sony-music-text-logo.png",
      isActive: true
    },
    {
      title: "Master's Thesis",
      company: "Bankdata",
      location: "Denmark",
      period: "2021",
      description: "Research on agile methodologies and change management in financial technology.",
      highlights: [
        "Agile methodology research",
        "Change management analysis",
        "Financial technology focus"
      ],
      color: "from-green-500 to-emerald-500",
      logo: "/logos/bankdata-logo-farvet-rgb.png",
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Professional Journey</h2>
        
        <div className="space-y-12">
          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
            
            {/* Mobile Timeline Line - visible on mobile only */}
            <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
            
            <div className="space-y-8 md:space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className={`w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r ${exp.color} rounded-full border-2 md:border-4 border-gray-900 ${exp.isActive ? 'animate-pulse' : ''}`}>
                      <div className="w-full h-full rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="group glass-card gradient-border p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-3 md:mb-4">
                          <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg p-1 md:p-2 flex items-center justify-center overflow-hidden">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            {exp.isActive && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400 font-medium text-sm md:text-base">{exp.company}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 text-xs md:text-sm mt-2 space-y-1 sm:space-y-0">
                            <span className="flex items-center space-x-1">
                              <FaMapMarkerAlt size={10} />
                              <span>{exp.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FaCalendarAlt size={10} />
                              <span>{exp.period}</span>
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{exp.description}</p>

                        {/* Highlights */}
                        <div className="space-y-1 md:space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start space-x-2 md:space-x-3 text-gray-300 text-xs md:text-sm">
                              <FaChevronRight size={8} className="text-blue-400 mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout - only on desktop */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Stats */}
          <div className="glass-card gradient-border p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Career Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">300+</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                </div>
                <p className="text-gray-300 font-medium">Employees Managed</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">5+</span>
                  </div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <p className="text-gray-300 font-medium">Years Experience</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <p className="text-gray-300 font-medium">Active Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 