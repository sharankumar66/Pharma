import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests

const AddFamilyMember = ({ onClose }) => {
    const [selectedRelation, setSelectedRelation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [discount, setDiscount] = useState('');
    const [errors, setErrors] = useState({});

    const handleRelationChange = (e) => {
        const { value } = e.target;
        setSelectedRelation(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!selectedRelation) newErrors.selectedRelation = 'Relation is required';
        if (!firstName) newErrors.firstName = 'First name is required';
        if (!lastName) newErrors.lastName = 'Last name is required';
        if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) newErrors.mobileNumber = 'Valid mobile number is required';
        if (discount < 0 || discount > 100) newErrors.discount = 'Discount must be between 0 and 100';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const formData = {
                selectedRelation,
                firstName,
                lastName,
                mobileNumber,
                discount
            };
            await axios.post('/api/add-family-member', formData);
            alert('Family member added successfully!');
            onClose();
        } catch (error) {
            console.error('Form submission failed', error);
            alert('Failed to add family member');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 sm:mx-0">  
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Add Family Member</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Relation<span className='text-red-500'> *</span></label>
                        <div className="mt-2 space-y-2">
                            {['Brother', 'Sister', 'Father', 'Mother'].map((relation) => (
                                <div key={relation} className="flex items-center">
                                    <input
                                        type="radio"
                                        value={relation}
                                        checked={selectedRelation === relation}
                                        onChange={handleRelationChange}
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-700">{relation}</label>
                                </div>
                            ))}
                        </div>
                        {errors.selectedRelation && <p className="text-red-500 text-sm">{errors.selectedRelation}</p>}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name<span className='text-red-500'> *</span></label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name<span className='text-red-500'> *</span></label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number<span className='text-red-500'> *</span></label>
                        <input
                            type="text"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="10-digit mobile number"
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                        <input
                            type="number"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.discount ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.discount && <p className="text-red-500 text-sm">{errors.discount}</p>}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFamilyMember;
