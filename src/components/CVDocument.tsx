'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const CVDocument = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-gray-800 shadow-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', width: '210mm', height: '297mm', fontSize: '11px', overflow: 'hidden' }}>
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-0.5 tracking-tight">Farhad Nabizada</h1>
            <h2 className="text-sm font-light text-blue-200 mb-1">Associate Manager - Operations & IT</h2>
            <p className="text-xs text-gray-200 leading-relaxed max-w-lg font-light">
              IT operations manager overseeing 300+ employees across European offices. Expert in Google Workspace, Azure, and team leadership.
            </p>
          </div>
          <div className="ml-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl relative">
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
        <div className="relative z-10 grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-white/20 text-xs">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-blue-200 text-xs" />
            <span className="text-gray-200">Aarhus, Denmark</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-blue-200 text-xs" />
            <span className="text-gray-200">nxbizada@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaLinkedin className="text-blue-200 text-xs" />
            <span className="text-gray-200">linkedin.com/in/farhad-nabizada</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaGlobe className="text-blue-200 text-xs" />
            <span className="text-gray-200">farhadnabizada.com</span>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex h-[calc(100%-115px)]">
        {/* Left Column - Main Content */}
        <div className="flex-1 p-3 space-y-2.5">
          {/* Professional Experience */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-2">
              <div className="border-l-2 border-blue-200 pl-3">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Associate Manager - Operations & IT</h4>
                    <p className="text-blue-600 font-semibold text-xs">s360 • Aarhus, Denmark</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">May 2023 - Present</span>
                </div>
                <p className="text-gray-700 text-xs mb-0.5">Leading IT operations across multiple European offices with 300+ employees.</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• System administration for 300+ employees</li>
                  <li>• Design and implementation of IT internship programs</li>
                  <li>• Cost optimization and process improvement initiatives</li>
                </ul>
              </div>

              <div className="border-l-2 border-green-200 pl-3">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Sustainability Advisor</h4>
                    <p className="text-green-600 font-semibold text-xs">European House of Beds • Europe</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Jan - May 2023</span>
                </div>
                <p className="text-gray-700 text-xs mb-0.5">Advising on sustainability initiatives and environmental strategies.</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• Developed sustainability frameworks and environmental policies</li>
                  <li>• Strategic consulting on green initiatives and compliance</li>
                </ul>
              </div>

              <div className="border-l-2 border-purple-200 pl-3">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Project Manager</h4>
                    <p className="text-purple-600 font-semibold text-xs">Queen Genetics • Denmark</p>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">2022 - 2023</span>
                </div>
                <p className="text-gray-700 text-xs mb-0.5">Managing genetic research projects and coordinating teams.</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• Led genetic research project initiatives and timelines</li>
                  <li>• Coordinated between research teams and stakeholders</li>
                </ul>
              </div>

              <div className="border-l-2 border-orange-200 pl-3">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Music Producer</h4>
                    <p className="text-orange-600 font-semibold text-xs">Sony Music Entertainment • Remote</p>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded">2023 - Present</span>
                </div>
                <p className="text-gray-700 text-xs mb-0.5">Professional music production and audio engineering.</p>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• Contract work with Sony Music Entertainment</li>
                  <li>• Music composition, production, and audio engineering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-1.5">
              <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Master of Science in Management Engineering</h4>
                    <p className="text-green-700 font-semibold text-xs">Aalborg University • Denmark</p>
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-1.5 py-0.5 rounded">2019-2021</span>
                </div>
                <p className="text-gray-700 text-xs">Specialization in Operations Management and IT Strategy</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Bachelor of Science in Information Technology</h4>
                    <p className="text-blue-700 font-semibold text-xs">Aalborg University • Denmark</p>
                  </div>
                  <span className="text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded">2016-2019</span>
                </div>
                <p className="text-gray-700 text-xs">Focus on Systems Design and Infrastructure</p>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-600 to-blue-600 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Key Projects</h3>
            </div>
            <div className="space-y-1.5">
              <div className="bg-cyan-50 rounded-lg p-2 border border-cyan-200">
                <h4 className="font-bold text-gray-900 text-sm">IT Infrastructure Modernization</h4>
                <p className="text-gray-700 text-xs">Led comprehensive upgrade of IT systems across 5 European offices, improving efficiency by 40%</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                <h4 className="font-bold text-gray-900 text-sm">Custom Internship Program Development</h4>
                <p className="text-gray-700 text-xs">Designed and implemented structured IT internship program, resulting in 85% intern retention rate</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Achievements */}
        <div className="w-72 bg-gray-50 p-3 space-y-2.5">
          {/* Skills */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Core Competencies</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2 border border-blue-200/50">
                <h4 className="font-bold text-blue-700 mb-1.5 text-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></div>
                  Cloud & Infrastructure
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Google Workspace</span>
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Microsoft Azure</span>
                  <span className="bg-blue-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Cloud Architecture</span>
                  <span className="bg-blue-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">IT Infrastructure</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-2 border border-purple-200/50">
                <h4 className="font-bold text-purple-700 mb-1.5 text-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1.5"></div>
                  Operations & Management
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Process Optimization</span>
                  <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Change Management</span>
                  <span className="bg-purple-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Team Leadership</span>
                  <span className="bg-purple-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Strategic Planning</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200/50">
                <h4 className="font-bold text-green-700 mb-1.5 text-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                  Technical Development
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Authentication Systems</span>
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">API Integration</span>
                  <span className="bg-green-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">DevOps Practices</span>
                  <span className="bg-green-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Automation</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-2 border border-orange-200/50">
                <h4 className="font-bold text-orange-700 mb-1.5 text-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1.5"></div>
                  Creative & Production
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Music Production</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Audio Engineering</span>
                  <span className="bg-orange-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Beatmaking</span>
                  <span className="bg-orange-400 text-white px-2 py-0.5 rounded-full text-xs font-medium text-center">Recording</span>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Key Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">300+</div>
                <p className="text-blue-100 text-xs">Employees</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">5+</div>
                <p className="text-purple-100 text-xs">Years Exp</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">5</div>
                <p className="text-green-100 text-xs">Offices</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-2 text-center">
                <div className="text-sm font-bold">40%</div>
                <p className="text-orange-100 text-xs">Efficiency</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">English</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Danish</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Persian</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">Native</span>
              </div>
            </div>
          </section>

          {/* Technical Tools */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Technical Stack</h3>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Python</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Node.js</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Docker</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Git</span>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center mb-1.5">
              <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-pink-500 rounded-full mr-2"></div>
              <h3 className="text-base font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-1">
              <div className="bg-red-50 rounded p-1.5 border border-red-200">
                <p className="text-xs font-medium text-gray-900">Google Workspace Administrator</p>
                <p className="text-xs text-gray-600">Google Cloud Platform</p>
              </div>
              <div className="bg-blue-50 rounded p-1.5 border border-blue-200">
                <p className="text-xs font-medium text-gray-900">Azure Fundamentals</p>
                <p className="text-xs text-gray-600">Microsoft Azure</p>
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