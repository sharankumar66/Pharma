import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import Calender from '../Icons/Calender.png';
import User from "../Icons/User.png";
import Doctor from "../Icons/Doctor.png"
import AddCustomer from './AddCustomer';
import AddFamilyMember from './AddFamilyMember';
import FileUpload from './FileUpload';

const Sales = () => {
    const [customers, setCustomers] = useState([]);
    const [members, setMembers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [filteredMember, setFilteredMember] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showMoreMember, setShowMoreMember] = useState(false);
    const [showAddCustomer, setShowAddCustomer] = useState(false);
    const [showAddFamily, setShowAddFamily] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchMember, setSearchMember] = useState("");
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const modalRef = useRef(null);

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [uploadedData, setUploadedData] = useState([]);

    useEffect(() => {
        const dummyCustomers = [
            { name: "customer 1", gstin: "GSTIN1", location: "Location 1" },
            { name: "customer 2", gstin: "GSTIN2", location: "Location 2" },
            { name: "customer 3", gstin: "GSTIN3", location: "Location 3" },
            { name: "customer 4", gstin: "GSTIN4", location: "Location 4" },
            { name: "customer 5", gstin: "GSTIN5", location: "Location 5" },
            // Add more customers as needed
        ];
        setCustomers(dummyCustomers);
        setFilteredCustomers(dummyCustomers);
        const members = [{ name: "member 1", number: "8125555484", realtion: " Father" }]
        setMembers(members);
        setFilteredMember(members);
        // Fetch data from the API
        const fetchVendors = async () => {
            try {
                const response = await fetch('https://api.example.com/customers'); // Replace with your API endpoint
                const data = await response.json();
                setCustomers(data);
                setFilteredCustomers(data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };
        fetchVendors();
        const fetchMembers = async () => {
            try {
                const response = await fetch('https://api.example.com/customers'); // Replace with your API endpoint
                const data = await response.json();
                setMembers(data);
                setFilteredMember(data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };
        fetchMembers();
    }, []);

    useEffect(() => {
        // Close dropdown and modal when clicking outside
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowMore(false);
                // setShowAddCustomer(false);
                setShowMoreMember(false);
                // setShowAddFamily(false);
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
            setFilteredCustomers(customers);
        } else {
            setFilteredCustomers(
                customers.filter((customer) =>
                    customer.name.toLowerCase().includes(value.toLowerCase()) ||
                    customer.gstin.toLowerCase().includes(value.toLowerCase()) ||
                    customer.location.toLowerCase().includes(value.toLowerCase())
                )
            );
        }

    };

    const handleMemberSearchChange = (event) => {
        const value = event.target.value;
        setSearchMember(value);
        setShowMoreMember(true);

        if (value === "") {
            setFilteredMember(members);
        } else {
            setFilteredCustomers(
                members.filter((member) =>
                    member.name.toLowerCase().includes(value.toLowerCase()) ||
                    member.number.toLowerCase().includes(value.toLowerCase()) ||
                    member.realtion.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };


    const handleVendorClick = (customer) => {
        setSearchTerm(customer.name);
        setShowMore(false);
    };


    const handleMemberClick = (member) => {
        setSearchMember(member.name);
        setShowMoreMember(false);
    };


    const today = new Date().toISOString().split('T')[0];

    return (
        <>
        <Layout />
        <div className="p-4 ">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 pt-8">
                <div className="text-sm flex breadcrumbs">
                    <ul className="flex space-x-2">
                        <li>
                            <a href="#" className="text-sky-600 font-bold md:text-xl hover:underline">Sales</a>
                        </li>
                        <li className="text-cyan-700 font-bold md:text-xl">
                            &gt; New
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <select className="border h-8 bg-gray-100  border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm p-1 rounded-md">
                            <option>Owner</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                        <select className="border h-8 bg-gray-100 border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm p-1 rounded-md">
                            <option>Credit</option>
                            <option>UPI</option>
                            <option>CASH</option>
                        </select>
                    </div>
                    <button className="bg-cyan-600 text-white w-full md:w-auto h-8 px-4 rounded-lg shadow hover:bg-cyan-700 transition duration-200 ease-in-out">
                        Save
                    </button>
                </div>


            </div>
            <div className="bg-white bg-opacity-30 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-8  bg-opacity-70 border  border-gray-300">
                    <div className="col-span-1 flex flex-col bg-opacity-70 border pl-3 border-gray-300 bg-slate-200">
                        <span className="absolute inset-y-0 md:left-2 flex items-center top-36 md:pl-8  h-10 md:mt-0 mt-24" >
                            {/* <?xml version="1.0" encoding="UTF-8"?> */}
                            <div className="  bg-center bg-cover bg-no-repeat  w-7 h-7" style={{ backgroundImage: `url(${Calender})` }}></div>
                        </span>
                        <label className=" flex text-sm font-medium  text-gray-700 mb-0 py-1 md:pl-10 p-10">Bill Date</label>
                        <input
                            type="date"
                            value={today}
                            readOnly
                            className="w-auto pl-10 md:pl-10 py- bg-transparent bg-opacity-70  focus:outline-none   transition duration-200 ease-in-out"
                        />
                    </div>

                    <div className="col-span-2 flex  flex-row bg-opacity-70 border border-gray-300 p-">
                        <span className=" inset-y-0 md:left-0 flex items-center top-36 pl-3  h-10 md:mt-2 mt" >
                            {/* <?xml version="1.0" encoding="UTF-8"?> */}
                            <div className="  bg-center bg-cover bg-no-repeat  w-7 h-7" style={{ backgroundImage: `url(${User})` }}></div>
                        </span>
                        <span className="flex-col">
                            <label className=" flex text-sm font-medium text-gray-700 mb-0 py-1 px-3">Customer Mobile/Name</label>
                            <input
                                type="text"
                                placeholder="Enter Customer Mobile/Name"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                ref={inputRef}
                                className="w-full px-3 pt-0 bg-white bg-opacity-70  focus:outline-none   transition duration-200 ease-in-out"
                            /></span>
                        {showMore && (
                            <div ref={dropdownRef} className="absolute left- bg-white border rounded shadow-lg p-1 overflow-y-auto max-h-48 md:w-72 mt-14 ml-14 z-10">
                                {filteredCustomers.map((customer, index) => (
                                    <div key={index} className="p-2 border-b hover:bg-gray-100 rounded cursor-pointer" onClick={() => handleVendorClick(customer)}>
                                        <p className="font-semibold">{customer.name}</p>
                                        <p className="text-sm text-gray-600"> | {customer.location}</p>
                                    </div>
                                ))}
                                <button onClick={() => setShowAddCustomer(true)} className="w-full text-blue-500 p-2 hover:bg-gray-100">Add New customer</button>
                            </div>
                        )}
                    </div>

                    <div className="col-span-1 flex flex-col bg-opacity-70 bg-slate-200 border border-gray-300">
                        <span className="flex-col">
                            <label className=" flex text-sm font-medium text-gray-700 mb-0 py-1 px-3">Billing for</label>
                            <input
                                type="text"
                                placeholder="Enter "
                                value={searchMember}
                                onChange={handleMemberSearchChange}
                                ref={inputRef}
                                className="w-full px-3 pt-0 bg-transparent bg-opacity-70  focus:outline-none   transition duration-200 ease-in-out"
                            /></span>
                        {showMoreMember && (
                            <div ref={dropdownRef} className="absolute left- bg-white border rounded shadow-lg p-1 overflow-y-auto max-h-48 md:w-72 mt-14 ml-14 z-10">
                                {filteredMember.map((member, index) => (
                                    <div key={index} className="p-2 border-b hover:bg-gray-100 rounded cursor-pointer" onClick={() => handleMemberClick(member)}>
                                        <p className="font-semibold">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.realtion} | {member.number}</p>
                                    </div>
                                ))}
                                <button onClick={() => setShowAddFamily(true)} className="w-full text-blue-500 p-2 hover:bg-gray-100">Add New customer</button>
                            </div>
                        )}
                    </div>

                    <div className="col-span-2 flex flex-row bg-opacity-70 border border-gray-300">
                        <span className=" inset-y-0 md:left-0 flex items-center top-36 pl-3  h-10 md:mt-2 mt" >
                            {/* <?xml version="1.0" encoding="UTF-8"?> */}
                            <div className="  bg-center bg-cover bg-no-repeat  w-7 h-7" style={{ backgroundImage: `url(${Doctor})` }}></div>
                        </span>
                        <span className="flex-col">
                            <label className=" flex text-sm font-medium text-gray-700 mb-0 py-1 px-3">Doctor</label>
                            <input
                                type="text"
                                placeholder="Enter Doctor name..."
                                className="w-full px-3 py-  border-gray-300 rounded-lg  focus:outline-none   transition duration-200 ease-in-out"
                            />
                        </span>

                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mb-4">
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
                                        <div className={` block bg-gray-50 w-6 h-3  border-sky-600 rounded-full ${isSwitchOn ? 'bg-sky-700' : 'bg-sky-700'}`} />
                                        <div
                                            className={`absolute left-0 top-0 bg-blue-200 w-3 h-3 rounded-full transition-transform ${isSwitchOn ? 'transform translate-x-full' : ''}`}
                                        />
                                    </div>
                                    <span className="ml-1 mt-2 text-gray-500 ">LILA</span>
                                </label></th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit/Pack</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loc</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty.</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disc%</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">D.price</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GST%</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td colSpan="12" className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">

                                <input type="text" className="w-full border-none h-8 p-3 rounded-full border-gray-300 focus:outline-none focus:bg-slate-200"
                                    placeholder="'Search item here. (e.g 'gly' or 'g+99' or '8908009149206' or 'c,paracetamol')">
                                </input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {showAddCustomer && (
                <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <AddCustomer onClose={() => setShowAddCustomer(false)} />
                </div>
            )}
            {showAddFamily && (
                <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <AddFamilyMember onClose={() => setShowAddFamily(false)} />
                </div>
            )}
        </div>
       </>
    );
};

export default Sales;
