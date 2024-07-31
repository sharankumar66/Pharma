import React, { useState } from 'react';

const StockTransferApprove = () => {
  const [requestDateFrom, setRequestDateFrom] = useState('2024-07-29');
  const [requestDateTo, setRequestDateTo] = useState('2024-07-30');
  const [selectStore, setSelectStore] = useState('All Stores');
  const [transferRemarks, setTransferRemarks] = useState('');
  const [requestedStock, setRequestedStock] = useState([]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">STOCK TRANSFER APPROVE</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Request Date From</label>
            <input 
              type="date" 
              value={requestDateFrom} 
              onChange={(e) => setRequestDateFrom(e.target.value)} 
              className="w-full px-3 py-2 border rounded" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Request Date To</label>
            <input 
              type="date" 
              value={requestDateTo} 
              onChange={(e) => setRequestDateTo(e.target.value)} 
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
            <label className="block text-gray-700">Transfer Remarks</label>
            <input 
              type="text" 
              value={transferRemarks} 
              onChange={(e) => setTransferRemarks(e.target.value)} 
              className="w-full px-3 py-2 border rounded" 
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mb-4">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">LIST ALL REQUESTED STOCK</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">REJECT</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">APPROVE</button>
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
                <th className="border px-4 py-2">Item Type</th>
                <th className="border px-4 py-2">Batch</th>
                <th className="border px-4 py-2">Exp.Date</th>
                <th className="border px-4 py-2">Batch Qty</th>
                <th className="border px-4 py-2">Stock</th>
                <th className="border px-4 py-2">Pend.Qty</th>
                <th className="border px-4 py-2">Iss.Qty</th>
                <th className="border px-4 py-2">Req.Str.Stk</th>
                <th className="border px-4 py-2">PTR</th>
                <th className="border px-4 py-2">MRP</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {requestedStock.length > 0 ? (
                requestedStock.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2"><input type="checkbox" /></td>
                    <td className="border px-4 py-2">{item.items}</td>
                    <td className="border px-4 py-2">{item.itemType}</td>
                    <td className="border px-4 py-2">{item.batch}</td>
                    <td className="border px-4 py-2">{item.expDate}</td>
                    <td className="border px-4 py-2">{item.batchQty}</td>
                    <td className="border px-4 py-2">{item.stock}</td>
                    <td className="border px-4 py-2">{item.pendQty}</td>
                    <td className="border px-4 py-2">{item.issQty}</td>
                    <td className="border px-4 py-2">{item.reqStrStk}</td>
                    <td className="border px-4 py-2">{item.ptr}</td>
                    <td className="border px-4 py-2">{item.mrp}</td>
                    <td className="border px-4 py-2">{item.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="13">No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockTransferApprove;
