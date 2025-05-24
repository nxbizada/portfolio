'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const CVDocument = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-gray-800 shadow-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', width: '210mm', fontSize: '12px' }}>
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1 tracking-tight">Farhad Nabizada</h1>
            <h2 className="text-lg font-light text-blue-200 mb-2">Associate Manager - Operations & IT</h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-lg font-light">
              IT operations manager overseeing 300+ employees across European offices. Expert in Google Workspace, Azure, and team leadership.
            </p>
          </div>
          <div className="ml-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl relative">
              <img
                src="/images/images.jpg"
                alt="Farhad Nabizada"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center 25%',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Compact Contact Info */}
        <div className="relative z-10 grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-white/20 text-xs">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-200" />
            <span className="text-gray-200">Aarhus, Denmark</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-200" />
            <span className="text-gray-200">nxbizada@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-200" />
            <span className="text-gray-200">linkedin.com/in/farhad-nabizada</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-blue-200" />
            <span className="text-gray-200">farhadnabizada.com</span>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex">
        {/* Left Column - Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Professional Experience */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900">Associate Manager - Operations & IT</h4>
                    <p className="text-blue-600 font-semibold text-sm">s360 • Aarhus, Denmark</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">May 2023 - Present</span>
                </div>
                <p className="text-gray-700 text-xs mb-2">Leading IT operations across multiple European offices with 300+ employees.</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• System administration for 300+ employees</li>
                  <li>• Design and implementation of IT internship programs</li>
                  <li>• Cost optimization and process improvement initiatives</li>
                  <li>• Programatically solving IT issues with automation</li>
                </ul>
              </div>

              <div className="border-l-2 border-green-200 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900">Sustainability Advisor</h4>
                    <p className="text-green-600 font-semibold text-sm">European House of Beds • Europe</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Jan 2023 - May 2023</span>
                </div>
                <p className="text-gray-700 text-xs mb-2">Advising on sustainability initiatives and environmental strategies across European operations.</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Developed sustainability frameworks and environmental policies</li>
                  <li>• Strategic consulting on green initiatives and compliance</li>
                </ul>
              </div>

              <div className="border-l-2 border-purple-200 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900">Project Manager</h4>
                    <p className="text-purple-600 font-semibold text-sm">Queen Genetics • Denmark</p>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">2022 - 2023</span>
                </div>
                <p className="text-gray-700 text-xs mb-2">Managing genetic research projects and coordinating cross-functional teams.</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Led genetic research project initiatives and timelines</li>
                  <li>• Coordinated between research teams and stakeholders</li>
                </ul>
              </div>

              <div className="border-l-2 border-orange-200 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900">Music Producer</h4>
                    <p className="text-orange-600 font-semibold text-sm">Sony Music Entertainment • Remote</p>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">2023 - Present</span>
                </div>
                <p className="text-gray-700 text-xs mb-2">Professional music production, beatmaking, and recording engineering.</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Contract work with Sony Music Entertainment</li>
                  <li>• Music composition, production, and audio engineering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Master of Science in Management Engineering</h4>
                    <p className="text-green-700 font-semibold text-xs">Aalborg University • Denmark</p>
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">2019-2021</span>
                </div>
                <p className="text-gray-700 text-xs">Specialization in Operations Management and IT Strategy</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Bachelor of Science in Information Technology</h4>
                    <p className="text-blue-700 font-semibold text-xs">Aalborg University • Denmark</p>
                  </div>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">2016-2019</span>
                </div>
                <p className="text-gray-700 text-xs">Focus on Systems Design and Infrastructure</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Achievements */}
        <div className="w-80 bg-gray-50 p-6 space-y-4">
          {/* Skills */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-900">Core Competencies</h3>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-50"></div>
                <div className="relative p-3 rounded-lg border border-blue-200/50">
                  <h4 className="font-bold text-blue-700 mb-3 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Cloud & Infrastructure
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Google Workspace</span>
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Microsoft Azure</span>
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Cloud Architecture</span>
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">IT Infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg opacity-50"></div>
                <div className="relative p-3 rounded-lg border border-purple-200/50">
                  <h4 className="font-bold text-purple-700 mb-3 text-sm flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Operations & Management
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Process Optimization</span>
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Change Management</span>
                    <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Team Leadership</span>
                    <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Strategic Planning</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg opacity-50"></div>
                <div className="relative p-3 rounded-lg border border-green-200/50">
                  <h4 className="font-bold text-green-700 mb-3 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Technical Development
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Authentication Systems</span>
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">API Integration</span>
                    <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">DevOps Practices</span>
                    <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Automation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg opacity-50"></div>
                <div className="relative p-3 rounded-lg border border-orange-200/50">
                  <h4 className="font-bold text-orange-700 mb-3 text-sm flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Creative & Production
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Music Production</span>
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Audio Engineering</span>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Beatmaking</span>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">Recording</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-900">Achievements</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">300+</div>
                <p className="text-blue-100 text-xs">Employees</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">5+</div>
                <p className="text-purple-100 text-xs">Years</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">2</div>
                <p className="text-green-100 text-xs">Roles</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">English</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Danish</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Persian</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Native</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

CVDocument.displayName = 'CVDocument';

export default CVDocument; 