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
    { month: 'ሰኔ', value: 25, completed: 8, pending: 12, processing: 5 },
    { month: 'ማክሰኞ', value: 60, completed: 22, pending: 28, processing: 10 },
    { month: 'ዕረቦ', value: 30, completed: 12, pending: 15, processing: 3 },
    { month: 'ሐሙስ', value: 80, completed: 35, pending: 30, processing: 15 },
    { month: 'ዓርብ', value: 65, completed: 28, pending: 25, processing: 12 }
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
                <p className="text-white/80 text-xs lg:text-sm font-bold">{stat.title}</p>
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
        {/* Modern Donut Chart Section */}
        <div className="bg-white rounded-lg shadow-sm p-3 lg:p-4 xl:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">በዚህ ሳምንት</h3>
            <div className="text-xs text-gray-500 font-bold">ጠቅላላ ሪከርዶች ስርጭት</div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Donut Chart */}
            <div className="relative">
              <svg width="240" height="240" viewBox="0 0 240 240" className="transform -rotate-90">
                <defs>
                  <linearGradient id="completedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="pendingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                  <linearGradient id="processingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
                  </filter>
                </defs>
                
                {(() => {
                  const totalCompleted = chartData.reduce((sum, data) => sum + data.completed, 0);
                  const totalPending = chartData.reduce((sum, data) => sum + data.pending, 0);
                  const totalProcessing = chartData.reduce((sum, data) => sum + data.processing, 0);
                  const grandTotal = totalCompleted + totalPending + totalProcessing;
                  
                  const completedPercentage = (totalCompleted / grandTotal) * 100;
                  const pendingPercentage = (totalPending / grandTotal) * 100;
                  const processingPercentage = (totalProcessing / grandTotal) * 100;
                  
                  const radius = 80;
                  const strokeWidth = 24;
                  const circumference = 2 * Math.PI * radius;
                  
                  const completedLength = (completedPercentage / 100) * circumference;
                  const pendingLength = (pendingPercentage / 100) * circumference;
                  const processingLength = (processingPercentage / 100) * circumference;
                  
                  return (
                    <g>
                      {/* Background circle */}
                      <circle
                        cx="120"
                        cy="120"
                        r={radius}
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth={strokeWidth}
                      />
                      
                      {/* Completed segment */}
                      <circle
                        cx="120"
                        cy="120"
                        r={radius}
                        fill="none"
                        stroke="url(#completedGradient)"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${completedLength} ${circumference}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        filter="url(#shadow)"
                        className="transition-all duration-700 hover:stroke-[28]"
                      />
                      
                      {/* Pending segment */}
                      <circle
                        cx="120"
                        cy="120"
                        r={radius}
                        fill="none"
                        stroke="url(#pendingGradient)"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${pendingLength} ${circumference}`}
                        strokeDashoffset={-completedLength}
                        strokeLinecap="round"
                        filter="url(#shadow)"
                        className="transition-all duration-700 hover:stroke-[28]"
                      />
                      
                      {/* Processing segment */}
                      <circle
                        cx="120"
                        cy="120"
                        r={radius}
                        fill="none"
                        stroke="url(#processingGradient)"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${processingLength} ${circumference}`}
                        strokeDashoffset={-(completedLength + pendingLength)}
                        strokeLinecap="round"
                        filter="url(#shadow)"
                        className="transition-all duration-700 hover:stroke-[28]"
                      />
                    </g>
                  );
                })()}
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-gray-900">
                  {chartData.reduce((sum, data) => sum + data.value, 0)}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-bold">ጠቅላላ ሪከርዶች</div>
              </div>
            </div>
            
            {/* Legend and Statistics */}
            <div className="space-y-4">
              {(() => {
                const totalCompleted = chartData.reduce((sum, data) => sum + data.completed, 0);
                const totalPending = chartData.reduce((sum, data) => sum + data.pending, 0);
                const totalProcessing = chartData.reduce((sum, data) => sum + data.processing, 0);
                const grandTotal = totalCompleted + totalPending + totalProcessing;
                
                const stats = [
                  {
                    label: 'ተከፍላል',
                    value: totalCompleted,
                    percentage: ((totalCompleted / grandTotal) * 100).toFixed(1),
                    color: 'bg-blue-500',
                    textColor: 'text-blue-600',
                    bgColor: 'bg-blue-50'
                  },
                  {
                    label: 'ነቅ',
                    value: totalPending,
                    percentage: ((totalPending / grandTotal) * 100).toFixed(1),
                    color: 'bg-yellow-500',
                    textColor: 'text-yellow-600',
                    bgColor: 'bg-yellow-50'
                  },
                  {
                    label: 'ተጨማሪ',
                    value: totalProcessing,
                    percentage: ((totalProcessing / grandTotal) * 100).toFixed(1),
                    color: 'bg-purple-500',
                    textColor: 'text-purple-600',
                    bgColor: 'bg-purple-50'
                  }
                ];
                
                return stats.map((stat, index) => (
                  <div key={index} className={`${stat.bgColor} rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer group`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${stat.color} rounded-full`}></div>
                        <span className="text-sm font-bold text-gray-700">{stat.label}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${stat.textColor}`}>{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.percentage}%</div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-3 bg-white bg-opacity-50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${stat.color} transition-all duration-700 group-hover:animate-pulse`}
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ));
              })()}
              
              {/* Monthly Breakdown */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-700 mb-3">ወርሃዊ ትንተና</h4>
                <div className="space-y-2">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 font-bold">{data.month}</span>
                      <div className="flex space-x-2">
                        <span className="text-blue-600 font-bold">{data.completed}</span>
                        <span className="text-yellow-600 font-bold">{data.pending}</span>
                        <span className="text-purple-600 font-bold">{data.processing}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
