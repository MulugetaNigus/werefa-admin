import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'ዳሽቦርድ', label: 'ዳሽቦርድ', active: false },
    { id: 'መተወደሪ ዕድሳት', label: 'መተወደሪ ዕድሳት', active: true },
    { id: 'አዲስ መተወደሪ', label: 'አዲስ መተወደሪ', active: false },
    { id: 'የሞተ ሰርፍት', label: 'የሞተ ሰርፍት', active: false },
    { id: 'ልደት ክርሰ', label: 'ልደት ክርሰ', active: false },
    { id: 'የጋበን ሰርፍት', label: 'የጋበን ሰርፍት', active: false },
    { id: 'የአተከፍግፅ ወረልዎት', label: 'የአተከፍግፅ ወረልዎት', active: false },
    { id: 'ማስተከክፅዎት', label: 'ማስተከክፅዎት', active: false }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">ወረ4</h2>
        <p className="text-gray-600 text-sm mb-8">ዲቪርሴ</p>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                item.id === activeTab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-8">
          <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg text-sm hover:bg-blue-600 flex items-center justify-center">
            <span className="mr-2">📋</span>
            ይዉጡ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;