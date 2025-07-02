import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Briefcase, Award, ArrowRight, CheckCircle, Star, Target, Lightbulb } from 'lucide-react';

function Students() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Lorem ipsum 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> dolor sit </span>
              amet consectetur
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/member-application-requirements"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Lorem Ipsum
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/programs"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
              >
                Dolor Sit Amet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lorem Ipsum</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dolor Sit Amet</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consectetur Adipiscing</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sed Do Eiusmod</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tempor Incididunt</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum dolor
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Sit amet consectetur
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Adipiscing elit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ut Labore</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Lorem ipsum
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Dolor sit amet
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Consectetur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lorem Ipsum Dolor Sit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Lorem Ipsum</h4>
                  <p className="text-gray-600 text-sm">Dolor sit amet consectetur</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Dolor Sit</h4>
                  <p className="text-gray-600 text-sm">Amet consectetur adipiscing</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Amet Consectetur</h4>
                  <p className="text-gray-600 text-sm">Adipiscing elit sed</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Lorem ipsum dolor sit amet?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/member-application-requirements"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Lorem Ipsum Dolor Sit
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Consectetur Adipiscing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Students;