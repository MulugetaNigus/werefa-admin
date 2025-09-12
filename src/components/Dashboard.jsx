import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DataTable from './DataTable';
import Header from './Header';
import Analytics from './Analytics';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('መተወደሪ ዕድሳት');
  
  const mockData = [
    {
      id: 1,
      name: 'ታጣቅ ሙሉኮነ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    },
    {
      id: 2,
      name: 'አበበ ታደሰ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    },
    {
      id: 3,
      name: 'ታጣቅ ሙሉኮነ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    },
    {
      id: 4,
      name: 'ታጣቅ ሙሉኮነ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    },
    {
      id: 5,
      name: 'አበበ ታደሰ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    },
    {
      id: 6,
      name: 'ታጣቅ ሙሉኮነ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ከአለተደር',
      action: 'ተከፍላል'
    },
    {
      id: 7,
      name: 'ታጣቅ ሙሉኮነ አያለ',
      code: 'ወ 001-2015/09/17/3415',
      date: '16/2017',
      status: 'ነቅ',
      action: 'ተከፍላል'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-6">
            {activeTab === 'ዳሽቦርድ' ? (
              <Analytics />
            ) : (
              <DataTable data={mockData} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;