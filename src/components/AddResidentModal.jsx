import React, { useState } from 'react';

const AddResidentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: 'ወንድ',
    identificationId: '',
    address: '',
    addressType: 'መተወደሪ ዕድሳት'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
        {/* Header */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-black text-center mb-2">አዲስ ወረ4 ይመዝግቡ</h2>
          <p className="text-sm text-gray-600 text-center">
            ልክ ይሄ አዲስ ወረ4 ለመዝግብ የሚለገኝት ክፍል ወረ4 አይቀበላም
          </p>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          {/* Name and Phone Fields - Side by Side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                ሙሉ ስም
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                ስልክ ቁጥር
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Gender Selection and ID Field - Side by Side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                ፆታ
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="ወንድ"
                    checked={formData.gender === 'ወንድ'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2 w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm">ወንድ</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="ሴት"
                    checked={formData.gender === 'ሴት'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2 w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm">ሴት</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                የመተወደሪ ቁጥር
              </label>
              <input
                type="text"
                value={formData.identificationId}
                onChange={(e) => handleInputChange('identificationId', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              የመተወደሪ ቦታ
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              አገልግሎት
            </label>
            <select
              value={formData.addressType}
              onChange={(e) => handleInputChange('addressType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="መተወደሪ ዕድሳት">መተወደሪ ዕድሳት</option>
              <option value="አዲስ መተወደሪ">አዲስ መተወደሪ</option>
              <option value="የሞተ ሰርፍት">የሞተ ሰርፍት</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              የወረ4 ቀን
            </label>
            <div className="grid grid-cols-5 gap-2">
              <button className="bg-blue-500 text-white px-4 py-3 rounded text-sm font-medium">
                የዛሬ
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-3 rounded text-sm">
                12
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-3 rounded text-sm">
                13
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-3 rounded text-sm">
                14
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-3 rounded text-sm">
                15
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              መዝግብ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResidentModal;
