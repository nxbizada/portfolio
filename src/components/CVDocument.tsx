'use client';

import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const CVDocument = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-gray-800" style={{ 
      fontFamily: 'Inter, system-ui, sans-serif', 
      width: '210mm', 
      height: '297mm', 
      fontSize: '9px', 
      lineHeight: '1.3', 
      margin: 0, 
      padding: '12mm 12mm 8mm 12mm', 
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      {/* Modern Header */}
      <header className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
              Farhad Nabizada
            </h1>
            <h2 className="text-sm font-medium text-blue-600 mb-2">Operations & IT Management</h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Results-driven IT operations manager leading teams of 300+ employees across European offices. 
              Expert in process optimization, change management, and strategic technology initiatives with proven automation and deployment experience.
            </p>
          </div>
          <div className="ml-6">
            <div className="w-20 h-20 rounded-full overflow-hidden" style={{
              border: '2px solid',
              borderImage: 'linear-gradient(to right, #60a5fa, #a78bfa) 1',
              boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)'
            }}>
              <img
                src="/images/images.jpg"
                alt="Farhad Nabizada"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 border-t border-gray-200 pt-3">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Aarhus, Denmark</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaEnvelope className="text-blue-500" />
            <span>mail@farhadnabizada.com</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaLinkedin className="text-blue-500" />
            <span>linkedin.com/in/farhad-nabizada</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaGlobe className="text-blue-500" />
            <span>farhadnabizada.com</span>
          </div>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Left Column - Main Content (2/3 width) */}
        <div className="col-span-2 space-y-4">
          
          {/* Professional Experience */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="space-y-3">
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Handicaphjælper</h4>
                    <p className="text-blue-600 font-medium text-xs">Aarhus Kommune • Aarhus, Denmark</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">Jan 2014 - Present</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-0.5 ml-3">
                  <li>• Providing support and assistance to individuals with disabilities</li>
                  <li>• Helping wheelchair users when needed</li>
                  <li>• Communication, problem-solving, and teamwork</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Associate Manager - Operations & IT</h4>
                    <p className="text-blue-600 font-medium text-xs">s360 • Aarhus, Denmark</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">May 2023 - Nov 2025</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-0.5 ml-3">
                  <li>• Leading IT operations across 5 European offices, managing 300+ employees</li>
                  <li>• Designed and implemented comprehensive IT internship programs</li>
                  <li>• Achieved significant efficiency improvements through infrastructure modernization initiatives</li>
                  <li>• Reduced manual workload through process automation and optimization</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Music Producer</h4>
                    <p className="text-blue-600 font-medium text-xs">Sony Music Entertainment • Remote</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">2023 - Present</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-0.5 ml-3">
                  <li>• Contract work with Sony Music Entertainment for music composition and production</li>
                  <li>• Professional audio engineering and post-production services</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Sustainability Advisor</h4>
                    <p className="text-blue-600 font-medium text-xs">European House of Beds • Europe</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">Jan - May 2023</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-0.5 ml-3">
                  <li>• Developed sustainability frameworks and environmental compliance strategies</li>
                  <li>• Strategic consulting on green initiatives and sustainable technology solutions</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Project Manager</h4>
                    <p className="text-blue-600 font-medium text-xs">Queen Genetics • Denmark</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">2022 - 2023</span>
                </div>
                <ul className="text-xs text-gray-700 space-y-0.5 ml-3">
                  <li>• Managed genetic research project timelines and cross-functional team coordination</li>
                  <li>• Facilitated communication between research teams and key stakeholders</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              EDUCATION
            </h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Master of Science in Management Engineering</h4>
                    <p className="text-blue-600 font-medium text-xs">Aalborg University • Denmark</p>
                    <p className="text-gray-600 text-xs">Specialization: Operations Management & IT Strategy</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">2019 - 2021</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-0.5">
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Bachelor of Science in Information Technology</h4>
                    <p className="text-blue-600 font-medium text-xs">Aalborg University • Denmark</p>
                    <p className="text-gray-600 text-xs">Focus: Systems Design & Infrastructure</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">2016 - 2019</span>
                </div>
              </div>
            </div>
          </section>

          {/* Key Technical Achievements */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              KEY TECHNICAL ACHIEVEMENTS
            </h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Deployed OpenWebUI across multiple environments: Google Cloud Run, VM instances, and Kubernetes clusters</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Developed Chrome extension for workflow automation and productivity enhancement</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Built full-stack automation solutions for business process optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Created custom Slack applications for team collaboration and reporting</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Additional Info (1/3 width) */}
        <div className="space-y-3.5">
          
          {/* Personal Skills */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              PERSONAL SKILLS
            </h3>
            <div className="space-y-1 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Strategic Thinking & Planning</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Problem-Solving & Innovation</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Team Leadership & Mentoring</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cross-Cultural Communication</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Adaptability & Continuous Learning</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Creative & Analytical Balance</span>
              </div>
            </div>
          </section>
          
          {/* Core Management Skills */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              CORE COMPETENCIES
            </h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1.5 text-xs">Operations & Management</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Operations Management</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Change Management</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Process Optimization</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Portfolio Management</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1.5 text-xs">Technical & Automation</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Process Automation</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cloud Infrastructure</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">System Integration</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Workflow Optimization</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Management Platforms */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              PLATFORMS & TOOLS
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Google Workspace</span>
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Microsoft Azure</span>
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Slack</span>
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Google Cloud</span>
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Process Mapping</span>
              <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                background: 'linear-gradient(135deg, #eff6ff, #f3f4f6)', 
                color: '#374151',
                border: '1px solid #d1d5db'
              }}>Automation Tools</span>
            </div>
          </section>

          {/* Professional Development */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              PROFESSIONAL DEVELOPMENT
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-medium text-gray-900">IT Management Specialization</p>
                <p className="text-gray-600">Operations & Infrastructure Focus</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Change Management Methodologies</p>
                <p className="text-gray-600">Process Optimization & Automation</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Leadership & Team Development</p>
                <p className="text-gray-600">Continuous Learning & Innovation</p>
              </div>
            </div>
          </section>

          {/* Languages - Moved to Bottom */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 mb-2 pb-1" style={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2563eb, #7c3aed) 1'
            }}>
              LANGUAGES
            </h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">English</span>
                <span className="text-blue-600 font-medium">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Danish</span>
                <span className="text-blue-600 font-medium">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Persian</span>
                <span className="text-blue-600 font-medium">Native</span>
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