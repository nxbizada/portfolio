import React from 'react';
import { FaUserGraduate, FaBriefcase, FaMusic, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="space-y-6 md:space-y-8">
          {/* Main Professional Summary */}
          <div className="glass-card gradient-border p-4 sm:p-6 md:p-8 rounded-2xl text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              at s360 I oversee IT-operations across multiple European offices with 300+ employees. 
              I specialize in   and mentoring IT talent. 
              <span className="text-blue-400"> Beyond tech, I'm a professional music producer with Sony Music Entertainment.</span>
            </p>
          </div>

          {/* Key Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="glass-card hover-card p-4 md:p-6 rounded-xl text-center">
              <div className="p-3 md:p-4 bg-blue-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                <FaUserGraduate size={24} className="md:w-8 md:h-8" color="#60A5FA" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-blue-400 mb-2 md:mb-3">Education</h3>
              <p className="text-gray-300 text-sm">MSc Management Engineering</p>
              <p className="text-gray-400 text-xs">Aalborg University</p>
            </div>

            <div className="glass-card hover-card p-4 md:p-6 rounded-xl text-center">
              <div className="p-3 md:p-4 bg-purple-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                <FaBriefcase size={24} className="md:w-8 md:h-8" color="#A855F7" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-purple-400 mb-2 md:mb-3">Current Role</h3>
              <p className="text-gray-300 text-sm">Associate Manager</p>
              <p className="text-gray-400 text-xs">s360 • Aarhus, Denmark</p>
            </div>

            <div className="glass-card hover-card p-4 md:p-6 rounded-xl text-center">
              <div className="p-3 md:p-4 bg-green-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                <FaMusic size={24} className="md:w-8 md:h-8" color="#10B981" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-green-400 mb-2 md:mb-3">Music Career</h3>
              <p className="text-gray-300 text-sm leading-tight">Music Producer, Beatmaker and Recording Engineer</p>
              <p className="text-gray-400 text-xs">Sony Music Entertainment</p>
            </div>

            <div className="glass-card hover-card p-4 md:p-6 rounded-xl text-center">
              <div className="p-3 md:p-4 bg-orange-500/20 rounded-xl mb-3 md:mb-4 inline-block">
                <FaAward size={24} className="md:w-8 md:h-8" color="#F59E0B" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-orange-400 mb-2 md:mb-3">Specialties</h3>
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