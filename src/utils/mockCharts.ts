// Define the type for our mock charts
export interface MockCharts {
  combinedTrends: string;
  securityTrends: string;
  performanceTrends: string;
  complianceTrends: string;
}

// Import the image directly
import combinedTrends from '../assets/screenshots/chart1.png'

// Export the mock chart data
export const mockCharts: MockCharts = {
  combinedTrends
}; 