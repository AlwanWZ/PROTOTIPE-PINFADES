"use client";
import NavbarAdmin from "./navbaradm";
import { FaUsers, FaChair, FaClipboardList, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(true); // default dark

  return (
    <>
      <NavbarAdmin darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`min-h-screen p-0 md:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-emerald-900'}`}>
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-white' : ''}`}>Dashboard Admin</h1>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className={`rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-8 animate-fadein ${darkMode ? 'bg-gray-800/90 border-cyan-700' : 'bg-white border-cyan-400'}`}>
            <FaUsers className={`text-3xl ${darkMode ? 'text-cyan-300' : 'text-cyan-600'}`} />
            <div>
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-cyan-900'}`}>128</div>
              <div className={`text-sm font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>Total Warga</div>
            </div>
          </div>
          <div className={`rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-8 animate-fadein ${darkMode ? 'bg-gray-800/90 border-cyan-700' : 'bg-white border-cyan-400'}`}>
            <FaChair className={`text-3xl ${darkMode ? 'text-cyan-300' : 'text-cyan-600'}`} />
            <div>
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-cyan-900'}`}>12</div>
              <div className={`text-sm font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>Fasilitas</div>
            </div>
          </div>
          <div className={`rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-8 animate-fadein ${darkMode ? 'bg-gray-800/90 border-cyan-700' : 'bg-white border-cyan-400'}`}>
            <FaClipboardList className={`text-3xl ${darkMode ? 'text-cyan-300' : 'text-cyan-600'}`} />
            <div>
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-cyan-900'}`}>34</div>
              <div className={`text-sm font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>Peminjaman Aktif</div>
            </div>
          </div>
        </section>
        <section className={`rounded-2xl shadow-xl p-6 mb-10 animate-fadein-slow ${darkMode ? 'bg-gray-800/90' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : ''}`}>Daftar Peminjaman</h2>
            <Link href="#" className={`flex items-center gap-2 hover:underline font-bold ${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}><FaPlusCircle /> Tambah Peminjaman</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className={`${darkMode ? 'bg-cyan-900 text-white' : 'bg-cyan-100 text-cyan-900'} font-bold`}>
                  <th className="py-2 px-4 text-left">Nama</th>
                  <th className="py-2 px-4 text-left">Fasilitas</th>
                  <th className="py-2 px-4 text-left">Tanggal</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className={darkMode ? 'border-b border-cyan-800 hover:bg-cyan-950' : 'border-b hover:bg-cyan-50'}>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Budi</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Aula</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>28 Jun 2025</td>
                  <td className="py-2 px-4"><span className={darkMode ? 'bg-cyan-800 text-cyan-100 px-2 py-1 rounded font-bold' : 'bg-cyan-200 text-cyan-800 px-2 py-1 rounded font-bold'}>Disetujui</span></td>
                  <td className="py-2 px-4"><button className={darkMode ? 'text-red-400 hover:underline font-bold' : 'text-red-600 hover:underline font-bold'}>Hapus</button></td>
                </tr>
                <tr className={darkMode ? 'border-b border-cyan-800 hover:bg-cyan-950' : 'border-b hover:bg-cyan-50'}>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Siti</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Kursi</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>29 Jun 2025</td>
                  <td className="py-2 px-4"><span className={darkMode ? 'bg-yellow-700 text-yellow-200 px-2 py-1 rounded font-bold' : 'bg-yellow-200 text-yellow-800 px-2 py-1 rounded font-bold'}>Menunggu</span></td>
                  <td className="py-2 px-4"><button className={darkMode ? 'text-red-400 hover:underline font-bold' : 'text-red-600 hover:underline font-bold'}>Hapus</button></td>
                </tr>
                <tr className={darkMode ? 'hover:bg-cyan-950' : 'hover:bg-cyan-50'}>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Agus</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>Sound System</td>
                  <td className={`py-2 px-4 font-semibold ${darkMode ? 'text-cyan-200' : 'text-cyan-900'}`}>30 Jun 2025</td>
                  <td className="py-2 px-4"><span className={darkMode ? 'bg-red-800 text-red-200 px-2 py-1 rounded font-bold' : 'bg-red-200 text-red-800 px-2 py-1 rounded font-bold'}>Ditolak</span></td>
                  <td className="py-2 px-4"><button className={darkMode ? 'text-red-400 hover:underline font-bold' : 'text-red-600 hover:underline font-bold'}>Hapus</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="flex flex-wrap gap-4">
          <Link href="#" className={`px-6 py-3 rounded-xl shadow font-bold transition animate-bouncein ${darkMode ? 'bg-cyan-700 text-white hover:bg-cyan-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}>Kelola Fasilitas</Link>
          <Link href="#" className={`px-6 py-3 rounded-xl shadow font-bold transition ${darkMode ? 'bg-cyan-900 text-cyan-200 hover:bg-cyan-800' : 'bg-cyan-100 text-cyan-900 hover:bg-cyan-200'}`}>Kelola Warga</Link>
        </section>
        <style jsx global>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
          .animate-fadein-slow { animation: fadein 2s cubic-bezier(.4,0,.2,1) both; }
          @keyframes bouncein {
            0% { transform: scale(0.9); opacity: 0; }
            60% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); }
          }
          .animate-bouncein { animation: bouncein 1.1s cubic-bezier(.4,0,.2,1) both; }
        `}</style>
      </main>
    </>
  );
}

