
import { ArrowLeft, ThumbsUp, MapPin, Calendar, UserCircle, Clock, Target, Shield, CheckCircle, Award, Zap, Video, Monitor, Smartphone, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";






const Home = () => {
 
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-white">
      {/* CodingShuttle-style Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <style>{`
                @keyframes floatUpDown {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                @keyframes shine {
                  0% { left: -100%; }
                  50% { left: 100%; }
                  100% { left: 100%; }
                }
                .float-animation {
                  animation: floatUpDown 3s ease-in-out infinite;
                }
                .shine-effect {
                  position: relative;
                  overflow: hidden;
                }
                .shine-effect::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 50%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
                  animation: shine 3.5s ease-in-out infinite;
                }
              `}</style>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer float-animation shine-effect">
                <span>🎁</span>
                <span>5 FREE INTERVIEW SESSIONS</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                  Conduct 100%
                  <span className="block text-blue-600">Cheat-Proof</span>
                  <span className="block">Technical Interviews</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Triple-layer monitoring with Webcam, Screen & Mobile tracking. Make confident hiring decisions with verified, authentic candidate assessments.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                   onClick={() => navigate("/register")}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all">
                            Get Started Free
                          <ChevronRight size={20} />
                </button>

                <button onClick={() => navigate("/features")} className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  
                  Learn More
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  <span className="font-medium">1000+ companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  <span className="font-medium">99.9% detection rate</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Code/Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Monitor className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">Live Interview Session</h3>
                        <p className="text-xs text-gray-500">Real-time monitoring active</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs font-medium text-green-600">Recording</span>
                    </div>
                  </div>

                  {/* Monitoring Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <Video className="text-blue-600 mb-2" size={20} />
                      <p className="text-xs text-gray-600 mb-1">Webcam</p>
                      <p className="text-lg font-bold text-gray-900">Active</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                      <Monitor className="text-purple-600 mb-2" size={20} />
                      <p className="text-xs text-gray-600 mb-1">Screen</p>
                      <p className="text-lg font-bold text-gray-900">Shared</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <Smartphone className="text-green-600 mb-2" size={20} />
                      <p className="text-xs text-gray-600 mb-1">Mobile</p>
                      <p className="text-lg font-bold text-gray-900">Tracked</p>
                    </div>
                  </div>

                  {/* Code Editor Preview */}
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 ml-2">solution.js</span>
                    </div>
                    <div className="space-y-1 text-gray-300">
                      <div><span className="text-purple-400">function</span> <span className="text-blue-400">twoSum</span><span className="text-gray-400">(</span>nums<span className="text-gray-400">,</span> target<span className="text-gray-400">)</span> {'{'}</div>
                      <div className="ml-4"><span className="text-purple-400">const</span> map = <span className="text-purple-400">new</span> <span className="text-yellow-400">Map</span>();</div>
                      <div className="ml-4"><span className="text-purple-400">for</span> (let i = 0; i &lt; nums.length; i++) {'{'}</div>
                      <div className="ml-8"><span className="text-purple-400">const</span> complement = target - nums[i];</div>
                      <div className="ml-4">{'}'}</div>
                      <div>{'}'}</div>
                    </div>
                  </div>

                  {/* AI Detection Alert */}
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
                    <Shield className="text-green-600" size={18} />
                    <div>
                      <p className="text-xs font-semibold text-green-800">AI Detection: All Clear</p>
                      <p className="text-xs text-green-600">No suspicious activity detected</p>
                    </div>
                  </div>
                </div>

                {/* Floating indicators */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Live Demo
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white mb-1">50,000+</p>
              <p className="text-sm text-gray-400">Interviews Conducted</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">1,000+</p>
              <p className="text-sm text-gray-400">Companies Trust Us</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">99.9%</p>
              <p className="text-sm text-gray-400">Cheat Detection</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-sm text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Interview Pro is Different Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Why Interview Pro is Different
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading security features that ensure every technical interview result you see is 100% authentic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Triple Layer */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Smartphone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💥 Triple-Layer Proctoring System
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                The ONLY platform with 3-way monitoring:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <div>
                    <span className="font-bold">Webcam Monitoring</span> - Continuous candidate face tracking (every 30s)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <div>
                    <span className="font-bold">Screen Capture</span> - Full screen activity recording (every 5 min)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <div>
                    <span className="font-bold">Mobile Phone Camera 📱</span> - Secondary angle monitoring via candidate's own phone
                  </div>
                </li>
              </ul>
              <p className="text-sm text-blue-600 font-semibold italic mt-4">
                Most platforms only use webcam OR screen. We use ALL THREE simultaneously.
              </p>
            </div>

            {/* Card 2 - 100% Secure */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-300 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Secure Interview Environment
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Make hiring decisions with confidence:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold">Zero Cheating Possibility</span> - Multi-angle monitoring prevents impersonation
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold">Fullscreen Enforcement</span> - Candidates can't exit interview screen
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold">Tab Switch Detection</span> - Automatic alerts on suspicious behavior
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold">Copy-Paste Prevention</span> - Ensures original code
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold">Real-Time Monitoring</span> - See what we see, when we see it
                  </div>
                </li>
              </ul>
              <p className="text-sm text-green-600 font-semibold italic mt-4">
                Every result reflects genuine candidate ability - guaranteed.
              </p>
            </div>

            {/* Card 3 - QR Code Mobile */}
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-5">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                QR Code Mobile Pairing - Instant Setup
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Revolutionary mobile monitoring:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Smartphone className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    Candidate scans QR code with their phone
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Video className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    Phone becomes a secondary proctoring camera
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    No additional hardware or apps needed
                  </div>
                </li>
              </ul>
              <p className="text-sm text-purple-600 font-semibold italic mt-4">
                Prevents proxy test-takers and ensures authenticity from multiple perspectives.
              </p>
            </div>

            {/* Card 4 - Setup First */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Setup-First Approach - Zero Technical Failures
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Test everything BEFORE the interview starts:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <div>Webcam functionality test</div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <div>Screen sharing verification</div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <div>Fullscreen mode check</div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <div>Mobile device pairing</div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                  <div>Final environment review</div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic mt-4 leading-relaxed">
                Reduces technical issues by 90% - candidates are fully prepared before starting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start conducting secure interviews today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join 1000+ companies who trust Interview Pro for verified technical assessments
          </p>
          <button 
             onClick={() => navigate("/register")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Get Started Free
            <ChevronRight size={20} />
          </button>
          <p className="text-sm text-blue-200 mt-4">No credit card required • 5 free sessions included</p>
        </div>
      </div>

      {/* Contact Button */}
      
      <div onClick={() => navigate("/contact")}
       className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white text-sm rounded-full shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all font-semibold">
          💬 Contact Us
        </button>
      </div>
    </div>
  );
};

export default Home;