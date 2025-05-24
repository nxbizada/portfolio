import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-card gradient-border p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or sharing insights 
              about IT operations and technology management. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
              
              <div className="glass-card hover-card p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FaMapMarkerAlt size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Denmark</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://dk.linkedin.com/in/farhad-nabizada"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card hover-card p-4 rounded-lg block"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FaLinkedin size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-300">Professional Profile</p>
                  </div>
                </div>
              </a>

              <div className="glass-card hover-card p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FaEnvelope size={20} color="#10B981" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">Available on LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Focus */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h4>
              
              <div className="space-y-3">
                <div className="glass-card p-4 rounded-lg">
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    IT Infrastructure & Operations
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Cloud Administration (Google Workspace, Azure)
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Process Optimization & Automation
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Strategic Planning & Team Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <a
              href="https://dk.linkedin.com/in/farhad-nabizada"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-blue-500/20"
            >
              <FaLinkedin size={24} />
              <span className="text-lg font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 