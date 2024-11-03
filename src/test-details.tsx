import React from 'react';
import { 
  ArrowLeft, Clock, CheckCircle2, AlertTriangle, XCircle,
  Shield, Bot, Code, Terminal, Eye, Cpu, Activity,
  ChevronRight, Download, RefreshCw, Globe, 
  LayoutDashboard, Server, Lock, FileJson, Users,
  Settings, HelpCircle, Bell, Boxes
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TestDetails = () => {
  const colors = {
    darkGreen: "#225937",
    midGreen: "#367D4E",
    lightGreen: "#4CA166",
    paleGreen: "#E5F2E9",
    accentGreen: "#65B67F"
  };

  const testDetails = {
    id: "TEST-2024-001",
    app: "MyNCLC-App",
    version: "2.1.0",
    description: "API Security Standards Compliance Check",
    agent: "Security Agent",
    location: {
      url: "https://my-nclc-app.example.com",
      paths: [
        "/api/v1/auth/*",
        "/api/v1/users/*",
        "/api/v1/transactions/*"
      ]
    },
    type: "Security",
    details: "OAuth2 implementation validation",
    status: "success",
    score: 98,
    timestamp: "2024-03-15 14:30:00",
    duration: "45s",
    testSteps: [
      {
        name: "Authentication Flow",
        status: "success",
        score: 100,
        details: "OAuth2 implementation follows security best practices",
        screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3EAuth Flow Screenshot%3C/text%3E%3C/svg%3E",
        timestamp: "14:30:15",
        checks: [
          { name: "Token Generation", status: "success", value: "JWT RS256" },
          { name: "Token Expiry", status: "success", value: "1h" },
          { name: "Refresh Mechanism", status: "success", value: "Implemented" }
        ]
      },
      {
        name: "API Security Headers",
        status: "success",
        score: 95,
        details: "Required security headers are properly configured",
        screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3ESecurity Headers Test%3C/text%3E%3C/svg%3E",
        timestamp: "14:30:28",
        checks: [
          { name: "CORS Policy", status: "success", value: "Restrictive" },
          { name: "CSP Headers", status: "warning", value: "Partial" },
          { name: "XSS Protection", status: "success", value: "Enabled" }
        ]
      },
      {
        name: "Data Encryption",
        status: "success",
        score: 100,
        details: "All sensitive data is properly encrypted",
        screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3EEncryption Test%3C/text%3E%3C/svg%3E",
        timestamp: "14:30:42",
        checks: [
          { name: "TLS Version", status: "success", value: "1.3" },
          { name: "Cipher Suites", status: "success", value: "Strong" },
          { name: "Key Management", status: "success", value: "Compliant" }
        ]
      }
    ],
    recommendations: [
      "Update Content Security Policy headers to include all required directives",
      "Consider implementing rate limiting for authentication endpoints",
      "Add API versioning headers for better compatibility tracking"
    ]
  };

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === 'success') return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    if (status === 'warning') return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  // Add sidebar items
  const sidebarItems = [
    { 
      icon: LayoutDashboard, 
      label: "Dashboard",
      url: "/analytics",
      description: "Overview and metrics"
    },
    { 
      icon: Activity, 
      label: "Tests",
      url: "/tests",
      description: "All validation tests"
    },
    { 
      icon: Boxes, 
      label: "Applications",
      url: "/apps",
      description: "Registered NCLC apps"
    },
    { 
      icon: Bot, 
      label: "AI Agents",
      url: "/agents",
      description: "Test automation agents"
    },
    { 
      icon: Shield, 
      label: "Security",
      url: "/security",
      description: "Security validations"
    },
    { 
      icon: Globe, 
      label: "Accessibility",
      url: "/accessibility",
      description: "A11y compliance"
    },
    { 
      icon: Server, 
      label: "Performance",
      url: "/performance",
      description: "Speed and reliability"
    },
    { 
      icon: Lock, 
      label: "Compliance",
      url: "/compliance",
      description: "Standards & regulations"
    },
    { 
      icon: FileJson, 
      label: "API Tests",
      url: "/api-tests",
      description: "API validations"
    },
    { 
      icon: Users, 
      label: "Team",
      url: "/team",
      description: "Access management"
    }
  ];

  const bottomItems = [
    { icon: Bell, label: "Notifications", url: "/notifications" },
    { icon: Settings, label: "Settings", url: "/settings" },
    { icon: HelpCircle, label: "Help & Docs", url: "/help" }
  ];

  // Mock screenshots
  const screenshots = [
    {
      title: "Authentication Flow Test",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3EAuth Flow Screenshot%3C/text%3E%3C/svg%3E",
      timestamp: "14:30:15",
      status: "success"
    },
    {
      title: "API Security Headers",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3ESecurity Headers Test%3C/text%3E%3C/svg%3E",
      timestamp: "14:30:28",
      status: "warning"
    },
    {
      title: "Data Encryption Test",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236b7280'%3EEncryption Test%3C/text%3E%3C/svg%3E",
      timestamp: "14:30:42",
      status: "success"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col" style={{ borderColor: colors.paleGreen }}>
        <div className="p-4">
          <Link to="/analytics" className="flex items-center space-x-2 mb-8">
            <ArrowLeft className="w-5 h-5" style={{ color: colors.darkGreen }} />
            <span className="font-semibold">Back to Dashboard</span>
          </Link>

          {/* Main navigation */}
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                to={item.url}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                style={{ color: colors.darkGreen }}
              >
                <item.icon className="w-5 h-5" />
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs opacity-60">{item.description}</div>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom navigation */}
        <div className="mt-auto p-4 border-t" style={{ borderColor: colors.paleGreen }}>
          {bottomItems.map((item) => (
            <Link
              key={item.label}
              to={item.url}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
              style={{ color: colors.darkGreen }}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <div className="border-b" style={{ borderColor: colors.paleGreen }}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/analytics" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Dashboard</span>
                </Link>
                <div className="h-5 w-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" style={{ color: colors.midGreen }} />
                  <span className="font-semibold">Security Test Details</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border"
                        style={{ borderColor: colors.paleGreen }}>
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white"
                        style={{ backgroundColor: colors.midGreen }}>
                  <RefreshCw className="w-4 h-4" />
                  <span>Rerun Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Test Overview */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 p-6 rounded-lg border" style={{ borderColor: colors.paleGreen }}>
              <h2 className="text-xl font-semibold mb-4">Test Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">Application</label>
                      <div className="font-medium">{testDetails.app} v{testDetails.version}</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Test ID</label>
                      <div className="font-medium">{testDetails.id}</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Description</label>
                      <div className="font-medium">{testDetails.description}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">Agent</label>
                      <div className="font-medium flex items-center space-x-2">
                        <Bot className="w-4 h-4" style={{ color: colors.midGreen }} />
                        <span>{testDetails.agent}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Location</label>
                      <div className="font-medium">
                        <code className="px-2 py-1 rounded bg-gray-100">{testDetails.location.url}</code>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Duration</label>
                      <div className="font-medium flex items-center space-x-2">
                        <Clock className="w-4 h-4" style={{ color: colors.midGreen }} />
                        <span>{testDetails.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg border" style={{ borderColor: colors.paleGreen }}>
              <h2 className="text-xl font-semibold mb-4">Test Score</h2>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-5xl font-bold mb-2" style={{ color: colors.darkGreen }}>
                  {testDetails.score}%
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  testDetails.status === 'success' ? 'bg-green-100 text-green-800' :
                  testDetails.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {testDetails.status.charAt(0).toUpperCase() + testDetails.status.slice(1)}
                </div>
              </div>
            </div>
          </div>

          {/* Add Screenshots section before Test Steps */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Test Screenshots</h2>
            <div className="grid grid-cols-2 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="border rounded-lg overflow-hidden" 
                     style={{ borderColor: colors.paleGreen }}>
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{screenshot.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        screenshot.status === 'success' ? 'bg-green-100 text-green-800' :
                        screenshot.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {screenshot.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Captured at {screenshot.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Steps */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Test Steps</h2>
            <div className="space-y-6">
              {testDetails.testSteps.map((step, index) => (
                <div key={index} className="p-6 rounded-lg border" style={{ borderColor: colors.paleGreen }}>
                  <div className="flex items-start space-x-6">
                    {/* Screenshot Thumbnail */}
                    <div className="w-64 flex-shrink-0">
                      <div className="relative rounded-lg overflow-hidden border"
                           style={{ borderColor: colors.paleGreen }}>
                        <img 
                          src={step.screenshot} 
                          alt={step.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
                          Captured at {step.timestamp}
                        </div>
                      </div>
                    </div>

                    {/* Step Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <StatusIcon status={step.status} />
                          <h3 className="font-semibold">{step.name}</h3>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">Step {index + 1} of {testDetails.testSteps.length}</span>
                          <div className="text-sm font-medium px-3 py-1 rounded-full"
                               style={{ backgroundColor: colors.paleGreen }}>
                            {step.score}%
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{step.details}</p>

                      <div className="grid grid-cols-3 gap-3">
                        {step.checks.map((check, checkIndex) => (
                          <div key={checkIndex} 
                               className="p-3 rounded bg-gray-50 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <StatusIcon status={check.status} />
                              <span className="text-sm">{check.name}</span>
                            </div>
                            <code className="text-xs px-2 py-1 rounded bg-white">{check.value}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <div className="p-6 rounded-lg border" style={{ borderColor: colors.paleGreen }}>
              <ul className="space-y-3">
                {testDetails.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 mt-0.5" style={{ color: colors.midGreen }} />
                    <span className="text-gray-600">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetails; 