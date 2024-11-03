import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PepperLogo from '../components/PepperLogo';
import { 
  Shield, Bot, Zap, CheckCircle2, ArrowRight,
  Globe, Lock, Activity, Users, Code
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const colors = {
    darkGreen: "#225937",
    midGreen: "#367D4E",
    lightGreen: "#4CA166",
    paleGreen: "#E5F2E9",
    accentGreen: "#65B67F"
  };

  const features = [
    {
      icon: Shield,
      title: "Security Testing",
      description: "Automated security validation for your applications with AI-powered testing agents"
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent agents that learn and adapt to your application's unique requirements"
    },
    {
      icon: Zap,
      title: "Performance Testing",
      description: "Comprehensive performance analysis and optimization recommendations"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Ensure your applications meet WCAG guidelines and accessibility standards"
    },
    {
      icon: Lock,
      title: "Compliance",
      description: "Stay compliant with industry standards and regulations"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and instant alerts for your applications"
    }
  ];

  const tabs = [
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <PepperLogo size="large" />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
              Enterprise Compliance Testing, Simplified
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Automate compliance validation across your enterprise applications. 
              Meet regulatory requirements with AI-powered testing that ensures security, 
              accessibility, and industry standards.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/platform"
                className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.midGreen }}
              >
                Start Free Trial
              </Link>
              <Link
                to="/analytics"
                className="px-6 py-3 rounded-lg font-medium border transition-all hover:shadow-lg"
                style={{ borderColor: colors.midGreen, color: colors.midGreen }}
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {[
              { label: "Compliance Standards", value: "20+" },
              { label: "Enterprise Clients", value: "500+" },
              { label: "Success Rate", value: "99.9%" },
              { label: "Time Saved", value: "75%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: colors.darkGreen }}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-all ${
                  activeTab === tab.id ? 'border-current font-medium' : 'border-transparent'
                }`}
                style={{ color: activeTab === tab.id ? colors.darkGreen : 'gray' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.darkGreen }}>
              Powerful Features for Modern Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border hover:shadow-lg transition-all"
                  style={{ borderColor: colors.paleGreen }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                       style={{ backgroundColor: colors.paleGreen }}>
                    <feature.icon className="w-6 h-6" style={{ color: colors.darkGreen }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.darkGreen }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    to="/platform"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                    style={{ color: colors.midGreen }}
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20" style={{ backgroundColor: colors.paleGreen }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.darkGreen }}>
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join thousands of developers who are already using Pilpel.ai to test their applications.
            </p>
            <Link
              to="/platform"
              className="px-8 py-4 rounded-lg text-white font-medium text-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.midGreen }}
            >
              Start Testing Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;