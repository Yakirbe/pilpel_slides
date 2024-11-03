import React from 'react';
import { 
  Users, 
  Cpu, 
  Shield, 
  Gauge, 
  FileText, 
  Check, 
  Activity, 
  BarChart3, 
  Database, 
  Eye, 
  Brain, 
  Layout, 
  Bot 
} from 'lucide-react';

interface Position {
  top: string;
  left: string;
}

interface Positions {
  top: Position;
  right: Position;
  bottom: Position;
  left: Position;
  'top-right': Position;
  'bottom-right': Position;
  'bottom-left': Position;
  'top-left': Position;
}

const positions: Positions = {
  'top': { top: '10%', left: '50%' },
  'right': { top: '50%', left: '90%' },
  'bottom': { top: '90%', left: '50%' },
  'left': { top: '50%', left: '10%' },
  'top-right': { top: '10%', left: '90%' },
  'bottom-right': { top: '90%', left: '90%' },
  'bottom-left': { top: '90%', left: '10%' },
  'top-left': { top: '10%', left: '10%' }
};

const TechnicalSlide = () => {
  const colors = {
    darkGreen: "#225937",
    midGreen: "#367D4E",
    lightGreen: "#4CA166",
    paleGreen: "#E5F2E9",
    accentGreen: "#65B67F"
  };

  // AI Core agents arranged in a maze-like pattern
  const aiAgents = [
    { icon: Shield, label: "Security Agent", position: "top" },
    { icon: Check, label: "Compliance Agent", position: "right" },
    { icon: FileText, label: "Content Agent", position: "bottom" },
    { icon: Activity, label: "Functional Agent", position: "left" },
    { icon: Eye, label: "Accessibility Agent", position: "top-right" },
    { icon: Layout, label: "UX Agent", position: "bottom-right" },
    { icon: Gauge, label: "Performance Agent", position: "bottom-left" },
    { icon: Brain, label: "AI & LLMs Agent", position: "top-left" }
  ];

  // Analytics features
  const analyticsFeatures = [
    "Real-time Performance Metrics",
    "Validation Success Rates",
    "Error Pattern Analysis",
    "AI Model Performance",
    "System Health Monitoring"
  ];

  // Modified onboarding steps for NCLC artifacts
  const onboardingSteps = [
    {
      title: "App Registration",
      features: [
        { label: "App Metadata Import", status: "complete" },
        { label: "NCLC Manifest Upload", status: "complete" },
        { label: "Dependencies Check", status: "in-progress" }
      ]
    },
    {
      title: "Validation Setup",
      features: [
        { label: "Test Endpoints Config", status: "complete" },
        { label: "Auth Flow Setup", status: "complete" },
        { label: "User Journeys", status: "complete" }
      ]
    },
    {
      title: "NCLC Compliance",
      features: [
        { label: "API Standards", status: "in-progress" },
        { label: "Security Policies", status: "pending" },
        { label: "Performance Criteria", status: "pending" }
      ]
    }
  ];

  // Enhanced test logs with app names and active agents
  const testLogs = [
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      action: "API Standards Check",
      agent: "Validation Agent",
      score: 98, 
      status: true,
      timestamp: "2m ago"
    },
    { 
      app: "NCLCStore",
      version: "1.3.2",
      action: "Auth Flow Test",
      agent: "Discovery Agent",
      score: 95, 
      status: true,
      timestamp: "5m ago"
    },
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      action: "User Journey Valid.",
      agent: "Crawler Agent",
      score: 92, 
      status: true,
      timestamp: "8m ago"
    },
    { 
      app: "NCLCStore",
      version: "1.3.2",
      action: "Security Scan",
      agent: "Validation Agent",
      score: 89, 
      status: false,
      timestamp: "12m ago"
    },
    { 
      app: "MyNCLC-App",
      version: "2.1.0",
      action: "Performance Test",
      agent: "Discovery Agent",
      score: 97, 
      status: true,
      timestamp: "15m ago"
    }
  ];

  return (
    <div className="bg-white p-8 h-screen flex flex-col" style={{ color: colors.darkGreen }}>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8" style={{ color: colors.darkGreen }}>
        NCLC Validation Platform
      </h1>

      <div className="flex-1 flex">
        {/* Left - NCLC App Onboarding */}
        <div className="w-1/4 p-4">
          <div className="h-full rounded-lg p-4" style={{ backgroundColor: colors.paleGreen }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" style={{ color: colors.darkGreen }} />
                <h3 className="font-semibold">App Onboarding</h3>
              </div>
              <div className="text-xs px-2 py-1 rounded-full" 
                   style={{ backgroundColor: colors.midGreen, color: 'white' }}>
                Validating
              </div>
            </div>

            {/* Current App Info */}
            <div className="mb-4 p-3 rounded-lg" 
                 style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
              <div className="text-xs mb-2">Current Artifact</div>
              <div className="font-semibold">MyNCLC-App-v2.1.0</div>
              <div className="text-xs mt-1">Type: Web Application</div>
            </div>

            {/* Rest of the onboarding steps structure remains same */}
            <div className="space-y-4">
              {onboardingSteps.map((step, stepIndex) => (
                <div key={stepIndex} className="relative">
                  {/* Progress Line */}
                  {stepIndex < onboardingSteps.length - 1 && (
                    <div className="absolute left-3 top-8 bottom-0 w-0.5" 
                         style={{ backgroundColor: `${colors.midGreen}40` }}></div>
                  )}
                  
                  <div className="p-3 rounded-lg" 
                       style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full" 
                           style={{ backgroundColor: colors.midGreen }}></div>
                      <p className="font-semibold text-sm">{step.title}</p>
                    </div>
                    <div className="space-y-1.5 ml-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} 
                             className="flex items-center justify-between text-xs">
                          <span>{feature.label}</span>
                          <div className="flex items-center space-x-1">
                            <span style={{ 
                              color: feature.status === 'complete' ? '#4CAF50' : 
                                     feature.status === 'in-progress' ? '#FFA000' : '#9E9E9E'
                            }}>
                              {feature.status === 'complete' ? '✓' : 
                               feature.status === 'in-progress' ? '⋯' : '○'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Summary modified */}
            <div className="mt-4 p-2 rounded-lg" 
                 style={{ backgroundColor: 'rgba(54, 125, 78, 0.05)' }}>
              <div className="flex justify-between text-xs mb-1">
                <span>Validation Progress</span>
                <span>67%</span>
              </div>
              <div className="w-full h-1.5 rounded-full overflow-hidden" 
                   style={{ backgroundColor: `${colors.midGreen}40` }}>
                <div className="h-full rounded-full" 
                     style={{ backgroundColor: colors.midGreen, width: '67%' }}></div>
              </div>
              <div className="text-xs mt-2 text-center" style={{ color: colors.midGreen }}>
                NCLC Compliance Score: B+
              </div>
            </div>
          </div>
        </div>

        {/* Center - AI Core Engine */}
        <div className="flex-1 mx-4">
          <div className="h-full rounded-lg relative p-6" style={{ backgroundColor: colors.paleGreen }}>
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <Cpu className="w-6 h-6" style={{ color: colors.darkGreen }} />
              <h2 className="font-bold text-xl">AI Core Engine</h2>
            </div>

            {/* Spiral Maze Background */}
            <div className="absolute inset-0 m-12">
              <div className="relative h-full rounded-lg border-2" 
                   style={{ backgroundColor: colors.midGreen, borderColor: colors.accentGreen }}>
                
                {/* Spiral Maze Pattern */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {/* Spiral Path */}
                  <path
                    d={`
                      M 50 50
                      m 0 0
                      a 5 5 0 0 1 10 0
                      a 10 10 0 0 1 -20 0
                      a 15 15 0 0 1 30 0
                      a 20 20 0 0 1 -40 0
                      a 25 25 0 0 1 50 0
                      a 30 30 0 0 1 -60 0
                      a 35 35 0 0 1 70 0
                    `}
                    stroke={colors.lightGreen}
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>

                {/* Central Robot Navigator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              w-24 h-24 rounded-full flex items-center justify-center z-10"
                     style={{ backgroundColor: colors.darkGreen }}>
                  <Bot className="w-12 h-12 text-white" />
                  {/* Rotating rings */}
                  <div className="absolute w-32 h-32 rounded-full border-2 border-dashed animate-spin-slow"
                       style={{ borderColor: colors.lightGreen, animationDuration: '20s' }}></div>
                  <div className="absolute w-28 h-28 rounded-full border-2 border-dashed animate-spin-slow"
                       style={{ borderColor: colors.lightGreen, animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>

                {/* AI Agents positioned at corners/edges */}
                {aiAgents.map((agent, index) => {
                  // Position calculations for corners/edges inside the box
                  const pos = positions[agent.position as keyof Positions];
                  
                  return (
                    <div
                      key={agent.label}
                      className="absolute flex flex-col items-center w-20 p-2 rounded-lg"
                      style={{
                        backgroundColor: colors.accentGreen,
                        ...pos,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20
                      }}
                    >
                      <agent.icon className="w-6 h-6 text-white" />
                      <span className="text-white text-xs mt-1 text-center">{agent.label}</span>
                    </div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 15 }}>
                  {aiAgents.map((agent, index) => {
                    const pos = {
                      'top': { x: 50, y: 10 },
                      'right': { x: 90, y: 50 },
                      'bottom': { x: 50, y: 90 },
                      'left': { x: 10, y: 50 },
                      'top-right': { x: 90, y: 10 },
                      'bottom-right': { x: 90, y: 90 },
                      'bottom-left': { x: 10, y: 90 },
                      'top-left': { x: 10, y: 10 }
                    }[agent.position];
                    
                    if (pos) {
                      return (
                        <line
                          key={`line-${index}`}
                          x1="50%"
                          y1="50%"
                          x2={`${pos.x}%`}
                          y2={`${pos.y}%`}
                          stroke={colors.lightGreen}
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          style={{ opacity: 0.5 }}
                        />
                      );
                    } else {
                      console.warn(`Position for agent ${agent.position} is undefined.`);
                      return null;
                    }
                  })}
                </svg>

                {/* Small Nodes Along Spiral */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 15 }}>
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * Math.PI) / 4;
                    const radius = 10 + i * 10;
                    const x = 50 + Math.cos(angle) * radius;
                    const y = 50 + Math.sin(angle) * radius;
                    
                    return (
                      <circle
                        key={`node-${i}`}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="2"
                        fill={colors.lightGreen}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Restructured Dashboard */}
        <div className="w-1/4 p-4">
          <div className="h-full rounded-lg p-4 flex flex-col" style={{ backgroundColor: colors.paleGreen }}>
            <div className="flex items-center space-x-2 mb-4 cursor-pointer"
                 onClick={() => window.location.href = '/analytics'}>
              <BarChart3 className="w-5 h-5" style={{ color: colors.darkGreen }} />
              <h3 className="font-semibold">Analytics Dashboard</h3>
            </div>

            {/* Two Charts View */}
            <div className="flex gap-2 mb-4">
              {/* Chart 1 - Gauge */}
              <div className="flex-1 rounded-lg p-3" style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
                <div className="relative h-20 flex justify-center items-center">
                  <div className="w-20 h-20 rounded-full border-8 border-t-0 transform rotate-45"
                       style={{ borderColor: colors.midGreen }}>
                    <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                      <span className="text-lg font-bold">98%</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center mt-2">Performance</div>
              </div>

              {/* Chart 2 - Success Rate */}
              <div className="flex-1 rounded-lg p-3" style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
                <div className="relative h-20 flex flex-col justify-center items-center">
                  <span className="text-lg font-bold">95%</span>
                  <div className="w-full h-2 rounded-full mt-2" style={{ backgroundColor: colors.midGreen }}></div>
                  <div className="w-3/4 h-2 rounded-full mt-1" style={{ backgroundColor: colors.midGreen }}></div>
                  <div className="w-1/2 h-2 rounded-full mt-1" style={{ backgroundColor: colors.midGreen }}></div>
                </div>
                <div className="text-xs text-center mt-2">Success Rate</div>
              </div>
            </div>

            {/* Enhanced Test Logs */}
            <div className="flex-1 overflow-auto">
              <h4 className="text-sm font-semibold mb-2">Test Logs</h4>
              <div className="space-y-2">
                {testLogs.map((log, index) => (
                  <div key={index} 
                       className="flex items-center justify-between text-xs p-2 rounded-lg"
                       style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
                    <div className="flex-1 flex items-center space-x-3">
                      {/* App Info */}
                      <div className="min-w-[100px]">
                        <div className="font-medium">{log.app}</div>
                        <div className="text-[10px] opacity-70">v{log.version}</div>
                      </div>
                      
                      {/* Action & Agent */}
                      <div className="flex-1">
                        <div>{log.action}</div>
                        <div className="text-[10px] opacity-70 flex items-center space-x-1">
                          <Bot className="w-3 h-3" style={{ color: colors.midGreen }} />
                          <span>{log.agent}</span>
                        </div>
                      </div>

                      {/* Score & Status */}
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-end">
                          <span className="font-medium">{log.score}%</span>
                          <span className="text-[10px] opacity-70">{log.timestamp}</span>
                        </div>
                        <div className="w-2 h-2 rounded-full"
                             style={{ backgroundColor: log.status ? '#4CAF50' : '#F44336' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback with Arrow */}
            <div className="mt-4 p-3 rounded-lg flex items-center justify-between"
                 style={{ backgroundColor: 'rgba(54, 125, 78, 0.1)' }}>
              <span className="text-sm font-semibold">Feedback</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs">Active</span>
                {/* Arrow pointing left towards AI Engine */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 12H4M10 6L4 12L10 18"
                    stroke={colors.midGreen}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom - Modified Data Integration */}
      <div className="h-16 mt-4 rounded-lg p-4 flex items-center justify-between" style={{ backgroundColor: colors.paleGreen }}>
        <div className="flex items-center space-x-2">
          <Database className="w-5 h-5" style={{ color: colors.darkGreen }} />
          <h3 className="font-semibold">NCLC Registry</h3>
        </div>
        <div className="flex space-x-4">
          <span className="text-sm">Artifact Repository</span>
          <span className="text-sm">Standards DB</span>
          <span className="text-sm">Validation History</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSlide;