// SalaryTable.tsx
import React from 'react';

interface SalaryRecord {
  id: string;
  transactionId: string;
  name: string;
  email: string;
  salary: string;
  paymentDate: string;
  status: 'Active' | 'Inactive';
}

const salaryData: SalaryRecord[] = [
  { id: '#1', transactionId: '098765', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$200', paymentDate: '2025‑08‑07', status: 'Active' },
  { id: '#2', transactionId: '987656', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$500', paymentDate: '2025‑08‑07', status: 'Active' },
  { id: '#3', transactionId: '123456', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$10,000', paymentDate: '2025‑08‑07', status: 'Active' },
  { id: '#31', transactionId: '987654', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$4,000', paymentDate: '2025‑05‑07', status: 'Active' },
  { id: '#4', transactionId: '123456', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$80,000', paymentDate: '2025‑05‑07', status: 'Active' },
  { id: '#5', transactionId: '765432', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$290,700', paymentDate: '2025‑05‑07', status: 'Active' },
  { id: '#6', transactionId: '876543', name: 'Elon Musk', email: 'Musk@Gmail.Com', salary: '$8,777,000', paymentDate: '2025‑05‑07', status: 'Active' },
];

const SalaryTable: React.FC = () => (

  <div className="p-6 bg-pink-50 min-h-screen font-poppins">
    <div className="flex justify-between items-center mb-6 font-poppins">
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded font-poppins">
        ⚙ Show Filter
      </button>
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
        + Add Fee
      </button>
    </div>

    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            {['ID', 'Transaction ID', 'Staff', 'Salary Amount', 'Payment Date', 'Status', 'Actions'].map(h => (
              <th key={h} className="py-3 px-6">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {salaryData.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="py-3 px-6">{row.id}</td>
              <td className="py-3 px-6">{row.transactionId}</td>
              <td className="py-3 px-6 flex items-center">
                <div className="w-8 h-8 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">{row.name}</div>
                  <div className="text-xs text-gray-500">{row.email}</div>
                </div>
              </td>
              <td className="py-3 px-6">{row.salary}</td>
              <td className="py-3 px-6">{row.paymentDate}</td>
              <td className="py-3 px-6">
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                  {row.status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <button className="text-gray-400 hover:text-gray-600">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SalaryTable;

