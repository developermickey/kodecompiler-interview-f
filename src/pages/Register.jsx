import React, { useState, useRef } from 'react';
import { Mail, CheckCircle, Building2, User, Phone, Briefcase, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    designation: '',
    orgName: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isExistingOrg, setIsExistingOrg] = useState(false);
  const [orgInfo, setOrgInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const otpRefs = useRef([]);

  const steps = [
    { number: 1, label: 'Email', icon: Mail },
    { number: 2, label: 'Verify', icon: CheckCircle },
    { number: 3, label: 'Profile', icon: User },
    { number: 4, label: 'Complete', icon: Check }
  ];

  const departments = [
    'Engineering', 'Human Resources', 'Product', 
    'Marketing', 'Sales', 'Operations', 'Other'
  ];

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 5000);
  };

  const checkEmailAndSendOTP = async () => {
    if (!email || !email.includes('@')) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      showMessage('Verification code sent to your email!', 'success');
      setCurrentStep(2);
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const verifyOTP = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      showMessage('Please enter the complete 6-digit code', 'error');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Simulate checking if org exists
      const existingOrg = Math.random() > 0.5;
      setIsExistingOrg(existingOrg);
      
      if (existingOrg) {
        setOrgInfo({
          name: 'Acme Corporation',
          domain: email.split('@')[1],
          adminCount: 3
        });
      }
      
      showMessage('Email verified successfully!', 'success');
      setCurrentStep(3);
    }, 1500);
  };

  const resendOTP = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtp(['', '', '', '', '', '']);
      showMessage('New verification code sent!', 'success');
    }, 1000);
  };

  const completeRegistration = async () => {
    if (!formData.name) {
      showMessage('Please enter your full name', 'error');
      return;
    }
    if (!isExistingOrg && !formData.orgName) {
      showMessage('Please enter your organization name', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showMessage('Registration completed successfully!', 'success');
      setCurrentStep(4);
    }, 1500);
  };

  const goToDashboard = () => {
    showMessage('Redirecting to dashboard...', 'success');
    // window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4 animate-bounce-slow">
            <div className="w-20 h-20 rounded-2xl  flex items-center justify-center  transform hover:scale-110 transition-all duration-300">
              <span className="text-5xl">🎯</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">Interview Platform</h1>
          <p className="text-gray-500 font-medium">Multi-Tenant Admin Registration</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep >= step.number;
                const isCurrent = currentStep === step.number;

                return (
                  <div key={step.number} className="flex flex-col items-center z-10">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-110' 
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                        }
                        ${isCurrent ? 'ring-4 ring-blue-100' : ''}
                      `}
                    >
                      {isActive && step.number < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Message Box */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg border-l-4 ${
              message.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
              message.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' :
              'bg-blue-50 border-blue-500 text-blue-700'
            }`}>
              {message.text}
            </div>
          )}

          {/* Step 1: Email */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                  Company Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@yourcompany.com"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && checkEmailAndSendOTP()}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <span>Use your company email address. Your organization will be identified by your email domain.</span>
                </p>
              </div>

              <button
                onClick={checkEmailAndSendOTP}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Login here
                </a>
              </p>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-700">
                  📧 We've sent a 6-digit verification code to:<br />
                  <strong className="text-blue-600">{email}</strong>
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                  Enter Verification Code
                </label>
                <div className="flex justify-center gap-2 mb-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center">Code expires in 10 minutes</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={verifyOTP}
                  disabled={loading}
                  className="flex-[2] bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify Code
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-sm">
                <button
                  onClick={resendOTP}
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                >
                  Didn't receive code? Resend
                </button>
              </p>
            </div>
          )}

          {/* Step 3: Profile */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              {isExistingOrg && orgInfo && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">Joining Existing Organization</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>{orgInfo.name}</strong> ({orgInfo.domain})
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Currently {orgInfo.adminCount} admin(s) registered
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4">
                <div>
                  <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (234) 567-8900"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white"
                    >
                      <option value="">Select</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                      Designation
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="HR Manager"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {!isExistingOrg && (
                  <div>
                    <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        placeholder="Your Company Inc"
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      This will be the name of your organization on the platform
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={completeRegistration}
                  disabled={loading}
                  className="flex-[2] bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <Check className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Registration Successful!
                </h2>
                <p className="text-gray-600">Your admin account has been created.</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 text-left">
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <strong>Organization:</strong>
                    <span className="text-gray-700">{formData.orgName || orgInfo?.name}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <strong>Email:</strong>
                    <span className="text-gray-700">{email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-green-600" />
                    <strong>Admin Status:</strong>
                    <span className="text-gray-700">{isExistingOrg ? 'Additional Admin' : 'Primary Admin'}</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-xl">
                <div className="text-5xl font-bold mb-2">1</div>
                <div className="text-sm opacity-90">Interview Credit Available</div>
              </div>

              <p className="text-sm text-gray-500">
                🎉 You can now create your first interview!<br />
                Additional credits can be purchased anytime.
              </p>

              <button
                onClick={goToDashboard}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}