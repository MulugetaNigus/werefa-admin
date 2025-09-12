import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [completedRows, setCompletedRows] = useState(new Set());

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

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* First Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ተቁ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">መሰለ ስም</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ቁጥ መተወደሪ ቁ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">የሰፍመረብት ፋት</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ሞክገ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ክፍያ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ሂተ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{row.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <span className="mr-2">ወ</span>
                  {row.code}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.date}</td>
                <td className="px-4 py-3 text-sm">
                  {row.status === 'ከአለተደር' ? (
                    <span className="text-gray-600">{row.status}</span>
                  ) : (
                    <span className="text-blue-500">🗲</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    {row.action}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.id)}
                    onChange={() => toggleRowSelection(row.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section Divider */}
      <div className="px-6 py-4 bg-gray-50 border-y">
        <h3 className="text-lg font-medium text-gray-900">የተተተግንዴ</h3>
      </div>

      {/* Second Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ተቁ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">መሰለ ስም</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ቁጥ መተወደሪ ቁ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">የሰፍመረብት ፋት</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ሞክገ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ክፍያ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ሂተ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={`completed-${row.id}`} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{row.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <span className="mr-2">ወ</span>
                  {row.code}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.date}</td>
                <td className="px-4 py-3 text-sm">
                  {row.status === 'ከአለተደር' ? (
                    <span className="text-gray-600">{row.status}</span>
                  ) : (
                    <span className="text-blue-500">🗲</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    {row.action}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
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