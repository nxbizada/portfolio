'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const CVDocument = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-gray-800 shadow-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', width: '210mm', height: '297mm', fontSize: '10px', overflow: 'hidden' }}>
      {/* Header - Fixed full width */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-3 w-full" style={{ margin: 0, padding: '12px', boxSizing: 'border-box' }}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1 tracking-tight">Farhad Nabizada</h1>
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
        
        {/* Contact Info */}
        <div className="grid grid-cols-4 gap-2 mt-2 pt-2 border-t border-white/20 text-xs">
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
      <div className="flex" style={{ height: 'calc(297mm - 110px)' }}>
        {/* Left Column - Main Content */}
        <div className="flex-1 p-3 space-y-2">
          {/* Professional Experience */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-300 pb-1">
              <div className="w-1 h-4 bg-blue-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Experience</h3>
            </div>
            <div className="space-y-2">
              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Associate Manager - Operations & IT</h4>
                    <p className="text-blue-600 font-medium text-xs">s360 • Aarhus, Denmark</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-blue-50 px-2 py-1 rounded">May 2023 - Present</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mb-1">Leading IT operations across multiple European offices with 300+ employees.</p>
                <ul className="text-xs text-gray-600 ml-3">
                  <li>• System administration for 300+ employees</li>
                  <li>• Design and implementation of IT internship programs</li>
                  <li>• Cost optimization and process improvement initiatives</li>
                </ul>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Sustainability Advisor</h4>
                    <p className="text-green-600 font-medium text-xs">European House of Beds • Europe</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-green-50 px-2 py-1 rounded">Jan - May 2023</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mb-1">Advising on sustainability initiatives and environmental strategies.</p>
                <ul className="text-xs text-gray-600 ml-3">
                  <li>• Developed sustainability frameworks and environmental policies</li>
                  <li>• Strategic consulting on green initiatives and compliance</li>
                </ul>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Project Manager</h4>
                    <p className="text-purple-600 font-medium text-xs">Queen Genetics • Denmark</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-purple-50 px-2 py-1 rounded">2022 - 2023</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mb-1">Managing genetic research projects and coordinating teams.</p>
                <ul className="text-xs text-gray-600 ml-3">
                  <li>• Led genetic research project initiatives and timelines</li>
                  <li>• Coordinated between research teams and stakeholders</li>
                </ul>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Music Producer</h4>
                    <p className="text-orange-600 font-medium text-xs">Sony Music Entertainment • Remote</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-orange-50 px-2 py-1 rounded">2023 - Present</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mb-1">Professional music production and audio engineering.</p>
                <ul className="text-xs text-gray-600 ml-3">
                  <li>• Contract work with Sony Music Entertainment</li>
                  <li>• Music composition, production, and audio engineering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-300 pb-1">
              <div className="w-1 h-4 bg-green-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Education</h3>
            </div>
            <div className="space-y-2">
              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Master of Science in Management Engineering</h4>
                    <p className="text-green-700 font-medium text-xs">Aalborg University • Denmark</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-green-50 px-2 py-1 rounded">2019-2021</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs">Specialization in Operations Management and IT Strategy</p>
              </div>
              <div className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Bachelor of Science in Information Technology</h4>
                    <p className="text-blue-700 font-medium text-xs">Aalborg University • Denmark</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-600 bg-blue-50 px-2 py-1 rounded">2016-2019</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs">Focus on Systems Design and Infrastructure</p>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-300 pb-1">
              <div className="w-1 h-4 bg-cyan-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Key Projects</h3>
            </div>
            <div className="space-y-2">
              <div className="mb-2">
                <h4 className="font-bold text-gray-900 text-sm">IT Infrastructure Modernization</h4>
                <p className="text-gray-700 text-xs">Led comprehensive upgrade of IT systems across 5 European offices, improving efficiency by 40%</p>
              </div>
              <div className="mb-2">
                <h4 className="font-bold text-gray-900 text-sm">Custom Internship Program Development</h4>
                <p className="text-gray-700 text-xs">Designed and implemented structured IT internship program, resulting in 85% intern retention rate</p>
              </div>
              <div className="mb-2">
                <h4 className="font-bold text-gray-900 text-sm">Process Automation Initiative</h4>
                <p className="text-gray-700 text-xs">Automated routine IT tasks reducing manual workload by 60% and improving response times</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Achievements */}
        <div className="w-72 bg-gray-50 p-3 space-y-2">
          {/* Skills - Redesigned */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-purple-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Core Competencies</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-blue-700 mb-2 text-xs">Cloud & Infrastructure</h4>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span>Google Workspace</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Microsoft Azure</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Cloud Architecture</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-blue-400 h-2 rounded-full" style={{width: '85%'}}></div></div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-purple-700 mb-2 text-xs">Operations & Management</h4>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span>Process Optimization</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Change Management</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Team Leadership</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-purple-400 h-2 rounded-full" style={{width: '92%'}}></div></div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-green-700 mb-2 text-xs">Technical Development</h4>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span>API Integration</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>DevOps Practices</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-green-400 h-2 rounded-full" style={{width: '82%'}}></div></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Automation</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2"><div className="bg-green-400 h-2 rounded-full" style={{width: '90%'}}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-yellow-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Key Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-100 text-center p-2 rounded border">
                <div className="text-lg font-bold text-blue-700">300+</div>
                <p className="text-xs text-blue-600">Employees</p>
              </div>
              <div className="bg-purple-100 text-center p-2 rounded border">
                <div className="text-lg font-bold text-purple-700">5+</div>
                <p className="text-xs text-purple-600">Years Exp</p>
              </div>
              <div className="bg-green-100 text-center p-2 rounded border">
                <div className="text-lg font-bold text-green-700">5</div>
                <p className="text-xs text-green-600">Offices</p>
              </div>
              <div className="bg-orange-100 text-center p-2 rounded border">
                <div className="text-lg font-bold text-orange-700">40%</div>
                <p className="text-xs text-orange-600">Efficiency</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-indigo-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Languages</h3>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium">English</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Fluent</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium">Danish</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Fluent</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium">Persian</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Native</span>
              </div>
            </div>
          </section>

          {/* Technical Tools */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-gray-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Technical Stack</h3>
            </div>
            <div className="grid grid-cols-3 gap-1 text-xs">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">Python</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">Node.js</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">Docker</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-center">Git</span>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-red-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Certifications</h3>
            </div>
            <div className="space-y-1">
              <div className="bg-red-50 rounded p-2 border border-red-200">
                <p className="text-xs font-medium text-gray-900">Google Workspace Administrator</p>
                <p className="text-xs text-gray-600">Google Cloud Platform</p>
              </div>
              <div className="bg-blue-50 rounded p-2 border border-blue-200">
                <p className="text-xs font-medium text-gray-900">Azure Fundamentals</p>
                <p className="text-xs text-gray-600">Microsoft Azure</p>
              </div>
            </div>
          </section>

          {/* Professional Interests */}
          <section>
            <div className="flex items-center mb-2 border-b border-gray-400 pb-1">
              <div className="w-1 h-4 bg-pink-600 rounded-full mr-2"></div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Interests</h3>
            </div>
            <div className="text-xs text-gray-700 space-y-1">
              <p>• Music Production & Audio Engineering</p>
              <p>• Process Automation & Innovation</p>
              <p>• Team Development & Mentoring</p>
              <p>• Sustainable Technology Solutions</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

CVDocument.displayName = 'CVDocument';

export default CVDocument; 