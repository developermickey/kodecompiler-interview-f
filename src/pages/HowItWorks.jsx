import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-700">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              Get started in minutes with our simple 4-step process
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Create an Account
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Register using your company email and get 
                <span className="font-semibold text-gray-800"> 5 free interview sessions </span>
                to explore the platform.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Set Up Interview
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose coding problems, configure settings, and generate a unique interview link for candidates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Share with Candidate
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Send the interview link via email. Candidates can attempt it within the validity period.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 text-xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Review Results
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access detailed reports including code quality, execution results, time tracking, and security data.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined approach ensures you spend less time setting up and more time evaluating top talent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quick Setup
              </h3>
              <p className="text-sm text-gray-600">
                Create and share interview links in under 5 minutes. No complicated configurations required.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Secure Environment
              </h3>
              <p className="text-sm text-gray-600">
                Triple-layer proctoring ensures every interview is conducted in a cheat-proof environment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Detailed Insights
              </h3>
              <p className="text-sm text-gray-600">
                Get comprehensive reports with code analysis, time tracking, and behavioral metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;