import React, { useState } from 'react';
import { Search, Filter, RefreshCw, Download, Radar } from 'lucide-react';

interface AppResult {
  id: string;
  name: string;
  ipAddress: string;
  platform: string;
  developer: {
    name: string;
    email: string;
  };
  lastSeen: string;
  status: 'active' | 'inactive' | 'maintenance';
  location: string;
}

const DiscoverPage = () => {
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [hasDiscovered, setHasDiscovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [discoveredApps, setDiscoveredApps] = useState<AppResult[]>([]);

  // Mock data for discovered apps
  const mockDiscoveredApps: AppResult[] = [
    {
      id: '1',
      name: 'MyNCLC-App-Production',
      ipAddress: '192.168.1.100',
      platform: 'Airtable',
      developer: {
        name: 'John Smith',
        email: 'john.smith@nclc.org'
      },
      lastSeen: '2024-03-15',
      status: 'active',
      location: '/var/www/nclc-prod'
    },
    {
      id: '2',
      name: 'MyNCLC-App-Staging',
      ipAddress: '192.168.1.101',
      platform: 'Airtable',
      developer: {
        name: 'Sarah Johnson',
        email: 'sarah.j@nclc.org'
      },
      lastSeen: '2024-03-14',
      status: 'active',
      location: '/var/www/nclc-staging'
    },
    {
      id: '3',
      name: 'NCLC-Legacy-App',
      ipAddress: '192.168.1.150',
      platform: 'Salesforce',
      developer: {
        name: 'Mike Wilson',
        email: 'mike.w@nclc.org'
      },
      lastSeen: '2024-03-10',
      status: 'maintenance',
      location: '/opt/legacy/nclc'
    }
  ];

  const handleDiscover = () => {
    setIsDiscovering(true);
    // Simulate network discovery
    setTimeout(() => {
      setDiscoveredApps(mockDiscoveredApps);
      setIsDiscovering(false);
      setHasDiscovered(true);
    }, 3000);
  };

  const filteredApps = discoveredApps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.ipAddress.includes(searchQuery) ||
    app.developer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.developer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Discover NCLC Apps</h1>
        <p className="text-gray-600">Scan your network to discover NCLC applications</p>
      </div>

      {/* Discover Button Section */}
      {!hasDiscovered && (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-12 mb-6">
          <Radar className="w-16 h-16 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Start Network Discovery</h2>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            Click the button below to scan your network for NCLC applications
          </p>
          <button
            onClick={handleDiscover}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 text-lg"
            disabled={isDiscovering}
          >
            {isDiscovering ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Scanning Network...
              </>
            ) : (
              <>
                <Radar className="w-5 h-5" />
                Discover Apps
              </>
            )}
          </button>
        </div>
      )}

      {/* Search and Results Section */}
      {hasDiscovered && (
        <>
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by app name, IP, developer..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="p-2 border rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={handleDiscover}
                className="p-2 border rounded-lg hover:bg-gray-50"
              >
                <RefreshCw className={`w-5 h-5 text-gray-600 ${isDiscovering ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Platform
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Developer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Seen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{app.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {app.ipAddress}
                      </code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{app.platform}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.developer.name}</div>
                      <div className="text-sm text-gray-500">{app.developer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 font-mono">{app.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{app.lastSeen}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default DiscoverPage; 