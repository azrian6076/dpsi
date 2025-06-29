// C:\Users\ikhsa\dpsi\src\pages\mitra\ProjectDetail.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProjects } from '../../data/mockData';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = mockProjects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold mb-4">Proyek Tidak Ditemukan</h2>
        <button 
          onClick={() => navigate('/partner/pengajuan-proyek')}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Kembali ke Daftar Proyek
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-6 py-10">
      <div className="bg-white w-full max-w-6xl mx-auto p-10 rounded-xl shadow">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">Detail Projek</h1>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="w-full md:w-1/2 bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center cursor-not-allowed">
              <span className="text-gray-800 font-medium">{project.title}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <span className="font-medium text-gray-600">Status: [{project.status}]</span>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-gray-500 text-sm tracking-wider mb-2">DESKRIPSI</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-gray-500 text-sm tracking-wider mb-2">TUJUAN STRATEGIS PROYEK</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              {project.tujuan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-500 text-sm tracking-wider mb-4">KOMENTAR</h3>
            <div className="space-y-4">
              {project.komentar.length > 0 ? project.komentar.map((comment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800">{comment.nama}</span>
                        <span className="text-sm text-gray-500">{comment.tanggal}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{comment.teks}</p>
                    </div>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500">Belum ada komentar.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}