import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

// --- Komponen ProtectedRoute yang sudah dilengkapi "Detektif" ---
export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Pesan "Detektif" untuk melihat apa yang terjadi
  console.log('--- PROTECTED ROUTE CHECK ---');
  console.log('User saat ini:', user);
  console.log('Role yang diizinkan:', allowedRoles);
  console.log('Mencoba akses ke:', location.pathname);

  // 1. Cek apakah user sudah login atau belum
  if (!user) {
    console.error('HASIL: Gagal! User tidak login. Mengalihkan ke /login...');
    // Redirect ke halaman login, simpan lokasi yang ingin dituju
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Cek apakah role user diizinkan
  const isAuthorized = allowedRoles.includes(user.role);

  if (!isAuthorized) {
    console.error(`HASIL: Gagal! Role user ('${user.role}') tidak ada di dalam daftar yang diizinkan (${allowedRoles.join(', ')}). Mengalihkan ke /unauthorized...`);
    // Redirect ke halaman "tidak diizinkan"
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  // 3. Jika semua cek lolos, izinkan akses
  console.log('HASIL: Sukses! Akses diizinkan.');
  return children;
};


// --- Komponen AuthRoute (untuk halaman Login/Register) ---
export const AuthRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user) {
        // Jika sudah login, alihkan dari halaman login/register ke dashboard
        const targetPath = location.state?.from?.pathname || `/${user.role.toLowerCase()}/dashboard`;
        return <Navigate to={targetPath} replace />;
    }

    return children;
};