import React from 'react'
import PepperLogo from '../components/PepperLogo'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center space-x-4 mb-8">
        <PepperLogo className="w-12 h-12" />
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#225937' }}>
          Welcome to pilpel.ai
        </h1>
      </div>
      <p className="text-gray-600 text-sm md:text-base">
        Your AI-powered testing and validation platform. Select a page from the navigation menu above to get started.
      </p>
    </div>
  )
}

export default Home 