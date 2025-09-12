import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DataTable = ({ data }) => {
  const { t } = useTranslation();
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [completedRows, setCompletedRows] = useState(new Set());
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  const toggleRowSelection = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleRowCompletion = (id) => {
    const newCompleted = new Set(completedRows);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedRows(newCompleted);
  };

  // Filter data based on current filter
  const filteredData = data.filter(row => {
    if (filter === 'completed') {
      return completedRows.has(row.id);
    } else if (filter === 'pending') {
      return !completedRows.has(row.id);
    }
    return true; // 'all' - show everything
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Filter Buttons */}
      <div className="px-3 lg:px-4 xl:px-6 py-3 lg:py-4 bg-gray-50 border-b">
        <div className="flex flex-wrap gap-2 lg:gap-3 xl:gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {t('dataTable.all')}
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {t('dataTable.pending')}
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {t('dataTable.completed')}
          </button>
        </div>
      </div>

      {/* Single Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.id')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.fullName')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.residenceNumber')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.registrationDate')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.status')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.payment')}</th>
              <th className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left text-xs lg:text-xs xl:text-xs font-medium text-gray-500 uppercase">{t('dataTable.action')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-900">{row.id}</td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-900">{row.name}</td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-600">
                  <span className="mr-1 lg:mr-2">ወ</span>
                  {row.code}
                </td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-600">{row.date}</td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm">
                  {row.status === 'ከአለተደር' ? (
                    <span className="text-gray-600">{row.status}</span>
                  ) : (
                    <span className="text-blue-500">🗲</span>
                  )}
                </td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm">
                  <span className="bg-blue-500 text-white px-2 lg:px-3 py-1 rounded text-xs">
                    {row.action}
                  </span>
                </td>
                <td className="px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-xs lg:text-sm">
                  {completedRows.has(row.id) ? (
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={() => toggleRowSelection(row.id)}
                      className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;