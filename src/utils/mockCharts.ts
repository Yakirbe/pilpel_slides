// Define the type for our mock charts
export interface MockCharts {
  combinedTrends: string;
  securityTrends: string;
  performanceTrends: string;
  complianceTrends: string;
}

// Export the mock chart data
export const mockCharts: MockCharts = {
  combinedTrends: "artifacts/screenshots/chart1.png",
  securityTrends: "artifacts/screenshots/chart2.png",
  performanceTrends: "artifacts/screenshots/chart3.png",
  complianceTrends: "artifacts/screenshots/chart4.png"
}; 