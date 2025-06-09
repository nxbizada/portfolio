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
    <section id="skills" className="pt-8 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title !mb-4">Skills & Personal Aspects</h2>
        
        <div className="space-y-8">
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

          {/* Core Skills - Mobile-First Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {coreSkills.map((category, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`}></div>
                <div className="glass-card gradient-border p-4 md:p-6 rounded-2xl relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`flex-shrink-0 p-3 md:p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                      >
                        <span className={`flex-shrink-0 w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></span>
                        <span className="text-gray-300 text-sm md:text-base flex-1">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Metrics - Mobile-Optimized */}
          <div className="glass-card gradient-border p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center">Key Skills</h3>
            <div className="space-y-4">
              {[
                { skill: "IT & Operations", level: 95, color: "bg-blue-500", description: "Infrastructure, Cloud Architecture, System Administration" },
                { skill: "Process Optimization", level: 90, color: "bg-purple-500", description: "Change Management, Workflow Automation" },
                { skill: "Project Management", level: 88, color: "bg-green-500", description: "Team Leadership, Strategic Planning" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm md:text-base font-medium text-white">{item.skill}</h4>
                    <span className="text-xs md:text-sm text-gray-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 md:h-3">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.description}</p>
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