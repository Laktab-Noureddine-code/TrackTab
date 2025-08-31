import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Register submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-800 rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-pink-400 rounded-full opacity-50"></div>

        {/* Logo and branding */}
        <div className="flex flex-col justify-center items-start pl-16 z-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg flex items-center justify-center mr-4">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
              </div>
            </div>
            <span className="text-3xl font-bold text-gray-800">Fintechdb</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the future of finance
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Join thousands of users who trust Fintechdb for their financial data management and analytics.
          </p>
        </div>

        {/* Footer links */}
        <div className="absolute bottom-8 left-16 flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700 transition-colors">About</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Terms of use</a>
          <a href="#" className="hover:text-gray-700 transition-colors">FAQ</a>
        </div>
      </div>

      {/* Right side - Register form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Get started with your free account today.</p>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-teal-600 hover:to-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-medium flex items-center justify-center group"
          >
            Create Account
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
