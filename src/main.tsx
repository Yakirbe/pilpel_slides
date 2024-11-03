import React from 'react'
import ReactDOM from 'react-dom/client'
import TechnicalSlide from './test'
import AnalyticsDashboard from './analytics-dashboard'
import TestDetails from './test-details'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TechnicalSlide />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/test/:id" element={<TestDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
) 