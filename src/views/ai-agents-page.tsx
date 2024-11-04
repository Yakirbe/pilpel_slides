import React, { useState } from 'react';
import { Bot, Plus, Settings, Edit, Trash2, CheckCircle, AlertTriangle,
  Shield, Gauge, Eye, Code2, Layout, TestTube, FileJson, 
  Fingerprint, Braces, Workflow, Zap, Network
} from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  type: 'security' | 'performance' | 'accessibility' | 'compliance' | 'ux' | 
        'functional' | 'api' | 'integration' | 'database' | 'workflow' | 'custom';
  description: string;
  status: 'active' | 'inactive' | 'configuring';
  source: 'pilpel' | 'custom';
  lastModified: string;
  configuration: {
    model: string;
    parameters: Record<string, any>;
  };
}

const AIAgentsPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [newAgent, setNewAgent] = useState({
    name: '',
    type: 'custom',
    description: '',
    model: 'gpt-4',
    parameters: {}
  });

  // Mock data for existing agents
  const agents: AIAgent[] = [
    {
      id: '1',
      name: 'Security Compliance Agent',
      type: 'security',
      description: 'Monitors and validates security compliance across NCLC applications',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-15',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.7,
          maxTokens: 2000
        }
      }
    },
    {
      id: '2',
      name: 'Performance Testing Agent',
      type: 'performance',
      description: 'Analyzes application performance metrics and suggests optimizations',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-14',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.5,
          maxTokens: 1500
        }
      }
    },
    {
      id: '3',
      name: 'UX Testing Agent',
      type: 'ux',
      description: 'Evaluates user experience and interface design patterns',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-13',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.8,
          maxTokens: 2000
        }
      }
    },
    {
      id: '4',
      name: 'Functional Testing Agent',
      type: 'functional',
      description: 'Validates core business logic and functionality',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-12',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.6,
          maxTokens: 1800
        }
      }
    },
    {
      id: '5',
      name: 'API Testing Agent',
      type: 'api',
      description: 'Tests API endpoints, schemas, and responses',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-11',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.5,
          maxTokens: 1500
        }
      }
    },
    {
      id: '6',
      name: 'Integration Testing Agent',
      type: 'integration',
      description: 'Validates system integrations and data flow',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-10',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.6,
          maxTokens: 1700
        }
      }
    },
    {
      id: '7',
      name: 'Database Testing Agent',
      type: 'database',
      description: 'Validates database operations and data integrity',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-09',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.5,
          maxTokens: 1600
        }
      }
    },
    {
      id: '8',
      name: 'Workflow Testing Agent',
      type: 'workflow',
      description: 'Validates business processes and workflows',
      status: 'active',
      source: 'pilpel',
      lastModified: '2024-03-08',
      configuration: {
        model: 'gpt-4',
        parameters: {
          temperature: 0.7,
          maxTokens: 1900
        }
      }
    },
    {
      id: '9',
      name: 'Custom Validation Agent',
      type: 'custom',
      description: 'Custom agent for specific NCLC validation requirements',
      status: 'configuring',
      source: 'custom',
      lastModified: '2024-03-07',
      configuration: {
        model: 'gpt-3.5-turbo',
        parameters: {
          temperature: 0.8,
          maxTokens: 1000
        }
      }
    }
  ];

  // Helper function to get icon by agent type
  const getAgentIcon = (type: string) => {
    const icons = {
      security: Shield,
      performance: Gauge,
      accessibility: Eye,
      ux: Layout,
      functional: TestTube,
      api: FileJson,
      integration: Network,
      database: Braces,
      workflow: Workflow,
      compliance: CheckCircle,
      custom: Bot
    };
    return icons[type as keyof typeof icons] || Bot;
  };

  // Helper function to get color by agent type
  const getAgentColor = (type: string) => {
    const colors = {
      security: '#2563eb',
      performance: '#7c3aed',
      accessibility: '#059669',
      ux: '#0891b2',
      functional: '#9333ea',
      api: '#0284c7',
      integration: '#7c3aed',
      database: '#0891b2',
      workflow: '#0d9488',
      compliance: '#059669',
      custom: '#6366f1'
    };
    return colors[type as keyof typeof colors] || '#6366f1';
  };

  // Update the select options in the form
  const agentTypes = [
    { value: 'security', label: 'Security Testing' },
    { value: 'performance', label: 'Performance Testing' },
    { value: 'accessibility', label: 'Accessibility Testing' },
    { value: 'ux', label: 'UX Testing' },
    { value: 'functional', label: 'Functional Testing' },
    { value: 'api', label: 'API Testing' },
    { value: 'integration', label: 'Integration Testing' },
    { value: 'database', label: 'Database Testing' },
    { value: 'workflow', label: 'Workflow Testing' },
    { value: 'compliance', label: 'Compliance Testing' },
    { value: 'custom', label: 'Custom Testing' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle agent creation logic here
    console.log('New agent:', newAgent);
    setIsCreating(false);
    setNewAgent({
      name: '',
      type: 'custom',
      description: '',
      model: 'gpt-4',
      parameters: {}
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">AI Agents</h1>
        <p className="text-gray-600">Manage and configure AI agents for your NCLC applications</p>
      </div>

      {/* Create New Agent Section */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Create New Agent</h2>
          <button
            onClick={() => setIsCreating(!isCreating)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Agent
          </button>
        </div>

        {isCreating && (
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Agent Name</label>
                <input
                  type="text"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={newAgent.type}
                  onChange={(e) => setNewAgent({ ...newAgent, type: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                >
                  {agentTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={newAgent.description}
                  onChange={(e) => setNewAgent({ ...newAgent, description: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Model</label>
                <select
                  value={newAgent.model}
                  onChange={(e) => setNewAgent({ ...newAgent, model: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Create Agent
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Agents List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Available Agents</h2>
        </div>
        <div className="p-4">
          <div className="grid gap-4">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {React.createElement(getAgentIcon(agent.type), {
                        className: "w-5 h-5",
                        style: { color: getAgentColor(agent.type) }
                      })}
                    </div>
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{agent.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {agent.source === 'pilpel' ? 'Pilpel AI' : 'Custom'}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
                              style={{
                                backgroundColor: agent.status === 'active' ? '#E5F2E9' : '#FEF3C7',
                                color: agent.status === 'active' ? '#166534' : '#92400E'
                              }}>
                          {agent.status === 'active' ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <AlertTriangle className="w-3 h-3" />
                          )}
                          {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Settings className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage; 