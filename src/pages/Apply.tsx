import React from "react";
import { useState } from "react";
import {
  Clock,
  FileText,
  Users,
  CheckCircle,
  AlertCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { supabase, type Application } from "../lib/supabase";
import heroBGImage from "../assets/applyHero.png";

function Apply() {
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

    const applicationData: Application = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      college: formData.get("college") as string,
      transfer_year: formData.get("transferYear") as string,
      linkedin: (formData.get("linkedin") as string) || undefined,
      github: (formData.get("github") as string) || undefined,
      passion_answer: formData.get("passion") as string,
    };

    try {
      const { error } = await supabase
        .from("applications")
        .insert([applicationData]);

      if (error) {
        throw error;
      }

      setSubmitStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "An error occurred while submitting your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center py-32" // increased py to push content down
  style={{ backgroundImage: `url(${heroBGImage})`, backgroundPosition: "center top" }} // move image lower
>
  {/* Overlay to make text readable */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Join the
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {" "}
          Cohort{" "}
        </span>
      </h1>
      <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Ready to transform your tech journey? Apply to join CSTC and connect with a community designed specifically for community college transfer students.
      </p>
      <div className="bg-green-100 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto text-black">
        <div className="flex items-center">
          <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
          <p className="text-green-800 text-sm">
            <strong>Join Anytime:</strong> There are no deadlines or application windows. We use a simple, rolling admissions process to get you into the community as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe support shouldn't have to wait. Our streamlined
              application gets you connected to the community quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* Application Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Application Form
              </h3>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle
                      className="text-green-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="text-green-800 font-semibold">
                        Application Submitted Successfully!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Thank you for applying to CSTC. We'll review your
                        application and get back to you within 1-2 weeks.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle
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
                {/* Basic Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Basic Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
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
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="college"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Community College *
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your current community college"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="transferYear"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Expected Transfer Year *
                      </label>
                      <select
                        id="transferYear"
                        name="transferYear"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Links (Optional but Recommended)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>

                {/* Short Answer Questions */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Short Answer Questions
                  </h4>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="passion"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Why are you passionate about computer science? (150
                        words) *
                      </label>
                      <textarea
                        id="passion"
                        name="passion"
                        rows={4}
                        required
                        maxLength={1500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Share what drives your interest in computer science..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Application Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What to Expect
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Clock className="text-blue-600 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-900">
                      Rolling Admissions
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    No deadlines or application windows. Apply anytime and get
                    connected to the community quickly.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FileText className="text-purple-600 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-900">
                      Holistic Review
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    We look at your whole story, not just grades. We value
                    passion, potential, and collaborative spirit.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Users className="text-green-600 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-900">
                      Community Focused
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    We're looking for students who want to contribute to and
                    benefit from a supportive community.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Is there any cost?
                    </h4>
                    <p className="text-gray-600">
                      No. CSTC is 100% free and always will be.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What is the time commitment?
                    </h4>
                    <p className="text-gray-600">
                      It's flexible. The more you put in, the more you get out.
                      We recommend checking Slack a few times a week and
                      attending at least one event per month.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do I need to be a programming genius to join?
                    </h4>
                    <p className="text-gray-600">
                      Absolutely not. We look for passion, potential, and a
                      collaborative spirit. All skill levels are welcome.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How long does the application process take?
                    </h4>
                    <p className="text-gray-600">
                      The application takes about 30-45 minutes to complete. We
                      review applications on a rolling basis and typically
                      respond within 1-2 weeks.
                    </p>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of community college transfer students who are already
            thriving with CSTC support.
          </p>
          <button
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Apply Now
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Apply;
