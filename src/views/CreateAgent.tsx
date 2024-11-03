import React, { useState } from 'react'

const CreateAgent = () => {
  const [prompt, setPrompt] = useState('')
  const [agentName, setAgentName] = useState('')
  const [agentType, setAgentType] = useState('validation')

  const agentTypes = [
    { value: 'validation', label: 'Validation Agent' },
    { value: 'security', label: 'Security Agent' },
    { value: 'performance', label: 'Performance Agent' },
    { value: 'accessibility', label: 'Accessibility Agent' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle agent creation logic here
    console.log({ agentName, agentType, prompt })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#225937' }}>Create New AI Agent</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Agent Name</label>
          <input
            type="text"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="My Custom Agent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Agent Type</label>
          <select
            value={agentType}
            onChange={(e) => setAgentType(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            {agentTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Agent Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-lg h-48"
            placeholder="Describe your agent's behavior and objectives..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white rounded-lg"
          style={{ backgroundColor: '#367D4E' }}
        >
          Create Agent
        </button>
      </form>

      <div className="mt-8 p-4 rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Prompt Guidelines</h2>
        <ul className="space-y-2 text-sm">
          <li>• Be specific about the agent's primary function</li>
          <li>• Define expected inputs and outputs</li>
          <li>• Specify any validation rules or constraints</li>
          <li>• Include error handling preferences</li>
          <li>• Define success criteria</li>
        </ul>
      </div>
    </div>
  )
}

export default CreateAgent 