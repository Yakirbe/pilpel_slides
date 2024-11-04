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
  Bot, 
  FileJson, 
  Globe, 
  Lock 
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

  // Updated AI Core agents with a new custom agent
  const aiAgents = [
    { icon: Shield, label: "Security Agent" },
    { icon: Check, label: "Compliance Agent" },
    { icon: FileText, label: "Content Agent" },
    { icon: Activity, label: "Functional Agent" },
    { icon: Eye, label: "Discovery Agent" },
    { icon: Layout, label: "Integration Agent" },
    { icon: Gauge, label: "Performance Agent" },
    { icon: Brain, label: "AI & LLMs Agent" },
    { icon: Cpu, label: "Custom Agent" } // New custom agent
  ];

  // Updated integrations list
  const integrations = [
    { 
      name: "Enterprise Systems",
      items: ["Active Directory", "SSO Providers", "API Gateways"]
    },
    {
      name: "Development Tools",
      items: ["CI/CD Pipelines", "Git Repositories", "Container Registries"]
    },
    {
      name: "Monitoring",
      items: ["APM Tools", "Log Aggregators", "Metrics Platforms"]
    }
  ];

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col" style={{ color: colors.darkGreen }}>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8" style={{ color: colors.darkGreen }}>
        Technology Platform
      </h1>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Left - Discovery Engine */}
        <div className="col-span-1">
          <div className="h-full rounded-lg relative p-6 flex flex-col" style={{ backgroundColor: colors.paleGreen }}>
            <div className="mb-8 flex items-center space-x-2">
              <Eye className="w-6 h-6" style={{ color: colors.darkGreen }} />
              <h2 className="font-bold text-xl">Discovery Engine</h2>
            </div>

            {/* Discovery Engine Sub-parts */}
            <div className="flex-1 grid grid-rows-2 gap-4">
              {/* Part 1: NCLC App Detection */}
              <div className="p-4 rounded-lg overflow-auto" style={{ backgroundColor: colors.midGreen }}>
                <h3 className="font-semibold text-center mb-4 text-white">NCLC App Detection</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">Network Scanning</div>
                    <div className="text-xs">Identify active services and endpoints.</div>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">Container Registry Analysis</div>
                    <div className="text-xs">Analyze container images for vulnerabilities.</div>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">Git Repository Inspection</div>
                    <div className="text-xs">Review code repositories for compliance.</div>
                  </div>
                </div>
              </div>

              {/* Part 2: Automated Classification */}
              <div className="p-4 rounded-lg overflow-auto" style={{ backgroundColor: colors.midGreen }}>
                <h3 className="font-semibold text-center mb-4 text-white">Automated Classification</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">App Type Recognition</div>
                    <div className="text-xs">Classify applications based on functionality.</div>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">Tech Stack Analysis</div>
                    <div className="text-xs">Identify technologies used in applications.</div>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <div className="text-sm font-medium mb-2">Dependency Mapping</div>
                    <div className="text-xs">Map out application dependencies.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Validation Engine */}
        <div className="col-span-2">
          <div className="h-full rounded-lg relative p-6 flex flex-col" style={{ backgroundColor: colors.paleGreen }}>
            <div className="mb-8 flex items-center space-x-2">
              <Cpu className="w-6 h-6" style={{ color: colors.darkGreen }} />
              <h2 className="font-bold text-xl">Validation Engine</h2>
            </div>

            {/* Validation Engine Sub-parts */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* Part 1: AI Agents */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.midGreen }}>
                <h3 className="font-semibold text-center mb-4 text-white">AI Agents</h3>
                <div className="grid grid-cols-3 gap-2 h-[calc(100%-2rem)]">
                  {aiAgents.map((agent, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                      <agent.icon className="w-12 h-12 text-white" />
                      <span className="text-white text-xs mt-1 text-center">{agent.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 2: Traverse App Navigator */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.midGreen }}>
                <h3 className="font-semibold text-center mb-4 text-white">AI App Traverser</h3>
                <div className="flex justify-center items-center h-[calc(100%-2rem)]">
                  <svg width="100%" height="100%" viewBox="0 0 200 200">
                    {/* Define the path for robot to follow */}
                    <path
                      id="robotPath"
                      d="M 100 30 L 100 70 L 50 110 L 30 150 M 50 110 L 70 150 M 100 70 L 150 110 L 130 150 M 150 110 L 170 150"
                      stroke="none"
                      fill="none"
                    />
                    
                    {/* Connection lines */}
                    <line x1="100" y1="30" x2="100" y2="70" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="100" y1="70" x2="50" y2="110" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="100" y1="70" x2="150" y2="110" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="50" y1="110" x2="30" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="50" y1="110" x2="70" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="150" y1="110" x2="130" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="150" y1="110" x2="170" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="100" y1="70" x2="100" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="30" y1="150" x2="70" y2="150" stroke={colors.lightGreen} strokeWidth="2" />
                    <line x1="130" y1="150" x2="170" y2="150" stroke={colors.lightGreen} strokeWidth="2" />

                    {/* Walking Robot Head */}
                    <g id="robotHead">
                      <animateMotion
                        dur="10s"
                        repeatCount="indefinite"
                        path="M 100 30 L 100 70 L 50 110 L 30 150 M 50 110 L 70 150 M 100 70 L 150 110 L 130 150 M 150 110 L 170 150"
                      >
                        <mpath href="#robotPath" />
                      </animateMotion>
                      
                      {/* Robot Head */}
                      <g transform="translate(-8, -8) scale(0.8)">
                        {/* Head shape */}
                        <path
                          d="M8,0 C12,0 16,4 16,8 C16,12 12,16 8,16 C4,16 0,12 0,8 C0,4 4,0 8,0"
                          fill={colors.darkGreen}
                        />
                        
                        {/* Eyes */}
                        <circle cx="5" cy="8" r="1.5" fill="white" />
                        <circle cx="11" cy="8" r="1.5" fill="white" />
                        
                        {/* Antenna */}
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="0"
                          stroke={colors.lightGreen}
                          strokeWidth="1"
                        >
                          <animate
                            attributeName="y2"
                            values="0;-1;0"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </line>
                        <circle
                          cx="8"
                          cy="0"
                          r="1"
                          fill={colors.lightGreen}
                        >
                          <animate
                            attributeName="cy"
                            values="0;-1;0"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Scanner effect */}
                        <path
                          d="M8,14 L4,18 L12,18 Z"
                          fill={colors.lightGreen}
                          opacity="0.5"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.5;0.2;0.5"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    </g>

                    {/* Website-like nodes */}
                    {[
                      {x: 100, y: 30},  // Top node
                      {x: 100, y: 70},  // Center node
                      {x: 50, y: 110},  // Left middle
                      {x: 150, y: 110}, // Right middle
                      {x: 30, y: 150},  // Bottom left
                      {x: 70, y: 150},  // Bottom left-center
                      {x: 100, y: 150}, // Bottom center
                      {x: 130, y: 150}, // Bottom right-center
                      {x: 170, y: 150}  // Bottom right
                    ].map((pos, index) => (
                      <g key={index} transform={`translate(${pos.x - 10}, ${pos.y - 10})`}>
                        {/* Website container */}
                        <rect
                          width="20"
                          height="20"
                          rx="2"
                          fill={index === 1 ? colors.accentGreen : "white"} // Highlight center node
                          stroke={colors.accentGreen}
                          strokeWidth="1"
                        />
                        {/* Header bar */}
                        <rect
                          width="20"
                          height="4"
                          rx="1"
                          fill={index === 1 ? "white" : colors.accentGreen}
                        />
                        {/* Content lines */}
                        <line 
                          x1="3" 
                          y1="8" 
                          x2="17" 
                          y2="8" 
                          stroke={index === 1 ? "white" : colors.lightGreen} 
                          strokeWidth="1" 
                        />
                        <line 
                          x1="3" 
                          y1="12" 
                          x2="17" 
                          y2="12" 
                          stroke={index === 1 ? "white" : colors.lightGreen} 
                          strokeWidth="1" 
                        />
                        <line 
                          x1="3" 
                          y1="16" 
                          x2="12" 
                          y2="16" 
                          stroke={index === 1 ? "white" : colors.lightGreen} 
                          strokeWidth="1" 
                        />
                      </g>
                    ))}

                    {/* Animated pulse effect for active scanning */}
                    {[
                      {x: 100, y: 30},
                      {x: 100, y: 70},
                      {x: 50, y: 110}
                    ].map((pos, index) => (
                      <circle
                        key={`pulse-${index}`}
                        cx={pos.x}
                        cy={pos.y}
                        r="12"
                        fill="none"
                        stroke={colors.accentGreen}
                        strokeWidth="1"
                        opacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          values="12;16;12"
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${index * 0.5}s`}
                        />
                        <animate
                          attributeName="opacity"
                          values="0.5;0;0.5"
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${index * 0.5}s`}
                        />
                      </circle>
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Text below the sub-parts */}
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: colors.midGreen }}>
              <p className="text-xs text-white">
                The testing flow is assembled from the app traverse and special agents, ensuring comprehensive coverage and efficiency. The traverse scan navigates the entire website, identifying key areas for testing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Features Grid */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {/* ... Add technical feature cards here ... */}
        {['API Management', 'Security Controls', 'Performance Monitoring', 'Compliance Automation'].map((feature, index) => (
          <div key={index} className="rounded-lg p-4" style={{ backgroundColor: colors.paleGreen }}>
            <h4 className="font-semibold mb-2">{feature}</h4>
            <div className="text-xs">
              Technical capabilities and integrations
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSlide;