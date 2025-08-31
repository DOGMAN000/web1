import React from "react";
import { useState } from "react";
import {
  Building,
  Users,
  Target,
  Mail,
  ArrowRight,
  Star,
  Briefcase,
  TrendingUp,
  Award,
} from "lucide-react";
import { supabase, type PartnershipInquiry } from "../lib/supabase";
import partnerImage from "../assets/partner.png";

function Partners() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const inquiryData: PartnershipInquiry = {
      company_name: formData.get("companyName") as string,
      contact_name: formData.get("contactName") as string,
      title: formData.get("title") as string,
      email: formData.get("email") as string,
      partnership_type: formData.get("partnershipType") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from("partnership_inquiries")
        .insert([inquiryData]);

      if (error) {
        throw error;
      }

      setSubmitStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error("Error submitting partnership inquiry:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "An error occurred while submitting your inquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Partners{" "}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the companies supporting CSTC students and learn how your
              organization can join our mission to build a more equitable tech
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              For Students: Our Partner Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These companies and startups are actively looking to support and
              hire from the CSTC community.
            </p>
          </div>

          <div className="bg-blue-100 border border-blue-200 rounded-2xl p-12 text-center">
            <Building className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Partner Network Coming Soon
            </h3>
            <p className="text-blue-800 text-lg mb-6 max-w-2xl mx-auto">
              We're currently building partnerships with innovative companies
              and startups that value the unique perspective and resilience of
              community college transfer students.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2">Get Notified</h4>
              <p className="text-gray-600 text-sm mb-4">
                Be the first to know when new partner opportunities become
                available.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Become a Partner
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Invest in the Future of Tech
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CSTC members are among the most resilient, diverse, and motivated
              students in the country. Partner with us to get direct access to
              this untapped pipeline of technical talent. Help us build a more
              equitable tech industry.
            </p> */}

            <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
              {/* Text content */}
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Become a Partner
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                  Invest in the Future of Tech
                </h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  CSTC members are among the most resilient, diverse, and
                  motivated students in the country. Partner with us to get
                  direct access to this untapped pipeline of technical talent.
                  Help us build a more equitable tech industry.
                </p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={partnerImage}
                  alt="Students collaborating"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Why Partner With CSTC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Diverse Talent Pipeline
              </h3>
              <p className="text-gray-600">
                Access a community of motivated students from diverse
                backgrounds who bring unique perspectives and problem-solving
                approaches.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Resilience
              </h3>
              <p className="text-gray-600">
                CSTC members have navigated the unique challenges of community
                college and transfer processes, demonstrating adaptability and
                determination.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                High Potential
              </h3>
              <p className="text-gray-600">
                Our members are hungry to prove themselves and often outperform
                expectations when given the opportunity.
              </p>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partnership Opportunities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Internship & Job Opportunities
                    </h4>
                    <p className="text-gray-600">
                      Post exclusive internships and full-time positions
                      directly to our community. Get first access to motivated
                      candidates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Guest Speaking & Mentorship
                    </h4>
                    <p className="text-gray-600">
                      Share your expertise through our guest speaker series or
                      mentor program. Inspire the next generation of tech
                      talent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Workshops & Training
                    </h4>
                    <p className="text-gray-600">
                      Conduct technical workshops or professional development
                      sessions tailored to our community's needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Sponsorship & Support
                    </h4>
                    <p className="text-gray-600">
                      Support our mission through financial sponsorship, helping
                      us keep CSTC free and accessible to all students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Company Showcases
                    </h4>
                    <p className="text-gray-600">
                      Present your company culture, values, and opportunities
                      directly to our engaged community of future tech
                      professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Custom Partnerships
                    </h4>
                    <p className="text-gray-600">
                      Work with us to create tailored partnership opportunities
                      that align with your company's goals and values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can work together to create opportunities for
              CSTC students and build a more inclusive tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <Star
                      className="text-green-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="text-green-800 font-semibold">
                        Partnership Inquiry Sent!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Thank you for your interest in partnering with CSTC.
                        We'll get back to you soon!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <Target
                      className="text-red-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="text-red-800 font-semibold">
                        Submission Error
                      </h4>
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnershipType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Partnership Interest *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select partnership type</option>
                    <option value="hiring">Hiring & Recruitment</option>
                    <option value="speaking">Guest Speaking</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="workshops">Workshops & Training</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="custom">Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your partnership goals and how you'd like to support CSTC students..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Partnership Inquiry
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Partnership Email
                    </h4>
                    <p className="text-gray-600 mb-2">
                      For partnership inquiries and collaboration opportunities
                    </p>
                    <a
                      href="mailto:partner@cstc.org"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      partner@cstc.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      General Inquiries
                    </h4>
                    <p className="text-gray-600 mb-2">
                      For general questions about CSTC
                    </p>
                    <a
                      href="mailto:hello@cstc.org"
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      hello@cstc.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Partnership Benefits */}
              <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Partnership Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <Star
                      size={16}
                      className="text-yellow-400 mr-2 flex-shrink-0"
                    />
                    Direct access to motivated, diverse talent
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star
                      size={16}
                      className="text-yellow-400 mr-2 flex-shrink-0"
                    />
                    Brand visibility in the CSTC community
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star
                      size={16}
                      className="text-yellow-400 mr-2 flex-shrink-0"
                    />
                    Opportunity to shape the future of tech
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star
                      size={16}
                      className="text-yellow-400 mr-2 flex-shrink-0"
                    />
                    Meaningful impact on underrepresented students
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with CSTC to access exceptional talent while making a
            meaningful impact on the tech industry's diversity and inclusion.
          </p>
          <a
            href="mailto:partner@cstc.org"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start a Partnership
            <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Partners;
