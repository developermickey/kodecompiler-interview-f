import React from 'react';
import { useNavigate } from "react-router-dom";
import ContactUs from './ContactUs';



const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">
              Simple & Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your hiring needs. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pay Per Interview
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Ideal for occasional hiring
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-blue-600">$5</span>
                <span className="text-gray-500 text-sm"> / interview</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>✓ No monthly commitment</li>
                <li>✓ Pay only for what you use</li>
                <li>✓ Instant interview access</li>
                <li>✓ Basic analytics</li>
              </ul>

              <button  onClick={() => navigate("/contact")} className="mt-8 w-full py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition">
                Get Started
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Basic
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Perfect for small teams
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-blue-600">$99</span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>✓ 100 Interview Credits</li>
                <li>✓ Up to 2 Admins</li>
                <li>✓ Unlimited Candidates</li>
                <li>✓ Email Support</li>
              </ul>

              <button  onClick={() => navigate("/contact")} className="mt-8 w-full py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition">
                Get Started
              </button>
            </div>

            {/* Card 3 - Most Popular */}
            <div className="relative bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-xl scale-105">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Best for growing teams
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-blue-600">$199</span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>✓ 300 Interview Credits</li>
                <li>✓ Up to 5 Admins</li>
                <li>✓ Advanced Analytics</li>
                <li>✓ Priority Support</li>
              </ul>

              <button  onClick={() => navigate("/contact")} className="mt-8 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                For large organizations
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-blue-600">$299</span>
                <span className="text-gray-500 text-sm"> / month</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>✓ Unlimited Interviews</li>
                <li>✓ Up to 10 Admins</li>
                <li>✓ Custom Integrations</li>
                <li>✓ Dedicated Manager</li>
              </ul>

              <button  onClick={() => navigate("/contact")} className="mt-8 w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Ready to Improve Your Hiring Process?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Join hundreds of companies using our platform to hire the best technical talent faster and smarter.
          </p>

          {/* Highlight Box */}
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 mb-10">
            <p className="text-blue-700 font-medium">
              🎁 Get started free with <span className="font-semibold">5 interview sessions</span> — No credit card required
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">
              🚀 Start Free – 5 Sessions Included
            </button>

            <button onClick={() => navigate("/login")} className="bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold shadow transition">
              Login to Dashboard
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Pricing;