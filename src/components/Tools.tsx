import React from 'react';
import { FaFilePdf, FaLungs, FaLock, FaGithub, FaExternalLinkAlt, FaCode, FaCloud } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const Tools = () => {
  const tools = [
    {
      icon: <FaFilePdf size={32} className="text-red-400" />,
      title: "PDF Merger",
      description: "A streamlined tool for merging multiple PDF documents into a single file, designed for operational efficiency and document management workflows.",
      technologies: ["JavaScript", "PDF.js", "Web APIs", "File Processing"],
      features: [
        "Drag & drop interface for easy file selection",
        "Batch processing capabilities",
        "Optimized file compression",
        "Cross-platform compatibility"
      ],
      status: "Production",
      category: "Document Management"
    },
    {
      icon: <FaLungs size={32} className="text-blue-400" />,
      title: "BreatheAssistant",
      description: "An intelligent breathing assistance application designed to help users with respiratory exercises and wellness monitoring.",
      technologies: ["React", "Node.js", "Health APIs", "Progressive Web App"],
      features: [
        "Guided breathing exercises",
        "Progress tracking and analytics",
        "Personalized recommendations",
        "Offline functionality"
      ],
      status: "Development",
      category: "Health & Wellness"
    },
    {
      icon: <FaLock size={32} className="text-green-400" />,
      title: "Cloud Authentication System",
      description: "A robust, self-developed authentication system built with Google Cloud Functions, providing secure user management and access control.",
      technologies: ["Google Cloud Functions", "Firebase Auth", "Node.js", "JWT"],
      features: [
        "Multi-factor authentication",
        "Role-based access control",
        "Session management",
        "API security integration"
      ],
      status: "Production",
      category: "Security & Infrastructure"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Development': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <section id="tools" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Technical Projects & Tools</h2>
        
        <div className="space-y-6 md:space-y-8">
          {/* Introduction */}
          <div className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Self-Developed Solutions</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Showcasing innovative tools and applications developed to solve real-world problems, 
              demonstrating technical expertise in full-stack development, cloud architecture, and user experience design.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid lg:grid-cols-1 gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl hover-card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Icon and Status */}
                  <div className="flex flex-col items-center lg:items-start mb-4 md:mb-6 lg:mb-0">
                    <div className="p-4 md:p-6 bg-gray-800/50 rounded-2xl mb-3 md:mb-4 border border-gray-700/50">
                      {tool.icon}
                    </div>
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border ${getStatusColor(tool.status)}`}>
                      {tool.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{tool.title}</h3>
                        <span className="text-xs md:text-sm text-purple-400 font-medium">{tool.category}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{tool.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="glass-card p-3 md:p-4 rounded-lg">
                            <p className="flex items-start text-gray-300 text-sm md:text-base">
                              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {tool.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <button className="glass-card hover-card flex items-center justify-center space-x-2 md:space-x-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-blue-500/20">
                        <FaCode size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">View Details</span>
                      </button>
                      <button className="glass-card hover-card flex items-center justify-center space-x-2 md:space-x-3 px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-green-500/20">
                        <FaExternalLinkAlt size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Philosophy */}
          <div className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Development Philosophy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="p-3 md:p-4 bg-blue-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                  <FaCode size={20} className="md:w-6 md:h-6 text-blue-400" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Clean Code</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  Writing maintainable, scalable, and well-documented code following industry best practices.
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 md:p-4 bg-purple-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                  <FaCloud size={20} className="md:w-6 md:h-6 text-purple-400" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Cloud-First</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  Leveraging cloud technologies for scalability, reliability, and modern deployment practices.
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 md:p-4 bg-green-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                  <FaLock size={20} className="md:w-6 md:h-6 text-green-400" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Security-Focused</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  Implementing robust security measures and following secure development lifecycle practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools; 