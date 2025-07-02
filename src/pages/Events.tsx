import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Tag } from 'lucide-react';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      type: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attendees: "2000+",
      featured: true,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Dolor sit amet consectetur adipiscing elit",
      date: "March 22, 2025",
      time: "2:00 PM - 6:00 PM PST",
      location: "San Francisco, CA",
      type: "Dolor Sit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attendees: "150",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Sed do eiusmod tempor incididunt ut labore",
      date: "April 5-7, 2025",
      time: "9:00 AM - 5:00 PM EST",
      location: "New York, NY",
      type: "Amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attendees: "100",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "Lorem Ipsum", "Dolor Sit", "Amet", "Consectetur"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Lorem 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ipsum </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Calendar className="text-blue-600 mr-3" size={20} />
                <p className="text-blue-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((type) => (
              <button
                key={type}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="mb-16">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Lorem Ipsum
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center text-gray-700">
                          <Users size={16} className="mr-2" />
                          <span className="text-sm font-semibold">{event.attendees} Lorem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Star size={16} className="mr-2 text-yellow-400 fill-current" />
                        Lorem
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-3 text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={18} className="mr-3 text-blue-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-3 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                      Lorem Ipsum - Dolor
                      <ArrowRight size={20} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Lorem Ipsum Dolor</h2>
          <p className="text-xl text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Lorem Ipsum Dolor
              <Calendar size={20} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Sit Amet Consectetur
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;