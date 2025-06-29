import React, { useState } from 'react';

export default function ProjectListPartner() {
  // State untuk setiap field pada form
  const [formData, setFormData] = useState({
    namaProyek: '',
    deskripsiProyek: '',
    kategori: '',
    goalsProyek: '',
    jumlahOrang: '',
    informasiTambahan: '',
  });

  // Handler untuk memperbarui state ketika input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
    console.log('Data Proyek yang Diajukan:', formData);
    alert('Proyek berhasil diajukan!');
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-4 py-10 md:px-6">
      <div className="bg-white w-full max-w-4xl mx-auto p-8 md:p-10 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Form Pengajuan Projek</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Proyek */}
          <div>
            <label htmlFor="namaProyek" className="block text-sm font-medium text-gray-700 mb-2">Nama Proyek</label>
            <input
              type="text"
              id="namaProyek"
              name="namaProyek"
              value={formData.namaProyek}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Deskripsi Proyek */}
          <div>
            <label htmlFor="deskripsiProyek" className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Proyek</label>
            <textarea
              id="deskripsiProyek"
              name="deskripsiProyek"
              rows="4"
              value={formData.deskripsiProyek}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Kategori */}
          <div>
            <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
            <select
              id="kategori"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Pilih Kategori</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Desain">Desain</option>
              <option value="Pemasaran">Pemasaran</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          {/* Goals Proyek */}
          <div>
            <label htmlFor="goalsProyek" className="block text-sm font-medium text-gray-700 mb-2">Goals Proyek</label>
            <input
              type="text"
              id="goalsProyek"
              name="goalsProyek"
              value={formData.goalsProyek}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Jumlah Orang */}
          <div>
            <label htmlFor="jumlahOrang" className="block text-sm font-medium text-gray-700 mb-2">Jumlah Orang</label>
            <select
              id="jumlahOrang"
              name="jumlahOrang"
              value={formData.jumlahOrang}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Pilih Jumlah Tim</option>
              <option value="1-3">1 - 3 Orang</option>
              <option value="4-6">4 - 6 Orang</option>
              <option value="7-10">7 - 10 Orang</option>
            </select>
          </div>

          {/* Informasi Tambahan */}
          <div>
            <label htmlFor="informasiTambahan" className="block text-sm font-medium text-gray-700 mb-2">Informasi Tambahan</label>
            <textarea
              id="informasiTambahan"
              name="informasiTambahan"
              rows="3"
              value={formData.informasiTambahan}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center pt-4">
            <button type="button" className="flex items-center text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add another
            </button>
            <button
              type="submit"
              className="ml-auto bg-[#3B82F6] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Add Proyek
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}