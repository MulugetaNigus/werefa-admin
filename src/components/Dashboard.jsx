import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DataTable from './DataTable';
import Analytics from './Analytics';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('መተወደሪ ዕድሳት');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Auto-collapse sidebar on mobile screens
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // md breakpoint
        setIsSidebarCollapsed(true);
      }
    };
    
    // Check on initial load
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Mock data for different sections
  const mockDataSets = {
    'መተወደሪ ዕድሳት': [
      {
        id: 1,
        name: 'ታጣቅ ሙሉኮነ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'አበበ ታደሰ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ታጣቅ ሙሉኮነ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ታጣቅ ሙሉኮነ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 5,
        name: 'አበበ ታደሰ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 6,
        name: 'ታጣቅ ሙሉኮነ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 7,
        name: 'ታጣቅ ሙሉኮነ አያለ',
        code: 'ወ 001-2015/09/17/3415',
        date: '16/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'አዲስ መተወደሪ': [
      {
        id: 1,
        name: 'ሰላማዊት ተስፋዬ ገብሬ',
        code: 'ወ 002-2015/09/18/4521',
        date: '17/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ዳንኤል አለማየሁ ወልደ',
        code: 'ወ 002-2015/09/18/4522',
        date: '17/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ብርሃን ተክሌ መንግስቱ',
        code: 'ወ 002-2015/09/18/4523',
        date: '17/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ፍቅርቲ ሃይሌ ሰለሞን',
        code: 'ወ 002-2015/09/18/4524',
        date: '17/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 5,
        name: 'ሚካኤል ዮሐንስ አበበ',
        code: 'ወ 002-2015/09/18/4525',
        date: '17/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'የሞተ ሰርፍት': [
      {
        id: 1,
        name: 'አስቴር ወንድሙ ታደሰ',
        code: 'ወ 003-2015/09/19/5631',
        date: '18/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ገብሬ ክርስቶስ ሙሉኮነ',
        code: 'ወ 003-2015/09/19/5632',
        date: '18/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ሄኖክ ተሾመ አለማየሁ',
        code: 'ወ 003-2015/09/19/5633',
        date: '18/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ወይዘሮ ዘይነብ አሕመድ',
        code: 'ወ 003-2015/09/19/5634',
        date: '18/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'ልደት ክርሰ': [
      {
        id: 1,
        name: 'ሳራ ዮሐንስ ተክሌ',
        code: 'ወ 004-2015/09/20/6741',
        date: '19/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ዮሴፍ ሃይሌ ገብሬ',
        code: 'ወ 004-2015/09/20/6742',
        date: '19/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ሩት አበበ ወልደ',
        code: 'ወ 004-2015/09/20/6743',
        date: '19/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ሳሙኤል ተስፋዬ ሙሉኮነ',
        code: 'ወ 004-2015/09/20/6744',
        date: '19/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 5,
        name: 'ሊዲያ ክርስቶስ አለማየሁ',
        code: 'ወ 004-2015/09/20/6745',
        date: '19/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 6,
        name: 'እስራኤል ሃይሌ ታደሰ',
        code: 'ወ 004-2015/09/20/6746',
        date: '19/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'የጋበን ሰርፍት': [
      {
        id: 1,
        name: 'ሄለን ወንድሙ ገብሬ',
        code: 'ወ 005-2015/09/21/7851',
        date: '20/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ዳዊት ተሾመ ክርስቶስ',
        code: 'ወ 005-2015/09/21/7852',
        date: '20/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ሪቤቃ አሕመድ ሙሉኮነ',
        code: 'ወ 005-2015/09/21/7853',
        date: '20/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ናትናኤል ዮሐንስ ወልደ',
        code: 'ወ 005-2015/09/21/7854',
        date: '20/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'የአተከፍግፅ ወረልዎት': [
      {
        id: 1,
        name: 'ማርታ ተስፋዬ አለማየሁ',
        code: 'ወ 006-2015/09/22/8961',
        date: '21/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ሰሎሞን ሃይሌ ታደሰ',
        code: 'ወ 006-2015/09/22/8962',
        date: '21/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ደብራ ወንድሙ ገብሬ',
        code: 'ወ 006-2015/09/22/8963',
        date: '21/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'ገነት ክርስቶስ ሙሉኮነ',
        code: 'ወ 006-2015/09/22/8964',
        date: '21/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 5,
        name: 'ኤልያስ ተሾመ ወልደ',
        code: 'ወ 006-2015/09/22/8965',
        date: '21/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ],
    'ማስተከክፅዎት': [
      {
        id: 1,
        name: 'ራሄል አሕመድ አለማየሁ',
        code: 'ወ 007-2015/09/23/9071',
        date: '22/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 2,
        name: 'ሙሴ ዮሐንስ ታደሰ',
        code: 'ወ 007-2015/09/23/9072',
        date: '22/2017',
        status: 'ከአስተዳደር',
        action: 'ተከፍላል'
      },
      {
        id: 3,
        name: 'ሀና ተስፋዬ ገብሬ',
        code: 'ወ 007-2015/09/23/9073',
        date: '22/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 4,
        name: 'አብርሃም ሃይሌ ሙሉኮነ',
        code: 'ወ 007-2015/09/23/9074',
        date: '22/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 5,
        name: 'ሳባ ወንድሙ ክርስቶስ',
        code: 'ወ 007-2015/09/23/9075',
        date: '22/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      },
      {
        id: 6,
        name: 'ዮናታን ተሾመ ወልደ',
        code: 'ወ 007-2015/09/23/9076',
        date: '22/2017',
        status: 'Telebirr',
        action: 'ተከፍላል'
      }
    ]
  };

  // Get current data based on active tab
  const getCurrentData = () => {
    return mockDataSets[activeTab] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 font-bold">
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <div className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed 
            ? 'ml-16' 
            : 'ml-48 sm:ml-52 md:ml-56 lg:ml-60 xl:ml-64 2xl:ml-72'
        }`}>
          {activeTab !== 'ዳሽቦርድ' && <Header activeTab={activeTab} />}
          <main className="p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10">
            {activeTab === 'ዳሽቦርድ' ? (
              <Analytics />
            ) : (
              <DataTable data={getCurrentData()} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;