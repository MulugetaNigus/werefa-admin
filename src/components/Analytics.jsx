import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Analytics = () => {
  const { t } = useTranslation();
  
  const statsData = [
    {
      title: t('analytics.totalRecords'),
      value: '34',
      icon: '📊',
      color: 'bg-blue-500'
    },
    {
      title: t('analytics.completedRecords'),
      value: '10',
      icon: '❤️',
      color: 'bg-red-500'
    },
    {
      title: t('analytics.pendingRecords'),
      value: '20',
      icon: '✈️',
      color: 'bg-green-500'
    },
    {
      title: t('analytics.administrativeRecords'),
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{t('analytics.dashboard')}</h2>
        <LanguageToggle />
      </div>
      
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6 mb-6 xl:mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg p-3 lg:p-4 xl:p-6 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-xs lg:text-sm">{stat.title}</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold mt-1 lg:mt-2">{stat.value}</p>
              </div>
              <div className="text-xl lg:text-2xl xl:text-3xl opacity-80">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow-sm p-3 lg:p-4 xl:p-6">
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
        <div className="bg-white rounded-lg shadow-sm p-3 lg:p-4 xl:p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm font-medium text-gray-700">{t('analytics.date')}</th>
                  <th className="text-center py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm font-medium text-blue-600">{t('analytics.completedRecords')}</th>
                  <th className="text-center py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm font-medium text-green-600">{t('analytics.pendingRecords')}</th>
                  <th className="text-center py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm font-medium text-purple-600">{t('analytics.administrativeRecords')}</th>
                  <th className="text-center py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm font-medium text-blue-600">{t('analytics.total')}</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm text-gray-900">{row.month}</td>
                    <td className="py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm text-center text-blue-600 font-medium">{row.completed}</td>
                    <td className="py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm text-center text-green-600 font-medium">{row.pending}</td>
                    <td className="py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm text-center text-purple-600 font-medium">{row.processing}</td>
                    <td className="py-2 lg:py-3 px-1 lg:px-2 text-xs lg:text-sm text-center text-blue-600 font-medium">{row.total}</td>
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
