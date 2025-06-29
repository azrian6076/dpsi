// C:\Users\ikhsa\dpsi\src\pages\mitra\SubmitNewProject.jsx

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../../data/mockData'; // <-- PENTING: Import dari file data

// Komponen StatusBadge tidak berubah
const StatusBadge = ({ status }) => {
  const baseStyle = "px-3 py-1 text-xs font-semibold rounded-full";
  let specificStyle;

  switch (status) {
    case 'Approve':
      specificStyle = 'bg-green-100 text-green-800';
      break;
    case 'Pending':
      specificStyle = 'bg-yellow-100 text-yellow-800';
      break;
    case 'Review':
      specificStyle = 'bg-red-100 text-red-800';
      break;
    default:
      specificStyle = 'bg-gray-100 text-gray-800';
  }

  return <span className={`${baseStyle} ${specificStyle}`}>{status}</span>;
};

export default function SubmitNewProject() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredProjects = useMemo(() =>
    mockProjects.filter(project =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.company.toLowerCase().includes(search.toLowerCase())
    ), [search]);

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-6 py-10">
      <div className="bg-white w-full max-w-6xl mx-auto p-10 rounded-xl shadow">
        <h1 className="text-3xl font-semibold mb-10 text-gray-800">Daftar Projek</h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <input
            type="text"
            placeholder="Cari proyek...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-[#3B82F6] text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => navigate('/partner/pengajuan-proyek/new')}
          >
            Tambahkan Projek
          </button>
        </div>

        <div className="space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.company}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-shrink-0 flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <button className="flex-1 md:flex-none bg-gray-100 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 transition font-semibold">
                    Edit
                  </button>
                  {/* --- PERBAIKAN: Menambahkan onClick untuk navigasi ke detail --- */}
                  <button
                    onClick={() => navigate(`/partner/pengajuan-proyek/${project.id}`)}
                    className="flex-1 md:flex-none bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition font-semibold"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24">
              <p className="text-gray-400 text-2xl font-medium">
                Projek tidak ditemukan.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}