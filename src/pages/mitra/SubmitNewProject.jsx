import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectListPartner() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f7f8] flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow">
        <h1 className="text-xl font-semibold mb-6">Daftar Projek</h1>

        <div className="flex items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => navigate('/partner/submit-new-project')}
          >
            Tambahkan Projek
          </button>
        </div>

        {/* Daftar proyek kosong */}
        <div className="text-center text-gray-400 text-lg py-20">
          Belum Ada Projek Tersedia
        </div>
      </div>
    </div>
  );
}
