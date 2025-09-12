import React, { useState } from 'react';
import AddResidentModal from './AddResidentModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-blue-500 text-lg">የመተወደሪ ዕድሳት ማስተዳደሪያ</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <div className="text-blue-500 text-sm font-medium">
            <span className="text-blue-600">አማ</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-500">Eng</span>
          </div>
          
          {/* User Avatar */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">ወራ</span>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ይፈሉ..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">የዓመ</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>▼</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
          >
            <span className="mr-2">👤</span>
            አዲስ ሞካክገ
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
            <span className="mr-2">🖨</span>
            ኛስተ
          </button>
        </div>
      </div>
      
      {/* Add Resident Modal */}
      <AddResidentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default Header;