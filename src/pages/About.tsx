import React from "react";
import { Target, Heart, Users, Shield, Award, Globe } from "lucide-react";
import backgroundImage from "../assets/heroSection.png";
import visionImage from "../assets/visionSection.png";
import accessibilityImage from "../assets/accessibility.png";
import inclusivityImage from "../assets/inclusivity.png";
import empowermentImage from "../assets/empowerment.png";
import communityImage from "../assets/community.png";
import Leadership from "../components/Leadership";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                CSTC{" "}
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about our mission, vision, and the story behind the Computer
              Science Transfer Cohort.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Mission Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide community college transfer students with the
                dedicated community, mentorship, and opportunities they need to
                thrive in the tech industry.
              </p>
            </div>

            {/* Image + Vision Bubble */}
            <div className="relative">
              <img
                src={visionImage}
                alt="Mission and Vision"
                className="rounded-2xl shadow-lg"
              />

              {/* Vision Bubble on top */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white max-w-sm shadow-lg">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  A tech industry where the most sought-after talent comes from
                  every background and educational path, and where a student's
                  starting point is irrelevant to their success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 text-lg">
                <strong>Note:</strong> This section is currently being
                developed. Our founding story and journey will be shared here
                soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at CSTC and shape our
              community culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Accessibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our program is and always will be free. We believe that
                financial barriers should never prevent talented students from
                accessing opportunities.
              </p>
            </div> */}

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative">
              {/* Image with icon on top */}
              <div className="relative w-full h-80 mb-6">
                <img
                  src={accessibilityImage}
                  alt="Accessibility"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                  <Shield size={28} />
                </div>
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Accessibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our program is and always will be free. We believe that
                financial barriers should never prevent talented students from
                accessing opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="relative w-full h-80 mb-6">
                <img
                  src={inclusivityImage}
                  alt="Inclusivity"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                  <Users size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Inclusivity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We welcome students from every race, ethnicity, gender, and
                background. Our strength is our diversity and the unique
                perspectives each member brings.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="relative w-full h-80 mb-6">
                <img
                  src={empowermentImage}
                  alt="Empowerment"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                <Award size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Empowerment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We give you the tools, resources, and support, but you are the
                driver of your own success. We believe in your potential and
                agency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="relative w-full h-80 mb-6">
                <img
                  src={communityImage}
                  alt="Community"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                <Award size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are not just a program; we are a family. We succeed together,
                support each other, and celebrate every victory as a collective
                achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals working to make CSTC a
              transformative experience for every member.
            </p>

              <Leadership></Leadership>

          </div>

          <div className="bg-blue-100 border border-blue-200 rounded-lg p-8 text-center">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Team Profiles Coming Soon
            </h3>
            <p className="text-blue-800 text-lg">
              We're currently preparing detailed profiles of our team leaders,
              including their backgrounds, roles, and passion for supporting
              transfer students. Check back soon to meet the people behind CSTC!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join CSTC and help us build a more inclusive and accessible path to
            success in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Join the Cohort
            </a>
            <a
              href="/partners"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
