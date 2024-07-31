import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = ({ onClose }) => {
    const [formValues, setFormValues] = useState({
        mobileNumber: '',
        otp: '',
        firstName: '',
        lastName: '',
        email: '',
        discount: '',
        address: '',
        city: '',
        pincode: ''
    });
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [otpError, setOtpError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.firstName) newErrors.firstName = 'First name is required';
        if (!formValues.lastName) newErrors.lastName = 'Last name is required';
        if (!formValues.mobileNumber || !/^\d{10}$/.test(formValues.mobileNumber)) newErrors.mobileNumber = 'Valid mobile number is required';
        if (formValues.discount < 0 || formValues.discount > 100) newErrors.discount = 'Discount must be between 0 and 100';
        if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Valid email is required';
        if (!formValues.address) newErrors.address = 'Address is required';
        if (!formValues.city) newErrors.city = 'City is required';
        if (!formValues.pincode || !/^\d{6}$/.test(formValues.pincode)) newErrors.pincode = 'Valid pincode is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSendOtp = async () => {
        try {
            await axios.post('/api/send-otp', { mobileNumber: formValues.mobileNumber });
            setIsOtpSent(true);
            setOtpError('');
        } catch (error) {
            console.error('Failed to send OTP', error);
            setOtpError('Failed to send OTP');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('/api/verify-otp', { otp: formValues.otp });
            if (response.data.success) {
                setOtpError('');
                console.log('OTP verified');
            } else {
                setOtpError('Invalid OTP');
            }
        } catch (error) {
            console.error('OTP verification failed', error);
            setOtpError('OTP verification failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post('/api/add-customer', formValues);
            alert('Customer added successfully!');
            onClose();
        } catch (error) {
            console.error('Failed to add customer', error);
            alert('Failed to add customer');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 sm:mx-0">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Add New Customer</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <div className='flex items-center'>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                                className={`mt-1 block w-40 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="10-digit mobile number"
                            />
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send OTP
                            </button>
                        </div>
                        {errors.mobileNumber && <p className="text-red-500 text-sm mt-2">{errors.mobileNumber}</p>}
                    </div>
                    {isOtpSent && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                            <div className='flex items-center'>
                                <input
                                    type="text"
                                    name="otp"
                                    value={formValues.otp}
                                    onChange={handleChange}
                                    className={`mt-1 block w-24 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${otpError ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <button
                                    type="button"
                                    onClick={handleVerifyOtp}
                                    className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Verify OTP
                                </button>
                            </div>
                            {otpError && <p className="text-red-500 text-sm mt-2">{otpError}</p>}
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className='col-span-2'>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                        </div>
                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                            <input
                                type="number"
                                name="discount"
                                value={formValues.discount}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.discount ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.discount && <p className="text-red-500 text-sm mt-2">{errors.discount}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                            className={`                            mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formValues.city}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formValues.pincode}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 sm:text-sm ${errors.pincode ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.pincode && <p className="text-red-500 text-sm mt-2">{errors.pincode}</p>}
                        </div>
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

export default AddCustomer;

