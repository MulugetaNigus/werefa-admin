import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const DataTable = ({ data, loading = false }) => {
  const { t } = useTranslation();
  
  // State management
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [completedRows, setCompletedRows] = useState(new Set());
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [columnFilters, setColumnFilters] = useState({});

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1); // Reset to first page on search
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Row selection handlers
  const toggleRowSelection = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === filteredAndSortedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredAndSortedData.map(row => row.id)));
    }
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

  // Sorting handler
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Advanced filtering and sorting
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...data];

    // Apply search filter
    if (debouncedSearchTerm) {
      filtered = filtered.filter(row =>
        row.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        row.code.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        row.date.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filter === 'completed') {
      filtered = filtered.filter(row => completedRows.has(row.id));
    } else if (filter === 'pending') {
      filtered = filtered.filter(row => !completedRows.has(row.id));
    }

    // Apply column filters
    Object.entries(columnFilters).forEach(([column, value]) => {
      if (value) {
        filtered = filtered.filter(row => 
          row[column]?.toString().toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        
        if (sortConfig.key === 'id') {
          aValue = parseInt(aValue);
          bValue = parseInt(bValue);
        }
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, debouncedSearchTerm, filter, completedRows, columnFilters, sortConfig]);

  // Pagination calculations
  const totalItems = filteredAndSortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  // Bulk actions
  const handleBulkAction = (action) => {
    if (action === 'complete') {
      const newCompleted = new Set([...completedRows, ...selectedRows]);
      setCompletedRows(newCompleted);
      setSelectedRows(new Set());
    } else if (action === 'delete') {
      // In a real app, this would make an API call
      console.log('Delete selected rows:', Array.from(selectedRows));
      setSelectedRows(new Set());
    }
  };

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <span className="text-gray-400">↕️</span>;
    }
    return sortConfig.direction === 'asc' ? 
      <span className="text-blue-500">↑</span> : 
      <span className="text-blue-500">↓</span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-bold">
      {/* Search and Controls */}
      <div className="px-3 lg:px-4 xl:px-6 py-3 lg:py-4 bg-gray-50 border-b space-y-4">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('dataTable.search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64 font-bold"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Items per page */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">{t('dataTable.itemsPerPage')}:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-bold"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedRows.size > 0 && (
            <div className="flex items-center gap-3 p-3 bg-blue-50 border-l-4 border-blue-400">
              <span className="text-sm text-blue-700 font-bold">
                {t('dataTable.selectAll', { count: selectedRows.size })}
              </span>
              <button
                onClick={() => handleBulkAction('complete')}
                className="px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-bold"
              >
                {t('dataTable.markCompleted')}
              </button>
              <button
                onClick={handleBulkAction}
                className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-bold"
              >
                {t('dataTable.deleteSelected')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-600">{t('dataTable.loading')}</span>
          </div>
        ) : currentData.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">📄</div>
            <p className="text-gray-500">{filteredAndSortedData.length === 0 ? t('dataTable.noResults') : t('dataTable.noData')}</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-3 py-3 text-left border-r border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === currentData.length && currentData.length > 0}
                    onChange={toggleAllRows}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 font-bold"
                  />
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 border-r border-gray-200"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center space-x-1">
                    <span>{t('dataTable.id')}</span>
                    <SortIcon column="id" />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 border-r border-gray-200"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-1">
                    <span>{t('dataTable.fullName')}</span>
                    <SortIcon column="name" />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 border-r border-gray-200"
                  onClick={() => handleSort('code')}
                >
                  <div className="flex items-center space-x-1">
                    <span>{t('dataTable.residenceNumber')}</span>
                    <SortIcon column="code" />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 border-r border-gray-200"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center space-x-1">
                    <span>{t('dataTable.registrationDate')}</span>
                    <SortIcon column="date" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  {t('dataTable.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  {t('dataTable.payment')}
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  {t('dataTable.action')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-center border-r border-gray-200">
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
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 font-bold"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold border-r border-gray-200">
                    {row.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold border-r border-gray-200">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold border-r border-gray-200">
                    {row.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold border-r border-gray-200">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-bold border-r border-gray-200">
                    {row.status === 'ከአለተደር' ? (
                      <span className="inline-flex px-2 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-800">
                        {row.status}
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-bold border-r border-gray-200">
                    <span className="inline-flex px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">
                      {row.action}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <button
                      onClick={() => toggleRowCompletion(row.id)}
                      className="text-blue-600 hover:text-blue-800 font-bold"
                    >
                      {completedRows.has(row.id) ? t('dataTable.completed') : 'Complete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <span className="text-sm text-gray-700 font-bold">
              {t('dataTable.showing')} {startIndex + 1} {t('dataTable.to')} {Math.min(endIndex, totalItems)} {t('dataTable.of')} {totalItems} {t('dataTable.entries')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('dataTable.firstPage')}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('dataTable.previousPage')}
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, currentPage - 2) + i;
                if (pageNum > totalPages) return null;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 text-sm border rounded-md ${
                      pageNum === currentPage
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('dataTable.nextPage')}
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              {t('dataTable.lastPage')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;