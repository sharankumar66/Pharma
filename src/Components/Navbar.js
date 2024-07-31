import React from "react";

const Nav = () => {
    let Links = [
        {name:"Home",href:"/"},
        {name:"Home",href:"/"},
        {name:"Home",href:"/"},
    ];

    return ( <div className=" shadow-md w-full fixed top-0 left-0">
  <div className="md:flex items-center justify-start bg-sky-700 py-4 md:px-10 px-7">
    <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-200
    ">
        <span className="mr-2 pt-2">
            logo
        </span>
        MyApp
    </div>
    <ul className="md:flex md:items-center md:pb-0 pb-12">
        {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 text-gray-200  hover:text-gray-300 duration-500">
                <a href={link.href}>{link.name}</a>
            </li>
        ))
        }
        <div className="dropdown">
            <button className=" text-xl text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="text-white dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
    </ul>
  </div>
    </div>
    )
};

export default  Nav;