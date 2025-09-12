import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);
    // Navigate to dashboard after login
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-md">
      {/* Language Toggle */}
      <div className="flex justify-end mb-8">
        <LanguageToggle />
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        {/* Location Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 80 80" 
              className="text-teal-400"
            >
              <path
                fill="currentColor"
                d="M40 8C28.08 8 18 18.08 18 30c0 18 22 34 22 34s22-16 22-34c0-11.92-10.08-22-22-22z"
              />
              <circle cx="40" cy="30" r="10" fill="white" />
              <circle cx="40" cy="30" r="6" fill="#06b6d4" />
            </svg>
            {/* Clock icon inside location pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#06b6d4" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('login.title')}</h1>
          <p className="text-gray-600 text-sm">{t('login.subtitle')}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {t('login.username')}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {t('login.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {t('login.loginButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;