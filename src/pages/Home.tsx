import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Rocket,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import heroBGImage from "../assets/mainPageBG.png";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{ backgroundImage: `url(${heroBGImage})` }}
      >
        <div data-aos="fade-up" data-aos-delay="0" className="hover-card absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Talent Deserves a
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Fair Chance{" "}
              </span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              CSTC is a free, national cohort that empowers community college
              transfer students in computer science with the community,
              resources, and opportunities to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="hover-card bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Join the Cohort Now
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("mission")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover-card border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-100 transition-colors text-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Believe Talent is Everywhere. Opportunity is Not.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The path from community college to a four-year university and into
              the tech industry is full of unique challenges. CSTC was built to
              level the playing field. We provide a support system to make sure
              every transfer student has the chance to achieve their dreams.
            </p>
          </div>

          {/* Program Pillars */}
          <div data-aos="fade-up" data-aos-delay="100" className="hover-card grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join an exclusive Slack community of ambitious transfer
                students. Collaborate on projects, find study partners, and
                build lifelong friendships.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="hover-card text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Acceleration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get access to a curated list of transfer-friendly internships,
                resume workshops, and direct connections to our startup
                partners.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="hover-card text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leadership & Networking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Develop your leadership skills and connect with industry
                professionals through our exclusive guest speaker series and
                networking events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join CSTC in three simple steps and unlock your potential in the
              tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit a simple, holistic application to tell us your story and
                your goals.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Accepted
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join a hand-picked cohort of dedicated students from across the
                nation.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thrive</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlock all the benefits of CSTC, from our Slack channel to
                exclusive job opportunities.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/apply"
              className="hover-card bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Start Your Application
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards transforming your tech career. Join
            hundreds of transfer students who are already thriving in CSTC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="hover-card bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Join the Cohort Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/cohort"
              className="hover-card border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Learn More About Benefits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
