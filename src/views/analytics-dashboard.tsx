import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mockCharts } from '../utils/mockCharts';
import { 
  BarChart3, ChevronLeft, Filter, Download, Share2, RefreshCw, 
  Calendar, Search, Settings, Menu, Bot, AlertCircle, CheckCircle2,
  PieChart, LineChart, Activity, Users, Clock, Zap, Database,
  ArrowUpRight, ArrowDownRight, MoreVertical, Shield, Gauge, Eye, Lock
} from 'lucide-react';
import PepperLogo from '../components/PepperLogo';

const AnalyticsDashboard = () => {
  const location = useLocation();

  const colors = {
    darkGreen: "#225937",
    midGreen: "#367D4E",
    lightGreen: "#4CA166",
    paleGreen: "#E5F2E9",
    accentGreen: "#65B67F"
  };

  const platformLogos = {
    airtable: "https://1000logos.net/wp-content/uploads/2022/05/Airtable-Logo-768x432.png",
    retool: "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo-1024x640.png",
    microsoft: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    salesforce: "https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo-768x505.png",
    sap: "https://1000logos.net/wp-content/uploads/2023/07/SAP-Logo-768x432.png"
  };

  // Enhanced mock data for validation tests
  const recentValidations = [
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      platform: {
        name: "Airtable",
        logo: platformLogos.airtable
      },
      status: "success",
      score: 98,
      time: "2h ago",
      description: "API Security Standards Compliance Check",
      agent: "Security Agent",
      location: "/api/v1/*",
      type: "Security",
      details: "OAuth2 implementation validation"
    },
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      platform: {
        logo: platformLogos.retool
      },
      status: "warning",
      score: 82,
      time: "3h ago",
      description: "Accessibility Compliance Scan",
      agent: "Accessibility Agent",
      location: "/dashboard/*",
      type: "Compliance",
      details: "WCAG 2.1 Level AA assessment"
    },
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      platform: {
        name: "Microsoft",
        logo: platformLogos.microsoft
      },
      status: "failed",
      score: 65,
      time: "5h ago",
      description: "Performance Benchmark Test",
      agent: "Performance Agent",
      location: "/transactions/*",
      type: "Performance",
      details: "Response time exceeds threshold"
    },
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      platform: {
        name: "Salesforce",
        logo: platformLogos.salesforce
      },
      status: "success",
      score: 95,
      time: "6h ago",
      description: "Data Privacy Compliance Check",
      agent: "Compliance Agent",
      location: "/user/*",
      type: "Governance",
      details: "GDPR compliance verification"
    }
  ];

  // Enhanced mock data for validation trends (last 7 days)
  const validationTrendsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Security Tests',
        data: [92, 95, 89, 96, 94, 91, 93],
        color: colors.darkGreen,
        height: 120
      },
      {
        label: 'Performance Tests',
        data: [88, 85, 90, 87, 91, 86, 89],
        color: colors.midGreen,
        height: 80
      },
      {
        label: 'Compliance Tests',
        data: [95, 93, 94, 92, 96, 95, 97],
        color: colors.lightGreen,
        height: 100
      }
    ]
  };

  // Mock data for performance metrics
  const performanceMetricsData = {
    categories: [
      { label: 'Security', value: 94, icon: Shield },
      { label: 'Performance', value: 87, icon: Gauge },
      { label: 'Compliance', value: 92, icon: CheckCircle2 },
      { label: 'Accessibility', value: 89, icon: Eye },
      { label: 'Privacy', value: 95, icon: Lock }
    ]
  };

  const sidebarItems = [
    { icon: BarChart3, text: 'Dashboard', path: '/analytics' },
    { icon: Search, text: 'Discover', path: '/analytics/discover' },
    { icon: Activity, text: 'Reports', path: '/analytics/reports' },
    { icon: Bot, text: 'AI Agents', path: '/analytics/ai-agents' },
    { icon: Settings, text: 'Settings', path: '/analytics/settings' },
  ];

  return (
    <div className="bg-white h-screen flex">
      {/* Left Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col" style={{ borderColor: colors.paleGreen }}>
        <div className="flex items-center space-x-2 mb-8">
          <ChevronLeft className="w-5 h-5" style={{ color: colors.darkGreen }} />
          <span className="font-semibold">Back to Platform</span>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              to={item.path}
              key={item.text}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                location.pathname === item.path ? 'text-white' : ''
              }`}
              style={{ 
                backgroundColor: location.pathname === item.path ? colors.midGreen : 'transparent',
                color: location.pathname === item.path ? 'white' : colors.darkGreen
              }}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </Link>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-auto space-y-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: colors.paleGreen }}>
            <h4 className="text-sm font-semibold mb-2">System Status</h4>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 border-b flex items-center justify-between px-6" 
             style={{ borderColor: colors.paleGreen }}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <PepperLogo size="small" />
              <h1 className="text-xl font-bold" style={{ color: colors.darkGreen }}>Analytics Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Last 7 days</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" 
                     style={{ color: colors.midGreen }} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border text-sm"
                style={{ borderColor: colors.paleGreen }}
              />
            </div>
            <Filter className="w-5 h-5" style={{ color: colors.midGreen }} />
            <Download className="w-5 h-5" style={{ color: colors.midGreen }} />
            <Share2 className="w-5 h-5" style={{ color: colors.midGreen }} />
            <RefreshCw className="w-5 h-5" style={{ color: colors.midGreen }} />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Validations", value: "1,234", icon: CheckCircle2, trend: "+12.5%" },
              { label: "Active Agents", value: "8", icon: Bot, trend: "+2" },
              { label: "Avg Response Time", value: "235ms", icon: Zap, trend: "-18.2%" },
              { label: "Success Rate", value: "94.8%", icon: Activity, trend: "+3.1%" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg border" style={{ borderColor: colors.paleGreen }}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <stat.icon className="w-5 h-5" style={{ color: colors.midGreen }} />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold" style={{ color: colors.darkGreen }}>{stat.value}</span>
                  <span className="text-xs flex items-center" 
                        style={{ color: stat.trend.charAt(0) === '+' ? '#4CAF50' : '#F44336' }}>
                    {stat.trend.charAt(0) === '+' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Validation Trends */}
            <div className="bg-white p-6 rounded-lg shadow-sm border w-full" style={{ borderColor: colors.paleGreen }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Test Trends</h3>
              </div>
              <img 
                src={mockCharts.combinedTrends} 
                alt="Combined Test Trends" 
                className="w-full"
              />
            </div>

            {/* Performance Metrics */}
            <div className="p-4 rounded-lg border h-full flex flex-col" style={{ borderColor: colors.paleGreen }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Performance Metrics</h3>
                <span className="text-xs px-2 py-1 rounded-full" 
                      style={{ backgroundColor: colors.paleGreen }}>
                  Last 24 hours
                </span>
              </div>
              
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex items-end space-x-6">
                  {performanceMetricsData.categories.map((category, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="relative w-full h-48 flex items-end">
                        <div
                          className="w-full rounded-t-lg transition-all duration-300"
                          style={{
                            height: `${category.value}%`,
                            backgroundColor: colors.midGreen,
                            opacity: 0.8,
                          }}
                        ></div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                                      bg-white px-2 py-1 rounded shadow-sm text-xs font-bold">
                          {category.value}%
                        </div>
                      </div>
                      <div className="mt-3 flex flex-col items-center">
                        <span className="text-xs font-medium mb-1">{category.label}</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"
                             style={{ backgroundColor: colors.paleGreen }}>
                          <category.icon className="w-4 h-4" style={{ color: colors.darkGreen }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Validations Table - Updated with more details */}
          <div className="rounded-lg border" style={{ borderColor: colors.paleGreen }}>
            <div className="p-4 border-b" style={{ borderColor: colors.paleGreen }}>
              <h3 className="font-semibold">Recent Validations</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-left" style={{ color: colors.darkGreen }}>
                    <th className="pb-4">Application</th>
                    <th className="pb-4 text-center">Platform</th>
                    <th className="pb-4">Description</th>
                    <th className="pb-4">Agent</th>
                    <th className="pb-4">Location</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Score</th>
                    <th className="pb-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentValidations.map((validation, index) => (
                    <tr key={index} className="text-sm border-t" style={{ borderColor: colors.paleGreen }}>
                      <td className="py-3">
                        <Link 
                          to={`/test-details/test-2024-00${index + 1}`}
                          className="hover:text-blue-600"
                        >
                          <div>{validation.app}</div>
                          <div className="text-xs opacity-60">v{validation.version}</div>
                        </Link>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center">
                          <img 
                            src={validation.platform.logo} 
                            alt={validation.platform.name || 'Platform Logo'}
                            className="w-full h-8 object-contain"
                          />
                        </div>
                      </td>
                      <td className="py-3">
                        <div>{validation.description}</div>
                        <div className="text-xs opacity-60">{validation.details}</div>
                      </td>
                      <td className="py-3">{validation.agent}</td>
                      <td className="py-3">
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {validation.location}
                        </code>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          validation.status === 'success' ? 'bg-green-100 text-green-800' :
                          validation.status === 'failed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {validation.status}
                        </span>
                      </td>
                      <td className="py-3">{validation.score}%</td>
                      <td className="py-3">{validation.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 