import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../lib/apiRequest';
import { toast } from 'react-toastify';

const VirtualAuditQuestionnaire = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    buildingType: 'commercial',
    squareFootage: '',
    operatingHours: { start: '08:00', end: '18:00' },
    energyTariff: 'commercial',
    hvacSystem: { type: 'vav', age: 5 },
    lighting: { ledPercentage: 0 },
  });

  const sections = [
    {
      title: 'Building & Operational Details',
      fields: [
        {
          name: 'buildingType',
          label: 'Building Type',
          type: 'select',
          options: [
            { value: 'commercial', label: 'Commercial' },
            { value: 'residential', label: 'Residential' },
            { value: 'industrial', label: 'Industrial' }
          ]
        },
        {
          name: 'squareFootage',
          label: 'Total Square Footage (ft²)',
          type: 'number',
          min: 100,
          max: 1000000,
          validation: value => value >= 100 && value <= 1000000,
          errorMessage: 'Enter 100-1,000,000 square feet'
        },
        {
          name: 'operatingHours.start',
          label: 'Daily Opening Time',
          type: 'time'
        },
        {
          name: 'operatingHours.end',
          label: 'Daily Closing Time',
          type: 'time'
        },
        {
          name: 'energyTariff',
          label: 'Utility Rate Structure',
          type: 'select',
          options: [
            { value: 'commercial', label: 'Commercial Pricing' },
            { value: 'industrial', label: 'Industrial Demand Charge' }
          ]
        }
      ]
    },
    {
      title: 'HVAC, Lighting & Energy Details',
      fields: [
        {
          name: 'hvacSystem.type',
          label: 'HVAC System Type',
          type: 'select',
          options: [
            { value: 'vav', label: 'VAV System' },
            { value: 'cav', label: 'CAV System' },
            { value: 'vrf', label: 'VRF System' }
          ]
        },
        {
          name: 'hvacSystem.age',
          label: 'HVAC System Age (years)',
          type: 'number',
          min: 0,
        },
        {
          name: 'lighting.ledPercentage',
          label: 'LED Lighting Percentage',
          type: 'range',
          min: 0,
          max: 100
        }
      ]
    }
  ];

  const handleFieldChange = (field, value) => {
    const fieldPath = field.split('.');
    setFormData(prev => ({
      ...prev,
      [fieldPath[0]]: fieldPath.length > 1 
        ? { ...prev[fieldPath[0]], [fieldPath[1]]: value }
        : value
    }));
  };

  const validateCurrentStep = () => {
    const currentFields = sections[currentSection].fields;
    
    return currentFields.every(field => {
      const [parent, child] = field.name.split('.');
      const value = child ? formData[parent][child] : formData[parent];

      if (field.type === 'number') {
        const numValue = Number(value);
        if (field.min !== undefined && numValue < field.min) return false;
        if (field.max !== undefined && numValue > field.max) return false;
      }

      return field.validation ? field.validation(value) : !!value;
    });
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      toast.error('Please fill all fields correctly before proceeding');
      return;
    }
    setCurrentSection(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
      toast.error('Please complete all form fields');
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      return;
    }

    try {
      const response = await apiRequest.post('/audits', formData);

      if (response.data?.id) {
        navigate(`/audit-results/${response.data.id}`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Virtual Energy Audit</h1>

      <div className="flex mb-8">
        {sections.map((_, idx) => (
          <div key={idx} className={`h-2 flex-1 mx-1 rounded-full 
            ${idx <= currentSection ? 'bg-blue-500' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">
            {sections[currentSection].title}
          </h2>

          {sections[currentSection].fields.map((field, idx) => (
            <div key={idx} className="form-group">
              <label className="block text-sm font-medium mb-2">
                {field.label}
              </label>

              {field.type === 'number' ? (
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  min={field.min}
                  max={field.max}
                  value={formData[field.name.split('.')[0]][field.name.split('.')[1]] || ''}
                  onChange={(e) => handleFieldChange(field.name, Number(e.target.value))}
                  required
                />
              ) : field.type === 'select' ? (
                <select
                  className="w-full p-2 border rounded"
                  value={formData[field.name.split('.')[0]][field.name.split('.')[1]] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                >
                  {field.options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  className="w-full p-2 border rounded"
                  value={formData[field.name.split('.')[0]][field.name.split('.')[1]] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          {currentSection > 0 && (
            <button
              type="button"
              onClick={() => setCurrentSection(prev => prev - 1)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded"
            >
              Back
            </button>
          )}

          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-blue-500 text-white px-6 py-2 rounded ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded ml-auto"
            >
              Submit Audit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VirtualAuditQuestionnaire;