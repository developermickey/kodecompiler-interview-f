import React from 'react';
import { Shield, BarChart3, Lock, Code, FileCheck, Globe, Search, Monitor, Smartphone, Award } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Features Section - CodingShuttle Style */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">
              Everything you need for secure interviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive monitoring and analytics tools designed for modern technical hiring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={28} />,
                title: "Triple-Layer Monitoring",
                description: "Simultaneous webcam, screen, and mobile tracking for complete visibility",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Real-Time Analytics",
                description: "Live dashboards with instant insights on candidate behavior patterns",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Lock size={28} />,
                title: "Bank-Grade Security",
                description: "End-to-end encryption and SOC 2 compliance for data protection",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <Code size={28} />,
                title: "Code Playback",
                description: "Review complete coding sessions with keystroke-level detail",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: <FileCheck size={28} />,
                title: "Automated Scoring",
                description: "AI-powered evaluation with instant performance reports",
                color: "bg-pink-100 text-pink-600"
              },
              {
                icon: <Globe size={28} />,
                title: "Global Support",
                description: "Conduct interviews in 50+ languages with 24/7 support",
                color: "bg-indigo-100 text-indigo-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all bg-white"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Comprehensive Reports */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <FileCheck className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Comprehensive Integrity Reports
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Complete transparency for every interview:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Search className="text-gray-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>View all webcam snapshots with timestamps</div>
                </li>
                <li className="flex items-start gap-2">
                  <Monitor className="text-gray-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Access screen captures throughout interview</div>
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="text-gray-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Review mobile camera captures</div>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Automatic suspicious activity flagging</div>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Detailed monitoring events timeline</div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mt-4">
                Make confident hiring decisions backed by irrefutable evidence.
              </p>
            </div>

            {/* Authentic Results */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-5">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Authentic Results You Can Trust
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                When a candidate passes on our platform, you can be 100% certain:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>They personally took the interview</div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>No external help was used</div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Code submissions are their own work</div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>No cheating or proxy involvement</div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>Results reflect their true abilities</div>
                </li>
              </ul>
              <p className="text-sm text-blue-600 font-bold italic mt-4">
                Hire with confidence. Every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;