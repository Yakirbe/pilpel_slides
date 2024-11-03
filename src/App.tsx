import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './views/Home'
import Platform from './views/Platform'
import AnalyticsDashboard from './views/analytics-dashboard'
import TestDetails from './views/test-details'
import CreateAgent from './views/CreateAgent'
import PepperLogo from './components/PepperLogo'

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
                <PepperLogo />
                <span>pilpel.ai</span>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6">
                <li>
                  <Link to="/" className="text-green-700 hover:text-green-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="text-green-700 hover:text-green-900">
                    Platform - Slides
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-green-700 hover:text-green-900">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/test-details" className="text-green-700 hover:text-green-900">
                    Test Details
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
                  <li>
                    <Link 
                      to="/test-details" 
                      className="text-green-700 hover:text-green-900 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Test Details
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