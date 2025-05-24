import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Let's Connect</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or sharing insights 
              about IT operations and technology management. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Contact Information</h4>
              
              <div className="glass-card hover-card p-3 md:p-4 rounded-lg">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg">
                    <FaMapMarkerAlt size={16} className="md:w-5 md:h-5" color="#60A5FA" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Location</p>
                    <p className="text-gray-300 text-sm">Denmark</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://dk.linkedin.com/in/farhad-nabizada"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card hover-card p-3 md:p-4 rounded-lg block"
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg">
                    <FaLinkedin size={16} className="md:w-5 md:h-5" color="#60A5FA" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">LinkedIn</p>
                    <p className="text-gray-300 text-sm">Professional Profile</p>
                  </div>
                </div>
              </a>

              <div className="glass-card hover-card p-3 md:p-4 rounded-lg">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-green-500/20 rounded-lg">
                    <FaEnvelope size={16} className="md:w-5 md:h-5" color="#10B981" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Email</p>
                    <p className="text-gray-300 text-sm">Available on LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Focus */}
            <div className="space-y-4 md:space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Areas of Expertise</h4>
              
              <div className="space-y-2 md:space-y-3">
                <div className="glass-card p-3 md:p-4 rounded-lg">
                  <p className="flex items-center text-gray-300 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mr-2 md:mr-3"></span>
                    IT Infrastructure & Operations
                  </p>
                </div>
                <div className="glass-card p-3 md:p-4 rounded-lg">
                  <p className="flex items-center text-gray-300 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full mr-2 md:mr-3"></span>
                    Cloud Administration (Google Workspace, Azure)
                  </p>
                </div>
                <div className="glass-card p-3 md:p-4 rounded-lg">
                  <p className="flex items-center text-gray-300 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-2 md:mr-3"></span>
                    Process Optimization & Automation
                  </p>
                </div>
                <div className="glass-card p-3 md:p-4 rounded-lg">
                  <p className="flex items-center text-gray-300 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mr-2 md:mr-3"></span>
                    Strategic Planning & Team Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-6 md:mt-8">
            <a
              href="https://dk.linkedin.com/in/farhad-nabizada"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card inline-flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-blue-500/20"
            >
              <FaLinkedin size={20} className="md:w-6 md:h-6" />
              <span className="text-base md:text-lg font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 