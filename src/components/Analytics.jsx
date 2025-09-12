import React from 'react';

const Analytics = () => {
  const statsData = [
    {
      title: 'ጠቅላላ ወረ4ዎች',
      value: '34',
      icon: '📊',
      color: 'bg-blue-500'
    },
    {
      title: 'የተሰናዳ ወረ4ዎች',
      value: '10',
      icon: '❤️',
      color: 'bg-red-500'
    },
    {
      title: 'ያልተሰናዳ ወረ4ዎች',
      value: '20',
      icon: '✈️',
      color: 'bg-green-500'
    },
    {
      title: 'በአስተዳደር የተመዝገቡ',
      value: '4',
      icon: '🔍',
      color: 'bg-purple-500'
    }
  ];

  const chartData = [
    { month: 'ሰኔ', value: 25 },
    { month: 'ማክሰኞ', value: 60 },
    { month: 'ዕረቦ', value: 30 },
    { month: 'ሐሙስ', value: 80 },
    { month: 'ዓርብ', value: 65 }
  ];

  const tableData = [
    { month: 'ሰኔ', completed: 10, pending: 20, processing: 4, total: 34 },
    { month: 'ማክሰኞ', completed: 10, pending: 20, processing: 4, total: 34 },
    { month: 'ዕረቦ', completed: 10, pending: 20, processing: 4, total: 34 },
    { month: 'ሐሙስ', completed: 10, pending: 20, processing: 4, total: 34 },
    { month: 'ዓርብ', completed: 10, pending: 20, processing: 4, total: 34 }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">ዳሽቦርድ</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg p-6 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="text-3xl opacity-80">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">በዓመት ሪፖርት</h3>
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Y-axis labels */}
              <text x="20" y="20" className="text-xs fill-gray-500">100</text>
              <text x="20" y="120" className="text-xs fill-gray-500">50</text>
              <text x="20" y="190" className="text-xs fill-gray-500">10</text>
              
              {/* Chart line */}
              <path
                d="M 60 160 Q 120 100 160 120 Q 200 140 240 80 Q 280 60 340 70"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Data points */}
              {chartData.map((point, index) => (
                <g key={index}>
                  <circle
                    cx={60 + index * 70}
                    cy={200 - (point.value * 1.8)}
                    r="4"
                    fill="#3b82f6"
                  />
                </g>
              ))}
              
              {/* X-axis labels */}
              {chartData.map((point, index) => (
                <text
                  key={index}
                  x={60 + index * 70}
                  y="195"
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                >
                  {point.month}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">ቀን</th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-blue-600">የተሰናዳ ወረ4ዎች</th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-green-600">ያልተሰናዳ ወረ4ዎች</th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-purple-600">በአስተዳደር የተመዝገቡ</th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-blue-600">ጠቅላላ</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-900">{row.month}</td>
                    <td className="py-3 px-2 text-sm text-center text-blue-600 font-medium">{row.completed}</td>
                    <td className="py-3 px-2 text-sm text-center text-green-600 font-medium">{row.pending}</td>
                    <td className="py-3 px-2 text-sm text-center text-purple-600 font-medium">{row.processing}</td>
                    <td className="py-3 px-2 text-sm text-center text-blue-600 font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
