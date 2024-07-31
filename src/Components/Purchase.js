import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import AddVendor from './AddVendor';
import FileUpload from './FileUpload';

const PurchaseForm = () => {
    const [vendors, setVendors] = useState([]);
    const [filteredVendors, setFilteredVendors] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showAddVendor, setShowAddVendor] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const modalRef = useRef(null);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [uploadedData, setUploadedData] = useState([]);

    useEffect(() => {
        const dummyVendors = [
            { name: "Vendor 1", gstin: "GSTIN1", location: "Location 1" },
            { name: "Vendor 2", gstin: "GSTIN2", location: "Location 2" },
            { name: "Vendor 3", gstin: "GSTIN3", location: "Location 3" },
            { name: "Vendor 4", gstin: "GSTIN4", location: "Location 4" },
            { name: "Vendor 5", gstin: "GSTIN5", location: "Location 5" },
            // Add more vendors as needed
        ];
        setVendors(dummyVendors);
        setFilteredVendors(dummyVendors);
        // Fetch data from the API
        const fetchVendors = async () => {
            try {
                const response = await fetch('https://api.example.com/vendors'); // Replace with your API endpoint
                const data = await response.json();
                setVendors(data);
                setFilteredVendors(data);
            } catch (error) {
                console.error('Error fetching vendor data:', error);
            }
        };
        fetchVendors();
    }, []);

    useEffect(() => {
        // Close dropdown and modal when clicking outside
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !inputRef.current.contains(event.target) &&
                modalRef.current && 
                !modalRef.current.contains(event.target)
            ) {
                setShowMore(false);
                setShowAddVendor(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setShowMore(true);

        if (value === "") {
            setFilteredVendors(vendors);
        } else {
            setFilteredVendors(
                vendors.filter((vendor) =>
                    vendor.name.toLowerCase().includes(value.toLowerCase()) ||
                    vendor.gstin.toLowerCase().includes(value.toLowerCase()) ||
                    vendor.location.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    const handleVendorClick = (vendor) => {
        setSearchTerm(vendor.name);
        setShowMore(false);
    };

    return (
        <>
        <Layout/>
        <div className="p-4">
            <div className="flex items-center justify-between mb-2 pt-16">
                <div className="text-sm flex breadcrumbs">
                    <ul className="flex space-x-2">
                        <li><a href="#" className="flex text-sky-600 font-bold text-xl">Purchase</a></li>
                        <li className="text-cyan-700 font-bold text-xl"> &gt; New</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 w-1/4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center mx-2 right-3">
                        <select className="mr-2 border h-8 bg-gray-100 border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Owner</option>
                            <option>Option 1</option>  
                            <option>Option 2</option>
                        </select>
                        <select className="mr-2 flex border h-8 w-[80px] bg-gray-100 border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>CREDIT</option>
                            <option>UPI</option>
                            <option>CASH</option>
                        </select>
                    </div>
                    <button className="btn md:ml-28 bg-sky-400 py-0.5 text-white w-20 h-8 items-center rounded-lg shadow hover:bg-sky-700 transition duration-200 ease-in-out">
                        Save
                    </button>
                </div>
            </div>

            <div className="  rounded-lg shadow-md shadow-slate-200 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-0 ">
                    <div className="col-span-2   flex items-center shadow-md relative">
                        <div className="w-full">
                            <label className=" flex text-sm font-medium text-gray-700 px-3">Vendor</label>
                            <input
                                type="text"
                                placeholder="Search Vendor By Name or GSTIN"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                ref={inputRef}
                                className="mt-1 block w-full px-3 py-2 rounded-md bg-transparent focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200 ease-in-out"
                            />
                            {showMore && (
                                <div ref={dropdownRef} className="absolute left-0 bg-transparent border rounded shadow-lg p-1 overflow-y-auto max-h-48 w-full mt-1 z-10">
                                    {filteredVendors.map((vendor, index) => (
                                        <div key={index} className="p-2 border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleVendorClick(vendor)}>
                                            <p className="font-semibold">{vendor.name}</p>
                                            <p className="text-sm text-gray-600">{vendor.gstin} | {vendor.location}</p>
                                        </div>
                                    ))}
                                    <button onClick={() => setShowAddVendor(true)} className="w-full text-blue-500 p-2 hover:bg-gray-100">Add New Vendor</button>
                                </div>
                            )}
                        </div>
                        <button className="ml-2 mt-4 mr-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition duration-200 ease-in-out px-2 py-1">Emails</button>
                    </div>
                    <div className="col-span-1 flex items-center shadow-md">
                        <div className="w-full">
                            <label className="flex text-sm font-medium text-gray-700 px-3">Order No.</label>
                            <input
                                type="text"
                                placeholder="Order No."
                                className="mt-1 block w-full px-3 py-2 bg-transparent  rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200 ease-in-out"
                            />
                        </div>
                        <button className="ml-2 mt-4 mr-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition duration-200 ease-in-out px-2 py-1">Fetch</button>
                    </div>
                    <div className="col-span-1 shadow-md">
                        <label className="flex text-sm font-medium text-gray-700 px-3">Bill Date</label>
                        <div className="col-span flex items-center">
                            <input
                                type="date"
                                className="mt-1 block w-full md:w-auto px-3 py-2 bg-transparent focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 shadow-md">
                        <label className=" flex text-sm font-medium text-gray-700 px-3">Due Date</label>
                        <div className="col-span flex items-center">
                            <input
                                type="date"
                                className="mt-1 block w-full px-3 py-2 md:w-auto bg-transparent  rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mb-4 mt-1 ">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">                        
                        <label className="flex items-center cursor-pointer ">
                                    <span className="mr-1 mt-2 text-gray-500 ">LIFA</span>
                                    <div className="relative mt-2">
                                        <input
                                            type="checkbox"
                                            checked={isSwitchOn}
                                            onChange={() => setIsSwitchOn(prev => !prev)}
                                            className="sr-only"
                                        />
                                        <div className={` mt-1block bg-gray-50 w-6 h-3  border-sky-600 rounded-full ${isSwitchOn ? 'bg-cyan-900' : 'bg-cyan-900'}`} />
                                        <div
                                            className={`absolute left-0 top-0 bg-sky-500 w-3 h-3 rounded-full transition-transform ${isSwitchOn ? 'transform translate-x-full' : ''}`}
                                        />
                                    </div>
                                    <span className="ml-1 mt-2 text-gray-500 ">LILA</span>
                                </label></th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PTR</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty.</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Free</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sch. Amt</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disc%</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GST%</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-transparent divide-y divide-gray-200">
                        <tr>
                        <td colSpan="12" className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                               
                               <input type="text" className="w-full border-none h-8 px-4 rounded-full border-gray-300 focus:outline-none focus:bg-slate-200" 
                               placeholder="'Search item here. (e.g 'gly' or 'g+99' or '8908009149206' or 'c,paracetamol')">
                                  </input>
                               </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* File Upload Section */}
            <div className=" inset-0 flex items-center justify-center ">
            <div className="mt-8 mb-4">
                <h2 className="text-lg font-semibold mb-2"></h2>
                <FileUpload onDataLoaded={(data) => setUploadedData(data)} />
            </div>
            </div>

            {/* Render Uploaded Data Table */}
            {uploadedData.length > 0 && (
                <div className="overflow-x-auto mb-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {uploadedData[0] && Object.keys(uploadedData[0]).map((key) => (
                                    <th
                                        key={key}
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-transparent divide-y divide-gray-200">
                            {uploadedData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td
                                            key={i}
                                            className="px-6 py-3 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {showAddVendor && (
                <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <AddVendor onClose={() => setShowAddVendor(false)} />
                </div>
            )}
        </div>
        </>
    );
};

export default PurchaseForm;
