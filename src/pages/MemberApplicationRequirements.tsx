import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, FileText, Users, GraduationCap, ArrowRight, Clock, Star } from 'lucide-react';

function MemberApplicationRequirements() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Lorem ipsum dolor 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> sit amet </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center">
                <AlertCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                <p className="text-blue-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lorem Ipsum</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dolor Sit Amet</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consectetur</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lorem Ipsum Dolor</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sit Amet Consectetur</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adipiscing Elit</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sed Do Eiusmod</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Lorem Ipsum</div>
                    <div className="text-gray-600">30-45 minutes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FileText size={20} className="text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Dolor Sit</div>
                    <div className="text-gray-600">2-3 weeks</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle size={20} className="text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Amet Consectetur</div>
                    <div className="text-gray-600">Lorem ipsum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Lorem ipsum dolor sit?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Lorem Ipsum
              <ArrowRight size={20} className="ml-2" />
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Dolor Sit Amet?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MemberApplicationRequirements;