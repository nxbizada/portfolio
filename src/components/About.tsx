import React from 'react';
import { FaUserGraduate, FaBriefcase, FaMusic, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="space-y-8">
          {/* Main Professional Summary */}
          <div className="glass-card gradient-border p-8 rounded-2xl text-center">
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Associate Manager at s360, overseeing IT operations across multiple European offices with 300+ employees. 
              I specialize in Google Workspace, Azure administration, and mentoring IT talent. 
              <span className="text-blue-400"> Beyond tech, I'm a professional music producer with Sony Music Entertainment.</span>
            </p>
          </div>

          {/* Key Areas Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card hover-card p-6 rounded-xl text-center">
              <div className="p-4 bg-blue-500/20 rounded-xl mb-4 inline-block">
                <FaUserGraduate size={32} color="#60A5FA" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Education</h3>
              <p className="text-gray-300 text-sm">MSc Management Engineering</p>
              <p className="text-gray-400 text-xs">Aalborg University</p>
            </div>

            <div className="glass-card hover-card p-6 rounded-xl text-center">
              <div className="p-4 bg-purple-500/20 rounded-xl mb-4 inline-block">
                <FaBriefcase size={32} color="#A855F7" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Current Role</h3>
              <p className="text-gray-300 text-sm">Associate Manager</p>
              <p className="text-gray-400 text-xs">s360 • Aarhus, Denmark</p>
            </div>

            <div className="glass-card hover-card p-6 rounded-xl text-center">
              <div className="p-4 bg-green-500/20 rounded-xl mb-4 inline-block">
                <FaMusic size={32} color="#10B981" />
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Music Career</h3>
              <p className="text-gray-300 text-sm">Music Producer</p>
              <p className="text-gray-400 text-xs">Sony Music Entertainment</p>
            </div>

            <div className="glass-card hover-card p-6 rounded-xl text-center">
              <div className="p-4 bg-orange-500/20 rounded-xl mb-4 inline-block">
                <FaAward size={32} color="#F59E0B" />
              </div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Specialties</h3>
              <p className="text-gray-300 text-sm">IT Operations</p>
              <p className="text-gray-400 text-xs">Team Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 