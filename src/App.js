import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Layout from './Components/Layout';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './Components/Navbar';
import BackgroundComponent from './Components/Bg.js';
import PurchaseForm from './Components/Purchase.js';
import Sales from './Components/Sales.js';
import Input from './Components/Input.js';
import StockRequest from './Components/Stocktransfer.js';
import StockAuthorization from './Components/StockAuthorization.js';
import StockTransferApprove from './Components/StockApprove.js';

function App() {
  return (

  //  <Nav/>\
  // <> 
  //    <Layout />
  //    <StockTransferApprove />
  //    {/* <StockAuthorization/> */}
  //    {/* <StockRequest /> */}
  //    {/* <Sales /> */}
  //    {/* <Input /> */}
  //    {/* <PurchaseForm/> */}
  //   {/* <BackgroundComponent/> */}
  //   </>
    <Router>
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} /> */}
           <Route path="/" element={<PurchaseForm/>} />
           <Route path="/sales" element={<Sales />} />
           <Route path="/stockRequest" element={<StockRequest />} />
           <Route path="/stockAuthorize" element={<StockAuthorization />} />
           <Route path="/stockTransferApprove" element={<StockTransferApprove />} />

           

      </Routes>
    </div>
  </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
