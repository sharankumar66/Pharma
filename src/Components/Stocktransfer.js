import React, { useState } from 'react';

const StockRequest = () => {
  const [particulars, setParticulars] = useState('');
  const [requestedStock, setRequestedStock] = useState([]);
  const [urgent, setUrgent] = useState(false);

  const handleAddParticular = () => {
    // Logic to add a particular item to the requested stock list
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">STOCK REQUEST</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Request Date</label>
            <input type="date" value="2024-07-30" readOnly className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Request From</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>OP PHARMACY</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Request To</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>IP Pharmacy - (PHARMACY)</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 mr-2">Urgent</label>
            <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Search for a Particular"
            value={particulars}
            onChange={(e) => setParticulars(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          <button onClick={handleAddParticular} className="ml-2 px-3 py-2 bg-blue-500 text-white rounded">+</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Req.No</th>
                <th className="border px-4 py-2">Req.Date</th>
                <th className="border px-4 py-2">Requested By</th>
                <th className="border px-4 py-2">Request To</th>
                <th className="border px-4 py-2">Req.By User</th>
                <th className="border px-4 py-2">Request Status</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {requestedStock.length > 0 ? (
                requestedStock.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.reqNo}</td>
                    <td className="border px-4 py-2">{item.reqDate}</td>
                    <td className="border px-4 py-2">{item.requestedBy}</td>
                    <td className="border px-4 py-2">{item.requestTo}</td>
                    <td className="border px-4 py-2">{item.reqByUser}</td>
                    <td className="border px-4 py-2">{item.requestStatus}</td>
                    <td className="border px-4 py-2">{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="7">No data available in table</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">LIST ALL REQUESTED STOCK</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">IMPORT ITEMS</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">SAVE</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">CANCEL</button>
      </div>
    </div>
  );
};

export default StockRequest;