import React, { useState } from 'react';
import logo from './smalllogo.jpg';

const BackgroundComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (<>

    <div className=" w-auto relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat   " >
      <div className=" w-10/12 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${logo})` }}></div>

        <header className="  w-full fixed bg-gradient-to-r from-sky-800 to-sky-400 shadow-md text-white h-auto md:h-14 p-4 font-[calibri] text-xl flex justify-between animate-fadeIn ">
          <div className=" flex flex-col md:flex-row  space-x-8">
            {/* Logo with button functionality */}
            {/* <button className="flex  "> 
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <i class="bi bi-house-door-fill"></i>
          <span className="font-bold"><i class="bi bi-house-door-fill"></i></span>
        </button> */}

            <div className="dropdown">
              <button className="text-white  bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-house-door-fill"></i>
              </button>
              <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">New Sales</a></li>
                <li><a className="dropdown-item" href="#">Sales Return</a></li>
                <li><a className="dropdown-item" href="#">View Sales</a></li>
                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </div>

            <div>


              {/* Menu items */}
              <div className={`flex-col md:flex-row md:flex left-0 h-auto md:items-center md:space-x-8 ${showMenu ? 'flex' : 'hidden'} `}>
                <a href="#" className="text-white hover:font-bold">Some</a>

                {/* Dropdown 1 */}
                <div className="dropdown">
                  <button className="text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sales
                  </button>
                  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">New Sales</a></li>
                    <li><a className="dropdown-item" href="#">Sales Return</a></li>
                    <li><a className="dropdown-item" href="#">View Sales</a></li>
                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </div>

                {/* Dropdown 2 */}
                <div className="dropdown">
                  <button className="text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Purchase
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item" href="#">New PO</a></li>
                    <li><a className="dropdown-item" href="#">View PO </a></li>
                    <li><a className="dropdown-item" href="#"> PO Return</a></li>
                    <li><a className="dropdown-item" href="#">Petty Cash</a></li>
                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </div>

                {/* Link buttons */}
                <a href="#" className="text-white">Inventory</a>
                <a href="#" className="text-white">More...</a>
              </div>
            </div>
          </div>

          {/* Search functionality */}
          <div className="relative right-0 flex flex-row  ">
            {showSearch && (
              <input
                type="text"
                className=" right-0 top-0  p-2 bg-white text-black border border-gray-300 rounded w-32 md:w-40 md:text-base h-8"
                placeholder="Search..."
              />
            )}
            <button onClick={() => setShowSearch(!showSearch)} className="text-white px-12 top-8 flex ">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Toggle button for mobile menu */}
          <button className="md:hidden text-white right-6 top-6 fixed" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <i class="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}

          </button>


        </header >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> Optional: Overlay for better text contrast */}
        <div className="relative z-10 h-full bg-black opacity-50 ">

          <h1 className="text-white text-center text-4xl pt-20">Static Background</h1>
          <div className="mt-10 mx-auto max-w-4xl p-5 bg-white rounded shadow opacity-99 ">
            <p>Your content goes here...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Keep adding content to make the page scroll...</p>
            <p>Your content goes here...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Keep adding content to make the page scroll...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            {/* Repeat above line to create more content */}
          </div>
          <h1 className="text-white text-center text-4xl pt-20">Static Background</h1>
          <div className="mt-10 mx-auto max-w-4xl p-5 bg-white bg-opacity-80 rounded shadow bg-black opacity-50 ">
            <p>Your content goes here...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Keep adding content to make the page scroll...</p>
            <p>Your content goes here...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Keep adding content to make the page scroll...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            <p className="mt-4">Additional content...</p>
            <p className="mt-4">More content...</p>
            {/* Repeat above line to create more content */}
          </div>
        </div>
      </div>
      
    </>
    );
};

    export default BackgroundComponent;
