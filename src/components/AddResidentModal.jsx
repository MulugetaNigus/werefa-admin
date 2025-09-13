import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddResidentModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: 'ወንድ',
    identificationId: '',
    address: '',
    addressType: 'መተወደሪ ዕድሳት',
    selectedDate: new Date()
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 lg:p-6 w-full max-w-sm lg:max-w-md xl:max-w-lg mx-4">
        {/* Header */}
        <div className="px-3 lg:px-6 py-3 lg:py-4">
          <h2 className="text-lg lg:text-xl font-bold text-black text-center mb-2">{t('modal.title')}</h2>
          <p className="text-xs lg:text-sm text-red-600 text-center">
            {t('modal.subtitle')}
          </p>
        </div>

        {/* Form Content */}
        <div className="px-3 lg:px-6 pb-4 lg:pb-6">
          {/* Name and Phone Fields - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
            <div>
              <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">{t('modal.fullName')}</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">{t('modal.phoneNumber')}</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Gender Selection and ID Field - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
            <div>
              <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-2">{t('modal.gender')}</label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t('modal.male')}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t('modal.female')}</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2">
                {t('modal.identificationNumber')}
              </label>
              <input
                type="text"
                value={formData.identificationId}
                onChange={(e) => handleInputChange('identificationId', e.target.value)}
                className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address Field */}
          {/* <div className="mb-3 lg:mb-4">
            <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2">
              {t('modal.residenceAddress')}
            </label>
            <input
              type="text"
              value={formData.residenceAddress}
              onChange={(e) => handleInputChange('residenceAddress', e.target.value)}
              className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* Service Type and Date - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
            <div>
              <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2">
                {t('modal.serviceType')}
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('modal.serviceType')}</option>
                <option value="residence">{t('modal.newResidence')}</option>
                <option value="renewal">{t('modal.residenceRenewal')}</option>
                <option value="certificate">{t('modal.deathCertificate')}</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2">
                {t('modal.selectDate')}
              </label>
              <input
                type="date"
                value={formData.selectedDate.toISOString().split('T')[0]}
                onChange={(e) => handleInputChange('selectedDate', new Date(e.target.value))}
                className="w-full px-2 lg:px-3 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={onClose}
              className="px-3 lg:px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 lg:px-6 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {t('modal.register')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResidentModal;
