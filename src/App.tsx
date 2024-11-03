import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Platform from './views/Platform'
import AnalyticsDashboard from './views/analytics-dashboard'
import TestDetails from './views/test-details'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-lg p-4">
          <div className="container mx-auto">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-blue-600 hover:text-blue-800">
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-blue-600 hover:text-blue-800">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/test-details" className="text-blue-600 hover:text-blue-800">
                  Test Details
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/test-details" element={<TestDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App 