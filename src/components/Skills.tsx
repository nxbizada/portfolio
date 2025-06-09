import React from 'react';
import { FaCloud, FaCogs, FaUsers, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillBubbles = [
    { name: "IT & Operations", level: 95, color: "bg-blue-500", position: "top-8 left-8" },
    { name: "Project Management", level: 88, color: "bg-purple-500", position: "top-8 right-8" },
    { name: "Process Optimization", level: 90, color: "bg-green-500", position: "top-32 left-12" },
    { name: "Software Development", level: 82, color: "bg-orange-500", position: "top-32 right-12" },
    { name: "Change Management", level: 85, color: "bg-cyan-500", position: "bottom-8 left-8" },
    { name: "Automation", level: 87, color: "bg-pink-500", position: "bottom-8 right-8" }
  ];

  const coreSkills = [
    {
      icon: <FaCloud size={32} />,
      title: "IT & Operations",
      skills: ["IT Infrastructure", "System Administration", "Cloud Architecture"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaCogs size={32} />,
      title: "Process & Automation",
      skills: ["Process Optimization", "Change Management", "Automation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaUsers size={32} />,
      title: "Leadership & Strategy",
      skills: ["Project Management", "Mentorship", "Entrepreneurship"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCode size={32} />,
      title: "Development & Programming",
      skills: ["Software Development", "Programming", "API Integration"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Skills & Personal Aspects</h2>
        
        <div className="space-y-16">
          {/* Personal Aspects - Moved to the top */}
          <div className="glass-card gradient-border p-4 md:p-8 rounded-3xl">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 text-center">Personal Aspects</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { trait: "Good Vibes", icon: "😊", color: "from-yellow-400 to-orange-500", description: "Positive energy in every interaction" },
                { trait: "Straight to the Point", icon: "🎯", color: "from-blue-400 to-blue-600", description: "Clear and direct communication" },
                { trait: "Transparent", icon: "🔍", color: "from-cyan-400 to-teal-500", description: "Open and honest approach" },
                { trait: "Creative & Innovative", icon: "💡", color: "from-purple-400 to-pink-500", description: "Fresh perspectives and solutions" },
                { trait: "Solution-Oriented", icon: "⚡", color: "from-green-400 to-emerald-500", description: "Focus on results and outcomes" }
              ].map((aspect, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${aspect.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="glass-card gradient-border p-3 md:p-6 rounded-2xl relative z-10 text-center">
                    <div className="text-xl md:text-4xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {aspect.icon}
                    </div>
                    <h4 className="text-xs md:text-lg font-semibold text-white mb-1 md:mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {aspect.trait}
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed hidden md:block">
                      {aspect.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Universe - Improved Mobile Layout */}
          <div className="relative">
            {/* Desktop: Floating Skill Bubbles */}
            <div className="hidden lg:block relative h-96 mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 backdrop-blur-sm border border-white/10">
              {skillBubbles.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute ${skill.position} transform hover:scale-110 transition-all duration-500 cursor-pointer group`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`${skill.color}/20 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:${skill.color}/30 transition-all duration-300`}>
                    <div className="text-center">
                      <div className={`w-14 h-14 ${skill.color} rounded-full flex items-center justify-center mb-2 mx-auto animate-pulse`}>
                        <span className="text-white font-bold text-xs">{skill.level}%</span>
                      </div>
                      <p className="text-white text-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 max-w-20 leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CORE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Simple Grid Layout */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {skillBubbles.map((skill, index) => (
                <div key={index} className="glass-card gradient-border p-4 rounded-xl text-center hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center mb-3 mx-auto`}>
                    <span className="text-white font-bold text-xs">{skill.level}%</span>
                  </div>
                  <p className="text-white text-xs font-medium leading-tight">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Skill Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreSkills.map((category, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="glass-card gradient-border p-4 md:p-6 rounded-2xl relative z-10">
                  <div className="text-center mb-4 md:mb-6">
                    <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="glass-card p-2 md:p-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1 md:hover:translate-x-2"
                      >
                        <p className="text-gray-300 text-xs md:text-sm flex items-center">
                          <span className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r ${category.color} rounded-full mr-2 md:mr-3 animate-pulse`}></span>
                          <span className="leading-tight">{skill}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Radar */}
          <div className="glass-card gradient-border p-4 md:p-8 rounded-3xl">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 text-center">Expertise Level</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { skill: "IT & Operations", level: 95, color: "blue" },
                { skill: "Process Optimization", level: 90, color: "purple" },
                { skill: "Project Management", level: 88, color: "green" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 md:mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={`rgb(${item.color === 'blue' ? '59, 130, 246' : item.color === 'purple' ? '168, 85, 247' : '34, 197, 94'})`}
                        strokeWidth="2"
                        strokeDasharray={`${item.level}, 100`}
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg md:text-2xl font-bold text-white">{item.level}%</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm md:text-base">{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 