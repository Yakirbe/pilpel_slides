import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './views/Home'
import Platform from './views/Platform'
import AnalyticsDashboard from './views/analytics-dashboard'
import TestDetails from './views/test-details'
import CreateAgent from './views/CreateAgent'
import PepperLogo from './components/PepperLogo'
import DiscoverPage from './views/discover-page'
import ReportsPage from './views/reports-page'
import AIAgentsPage from './views/ai-agents-page'
import SettingsPage from './views/settings-page'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg p-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2 text-xl font-bold" style={{ color: '#225937' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <img src="src/assets/logo_pilpel.png" alt="Pilpel Logo" style={{ height: '40px', marginRight: '10px' }} />
                  <span>pilpel.ai</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6">
                <li>
                  <Link to="/platform" className="text-green-700 hover:text-green-900">
                    Platform - Slides
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-green-700 hover:text-green-900">
                    Dashboard
                  </Link>
                </li>
              </ul>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-green-700 hover:text-green-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link 
                      to="/" 
                      className="text-green-700 hover:text-green-900 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/platform" 
                      className="text-green-700 hover:text-green-900 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Platform - Slides
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/analytics" 
                      className="text-green-700 hover:text-green-900 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Analytics
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/analytics/discover" element={<DiscoverPage />} />
            <Route path="/analytics/reports" element={<ReportsPage />} />
            <Route path="/analytics/ai-agents" element={<AIAgentsPage />} />
            <Route path="/analytics/settings" element={<SettingsPage />} />
            <Route path="/test-details/:id" element={<TestDetails />} />
            <Route path="/create-agent" element={<CreateAgent />} />
            <Route path="/agents" element={<CreateAgent />} />
            <Route path="/security" element={<div>Security Page</div>} />
            <Route path="/accessibility" element={<div>Accessibility Page</div>} />
            <Route path="/performance" element={<div>Performance Page</div>} />
            <Route path="/compliance" element={<div>Compliance Page</div>} />
            <Route path="/api-tests" element={<div>API Tests Page</div>} />
            <Route path="/team" element={<div>Team Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App 