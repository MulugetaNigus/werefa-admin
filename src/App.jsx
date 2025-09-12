import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // or 'form'

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <LoginForm />
      <button 
        onClick={() => setCurrentView('dashboard')}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default App;