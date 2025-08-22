import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Award, MessageCircle, BookOpen, Network, ArrowRight, CheckCircle, Star, Lightbulb } from 'lucide-react';

function Cohort() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> CSTC </span>
              Cohort
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the specific benefits and expectations of being a CSTC member. Join a community designed specifically for community college transfer students in computer science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/apply"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Apply Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
              >
                Explore Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You Get as a CSTC Member</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock exclusive resources, opportunities, and connections designed specifically for community college transfer students.
            </p>
          </div>

          <div className="space-y-16">
            {/* A Dedicated Community */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">A Dedicated Community</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lifetime Slack Access</h4>
                      <p className="text-gray-600">Permanent access to the CSTC Slack workspace with hundreds of active members.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Specialized Channels</h4>
                      <p className="text-gray-600">Channels for technical help, interview prep, off-topic chats, and regional meetups.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Peer Support Network</h4>
                      <p className="text-gray-600">Connect with students who understand your unique transfer journey and challenges.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <MessageCircle className="w-16 h-16 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">Active Community</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career & Professional Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-purple-50 rounded-2xl p-8 order-2 lg:order-1">
                <Briefcase className="w-16 h-16 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">Career Resources</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-gray-700">Curated Internship List</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-gray-700">Startup Partnerships</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-gray-700">Resume Workshops</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <Briefcase size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Career & Professional Development</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">The CSTC Internship List</h4>
                      <p className="text-gray-600">A curated, live list of Summer 2026 internships and research opportunities specifically for community college students.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Startup Partnerships</h4>
                      <p className="text-gray-600">Exclusive access to roles at emerging startups looking to hire CSTC members.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Application Workshops</h4>
                      <p className="text-gray-600">Get help with your transfer applications, resumes, and cover letters from experienced mentors.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Networking & Leadership */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <Network size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Networking & Leadership</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Guest Speaker Series</h4>
                      <p className="text-gray-600">Intimate talks with engineers, founders, and recruiters from top tech companies.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Leadership Opportunities</h4>
                      <p className="text-gray-600">Take initiative by leading a project, organizing a workshop, or becoming a mentor for future members.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Connections</h4>
                      <p className="text-gray-600">Build meaningful relationships with professionals who understand and value your transfer experience.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-8">
                <Award className="w-16 h-16 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">Leadership Impact</h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600">Industry Speakers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25+</div>
                    <div className="text-gray-600">Student Leaders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Should Apply?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CSTC is designed for ambitious community college students ready to make their mark in technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Community College Student</h3>
              <p className="text-gray-600">
                You are currently enrolled at a community college in the United States and actively pursuing your education.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transfer Intent</h3>
              <p className="text-gray-600">
                You intend to transfer to a four-year university to major in Computer Science or a related field.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passionate & Community-Minded</h3>
              <p className="text-gray-600">
                You are passionate about technology and eager to contribute to a supportive community of peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the CSTC Community?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the next step in your tech journey. Join hundreds of transfer students who are already thriving with CSTC support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Apply to Join CSTC
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cohort;