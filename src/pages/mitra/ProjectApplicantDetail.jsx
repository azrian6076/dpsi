import React, { useState } from 'react';
import applicantsData from '../../data/pelamar.json';

const ProjectApplicantDetail = () => {
  const [applicants, setApplicants] = useState(applicantsData);

  const handleAccept = (id) => {
    alert(`Menerima pelamar dengan ID: ${id}`);
  };

  const handleReject = (id) => {
    alert(`Menolak pelamar dengan ID: ${id}`);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail Pelamar Projek</h1>
          <select 
            className="w-full sm:w-1/2 md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Desain UI Layanan Baca</option>
            <option>Pengembangan Sistem Management Keuangan</option>
            <option>Analisis Data Penjualan</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-2 text-sm font-semibold text-gray-500">No</th>
                <th className="py-3 px-2 text-sm font-semibold text-gray-500">Nama</th>
                <th className="py-3 px-2 text-sm font-semibold text-gray-500">NIM</th>
                <th className="py-3 px-2 text-sm font-semibold text-gray-500">Gender</th>
                <th className="py-3 px-2 text-sm font-semibold text-gray-500">Email Address</th>
                <th className="py-3 px-2 text-sm font-semibold text-gray-500 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={applicant.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2 text-gray-700">{index + 1}</td>
                  <td className="py-4 px-2 text-gray-700 font-medium">{applicant.nama}</td>
                  <td className="py-4 px-2 text-gray-700">{applicant.nim}</td>
                  <td className="py-4 px-2 text-gray-700">{applicant.gender}</td>
                  <td className="py-4 px-2 text-gray-700">{applicant.email}</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <button 
                        onClick={() => handleAccept(applicant.id)}
                        className="bg-green-100 text-green-700 font-semibold py-1 px-4 rounded-md text-sm hover:bg-green-200 transition-colors"
                      >
                        Diterima
                      </button>
                      <button 
                        onClick={() => handleReject(applicant.id)}
                        className="bg-red-100 text-red-700 font-semibold py-1 px-4 rounded-md text-sm hover:bg-red-200 transition-colors"
                      >
                        Ditolak
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ProjectApplicantDetail;