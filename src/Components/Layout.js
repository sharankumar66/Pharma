import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'tailwindcss/tailwind.css';
import Sales from './Sales';
import PurchaseForm from './Purchase';

const HeaderComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full z-10 fixed bg-gradient-to-r from-sky-800 to-sky-400 shadow-md text-white h-fit md:h-0 p-4 md:p-3 font-[calibri] text-xl flex justify-between items-center animate-fadeIn">

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Logo with button functionality */}
        <a href="#" className="text-white hover:font-bold flex">
          <i className="bi bi-house-door-fill"></i>
        </a>

        {/* Menu items */}
        <div className={`flex-col py-2 px-10  items-start md:flex-row md:flex left-0 h-auto md:items-center md:space-x-8 ${showMenu ? 'flex' : 'hidden'} absolute top-16 left-0 w-full ${showMenu ? 'bg-gradient-to-r from-sky-800 to-sky-400' : 'md:bg-transparent'} md:w-auto md:top-0`}>

          {/* Dropdown 1 */}
          <div className="relative dropdown">
            <button className="text-white hover: dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu bg-gray-200 text-white mt-1  rounded-lg shadow-lg" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item  rounded" href='Sales'>New Sales</a></li>
              <li><a className="dropdown-item  rounded" href="#">Sales Return</a></li>
              <li><a className="dropdown-item  rounded" href="#">View Sales</a></li>
            </ul>
          </div>

          {/* Dropdown 2 */}
          <div className="relative dropdown">
            <button className="text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Purchase
            </button>
            <ul className="dropdown-menu bg-gray-200 text-white mt-1 hover:text-cyan-900 rounded-lg shadow-lg" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item  rounded" href="#">New PO</a></li>
              <li><a className="dropdown-item  rounded" href="#">View PO</a></li>
              <li><a className="dropdown-item  rounded" href="#">PO Return</a></li>
              <li><a className="dropdown-item  rounded" href="#">Petty Cash</a></li>
            </ul>
          </div>

          {/* Link buttons */}
          <a href="#" className="hover:text-cyan-900 hover:no-underline">Inventory</a>
          <a href="#" className="hover:text-cyan-900 hover:no-underline">MedGuide</a>

          <div className="relative dropdown">
            <button className="text-white dropdown-toggle bg-transparent hover:text-cyan-900 border-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
              StockTransfer
            </button>
            <ul className="dropdown-menu bg-gray-200 text-white mt-1  rounded-lg shadow-lg" aria-labelledby="dropdownMenuButton3">
              <li><a className="dropdown-item  rounded" href="#">Rise StockTransfer</a></li>
              <li><a className="dropdown-item  rounded" href="#">Receive StockTransfer</a></li>
            </ul>
          </div>

          <div className="relative dropdown">
            <button className="text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
              More...
            </button>
            <ul className="dropdown-menu bg-gray-200 text-white mt-1 hover:text-cyan-900  rounded-lg shadow-lg" aria-labelledby="dropdownMenuButton4">
              <li><a className="dropdown-item  rounded" href="#">New PO</a></li>
              <li><a className="dropdown-item  rounded" href="#">View PO</a></li>
              <li><a className="dropdown-item  rounded" href="#">PO Return</a></li>
              <li><a className="dropdown-item  rounded" href="#">Petty Cash</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center mt-0">
        {/* Search functionality */}
        <div className="items flex flex-row">
          {showSearch && (
            <input
              type="text"
              className=" bg-white text-black border border-gray-300 rounded w-32 md:w-40 md:text-base h-6"
              placeholder="Search..."
            />
          )}
          <button onClick={() => setShowSearch(!showSearch)} className="text-white px-3 mr-2 flex mt-0">
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* Toggle button for mobile menu */}
        <button className="md:hidden text-white right-4 top-6 fixed" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
        </button>

        {/* Notifications */}
        <a href="#" className="text-white mr-3"><i className="bi bi-bell-fill"></i></a>

        {/* User */}
        <div className="relative dropdown">
          <button className="text-white mr-4 md:mr-2   bg-transparent border-0" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-person-fill"></i>
          </button>
          <ul className="dropdown-menu bg-gray-200 text-white mt-1 hover:text-cyan-900 rounded-lg shadow-lg" aria-labelledby="dropdownMenuButton5">
            <li className='flex flex-row'>
              <a className="dropdown-item  rounded" href="#">
                <i className="bi bi-person p-1"></i>Accounts
              </a>
            </li>
            <li><a className="dropdown-item " href="#">Sales Return</a></li>
            <li><a className="dropdown-item " href="#">View Sales</a></li>
          </ul>
        </div>
      </div>

    </header>
  );
};

export default HeaderComponent;
