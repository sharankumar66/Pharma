import React, { useState } from 'react';

const StockAuthorization = () => {
  const [authorizeDate, setAuthorizeDate] = useState('2024-07-30');
  const [selectStore, setSelectStore] = useState('All Stores');
  const [stockRequestNo, setStockRequestNo] = useState('');
  const [requestedStock, setRequestedStock] = useState([]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">STOCK AUTHORIZATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Authorize Date</label>
            <input 
              type="date" 
              value={authorizeDate} 
              onChange={(e) => setAuthorizeDate(e.target.value)} 
              className="w-full px-3 py-2 border rounded" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Select Store</label>
            <select 
              value={selectStore} 
              onChange={(e) => setSelectStore(e.target.value)} 
              className="w-full px-3 py-2 border rounded"
            >
              <option>All Stores</option>
              {/* Add more store options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Stock Request No</label>
            <input 
              type="text" 
              value={stockRequestNo} 
              onChange={(e) => setStockRequestNo(e.target.value)} 
              className="w-full px-3 py-2 border rounded" 
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mb-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded">REJECT</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">AUTHORIZE</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">CANCEL</button>
        </div>
      </div>
      <div className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2"><input type="checkbox" /></th>
                <th className="border px-4 py-2">Items</th>
                <th className="border px-4 py-2">Require</th>
                <th className="border px-4 py-2">ReqStr.Stk</th>
                <th className="border px-4 py-2">Req.Qty</th>
                <th className="border px-4 py-2">Iss.Qty</th>
                <th className="border px-4 py-2">PTR</th>
                <th className="border px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {requestedStock.length > 0 ? (
                requestedStock.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2"><input type="checkbox" /></td>
                    <td className="border px-4 py-2">{item.items}</td>
                    <td className="border px-4 py-2">{item.require}</td>
                    <td className="border px-4 py-2">{item.reqStrStk}</td>
                    <td className="border px-4 py-2">{item.reqQty}</td>
                    <td className="border px-4 py-2">{item.issQty}</td>
                    <td className="border px-4 py-2">{item.ptr}</td>
                    <td className="border px-4 py-2"><button className="text-red-500">Delete</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="8">No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockAuthorization;
