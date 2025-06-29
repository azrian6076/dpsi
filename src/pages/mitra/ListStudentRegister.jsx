import React from 'react';
import mahasiswaData from '../../data/mahasiswa.json';

const ListStudentRegister = () => {
  const students = mahasiswaData.MAHASISWA || [];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mahasiswa Pendaftar</h1>
          <p className="text-gray-500 mt-1">Daftar semua mahasiswa yang terdaftar di platform.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">No</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Nama</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">NIM</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Jurusan</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Universitas</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={student.ID_Mahasiswa || index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 text-gray-700">{index + 1}.</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">{student.Nama}</td>
                    <td className="py-3 px-4 text-gray-600">{student.NIM}</td>
                    <td className="py-3 px-4 text-gray-600">{student.Jurusan}</td>
                    <td className="py-3 px-4 text-gray-600">{student.Universitas}</td>
                    <td className="py-3 px-4 text-center">
                      <button 
                        onClick={() => alert(`Melihat detail ${student.Nama}`)}
                        className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-md text-sm hover:bg-blue-600 transition-colors"
                      >
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-500">
                    Tidak ada data mahasiswa untuk ditampilkan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListStudentRegister;