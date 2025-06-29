import React, { useEffect, useState } from 'react';
import mitraData from '../../data/mitra.json';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPartner = () => {
  const { user } = useAuth();
  const [mitra, setMitra] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const found = mitraData.MITRA.find(m => m.ID_User === user.id);
      setMitra(found);
    }
  }, [user]);

  const submittedProjects = 3;
  const registeredStudents = 5;

  return (
    <div className="min-h-screen bg-[#f7f7f8] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl text-center">
        <h1 className="text-xl font-semibold mb-2">
          Welcome to your dashboard{mitra ? `, ${mitra.Nama_Perusahaan} !` : '...'}
        </h1>
        <p className="mb-4">
          You have submitted <strong>{submittedProjects}</strong> projects,<br />
          there are <strong>{registeredStudents}</strong> students who have registered.
        </p>

        <div className="space-y-4 mt-6">
          {/* Submit Project */}
          <button
            // --- PERBAIKAN 1: Mengarah ke form PEMBUATAN proyek baru ---
            onClick={() => navigate('/partner/pengajuan-proyek/new')}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 flex flex-col items-center hover:bg-gray-100"
          >
            <span className="font-semibold mb-1">📤 Submit a new project</span>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your students.<br />
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </button>

          {/* Your Project */}
          <button
            // --- PERBAIKAN 2: Mengarah ke DAFTAR proyek yang sudah ada ---
            onClick={() => navigate('/partner/pengajuan-proyek')}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 flex flex-col items-center hover:bg-gray-100"
          >
            <span className="font-semibold mb-1">📁 Your Project</span>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your students.<br />
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </button>

          {/* Student Registrant */}
          <button
            // --- TIDAK ADA PERUBAHAN: Rute ini sudah benar ---
            onClick={() => navigate('/partner/student-list-register')}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 flex flex-col items-center hover:bg-gray-100"
          >
            <span className="font-semibold mb-1">👨‍🎓 Student registrant</span>
            <p className="text-sm text-gray-600">
              Create rich course content and coaching products for your students.<br />
              When you give them a pricing plan, they’ll appear on your site!
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPartner;