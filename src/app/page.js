"use client"
import React, { useState, useEffect } from 'react';
import { Star, Menu, X, QrCode, BarChart3, Clock, Users, TrendingUp, Shield, Check, ArrowRight, Play, Smartphone, Monitor, PieChart, Calendar, Award, Zap } from 'lucide-react';
import Image from 'next/image';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r  rounded-xl flex items-center justify-center">
              <Image
              alt='logo'
                src={"/logo4.png"}
                width={1920}
                height={1080}
                className='w-full h-full'
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              QrEats
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Features</a>
            <a href="#analytics" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Analytics</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Pricing</a>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
              <a href="#analytics" className="text-gray-700 hover:text-orange-500 transition-colors">Analytics</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Cafe Management System
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
              Cafe Experience
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline orders with QR code technology and gain powerful insights with advanced analytics. 
            Manage your cafe like never before with QrEats.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-orange-500 font-semibold text-lg transition-colors">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Cafes Powered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Orders Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Ordering",
      description: "Customers can scan QR codes at tables to browse menu and place orders instantly without waiting for staff.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Admin Dashboard",
      description: "Comprehensive dashboard to manage orders, menu items, staff, and monitor real-time cafe operations.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get detailed insights on sales, popular items, peak hours, and customer behavior patterns.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Live order tracking, kitchen notifications, and instant updates across all devices.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff Management",
      description: "Manage staff roles, permissions, and track performance with detailed reporting.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with encrypted data and reliable cloud infrastructure.",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Modern Cafes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run your cafe efficiently, from QR ordering to advanced analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-3 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Analytics Component
const Analytics = () => {
  const analyticsFeatures = [
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Food Popularity Analysis",
      description: "Track which dishes customers love most and optimize your menu accordingly"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Time-based Reports",
      description: "Daily, weekly, and yearly analytics to understand trends and patterns"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Insights",
      description: "Revenue tracking, peak hours analysis, and growth metrics"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Behavior",
      description: "Understand ordering patterns and customer preferences"
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Analytics for
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Better Decisions</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Make data-driven decisions with comprehensive analytics that show you exactly what&apos;s working and what&apos;s not in your cafe.
            </p>

            <div className="space-y-6">
              {analyticsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Live Analytics Dashboard</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold">₹45,280</div>
                  <div className="text-orange-100">Today's Revenue</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold">127</div>
                  <div className="text-orange-100">Orders Today</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold">Coffee</div>
                  <div className="text-orange-100">Top Item</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold">2:30 PM</div>
                  <div className="text-orange-100">Peak Hour</div>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-4">
                <h4 className="font-semibold mb-3">Popular Items Today</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cappuccino</span>
                    <span>45 orders</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sandwich</span>
                    <span>32 orders</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pasta</span>
                    <span>28 orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Component
const Pricing = () => {
  const plans = [
    {
      name: "Admin Only",
      price: "₹14,999",
      period: "per year",
      description: "Perfect for cafes that want powerful admin dashboard features",
      features: [
        "Complete Admin Dashboard",
        "Staff Management",
        "Menu Management",
        "Basic Analytics",
        "Order Management",
        "Email Support"
      ],
      gradient: "from-blue-500 to-purple-500",
      popular: false
    },
    {
      name: "Complete Solution",
      price: "₹24,999",
      period: "per year",
      description: "Full-featured solution with QR ordering and advanced analytics",
      features: [
        "QR Code Ordering System",
        "Complete Admin Dashboard",
        "Advanced Analytics",
        "Food Popularity Insights",
        "Time-based Reports",
        "Staff Management",
        "Priority Support",
        "Custom Branding"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your cafe. No hidden fees, no complicated pricing tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl shadow-xl p-8 ${
              plan.popular ? 'ring-4 ring-orange-500 ring-opacity-20 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution? We&apos;re here to help!</p>
          <button className="text-orange-500 hover:text-orange-600 font-semibold">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">QrEats</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing cafe management with smart QR ordering and powerful analytics.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">QR Ordering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admin Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;