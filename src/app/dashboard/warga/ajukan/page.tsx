"use client";
import { useState } from "react";
import NavbarWarga from "../navbarwrg";
import { FaChair, FaBuilding, FaMicrophone, FaUtensils, FaPlusCircle, FaTableTennis } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";

// Dummy data barang
const barangList = [
  { id: 1, nama: "GOR Badminton", tipe: "sewa", icon: <GiShuttlecock />, harga: 250000 },
  { id: 2, nama: "Aula", tipe: "gratis", icon: <FaBuilding />, harga: 0 },
  { id: 3, nama: "Kursi", tipe: "gratis", icon: <FaChair />, harga: 0 },
  { id: 4, nama: "Sound System", tipe: "sewa", icon: <FaMicrophone />, harga: 100000 },
  { id: 5, nama: "Tenda", tipe: "sewa", icon: <FaBuilding />, harga: 50000 },
  { id: 6, nama: "Peralatan Dapur", tipe: "gratis", icon: <FaUtensils />, harga: 0 },
];

export default function AjukanPinjamPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBarang, setSelectedBarang] = useState<any>(null);
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    alamat: "",
    tanggalPinjam: "",
    tanggalKembali: "",
  });
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [notif, setNotif] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark

  // Open modal
  const handleAjukan = (barang: any) => {
    setSelectedBarang(barang);
    setForm({ nama: "", nik: "", alamat: "", tanggalPinjam: "", tanggalKembali: "" });
    setStep("form");
    setModalOpen(true);
  };

  // Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validasi
  const isValid = () => {
    return (
      form.nama.trim() &&
      form.nik.trim().length === 16 &&
      form.alamat.trim() &&
      form.tanggalPinjam &&
      form.tanggalKembali &&
      new Date(form.tanggalPinjam) <= new Date(form.tanggalKembali)
    );
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid()) return alert("Lengkapi data dengan benar!");
    if (selectedBarang.tipe === "sewa") {
      setStep("payment");
    } else {
      setLoading(true);
      setTimeout(() => {
        setNotif([
          ...notif,
          {
            ...form,
            barang: selectedBarang.nama,
            status: "Menunggu Konfirmasi Admin",
            tipe: selectedBarang.tipe,
            harga: selectedBarang.harga,
            waktu: new Date().toLocaleString(),
          },
        ]);
        setLoading(false);
        setStep("success");
      }, 1200);
    }
  };

  // Simulasi payment
  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setNotif([
        ...notif,
        {
          ...form,
          barang: selectedBarang.nama,
          status: "Menunggu Konfirmasi Admin",
          tipe: selectedBarang.tipe,
          harga: selectedBarang.harga,
          waktu: new Date().toLocaleString(),
        },
      ]);
      setLoading(false);
      setStep("success");
    }, 1500);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedBarang(null);
    setForm({ nama: "", nik: "", alamat: "", tanggalPinjam: "", tanggalKembali: "" });
    setStep("form");
  };

  return (
    <>
      <NavbarWarga darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`min-h-screen p-0 md:p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-emerald-900'}`}> 
        <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className={`text-2xl md:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-cyan-900'}`}>Ajukan Peminjaman/Sewa Fasilitas</h1>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {barangList.map((barang) => (
            <div key={barang.id} className={`rounded-2xl shadow-xl p-6 flex flex-col items-center border-l-8 animate-fadein
              ${darkMode
                ? `${barang.tipe === 'sewa' ? 'border-cyan-600' : 'border-emerald-700'} bg-gray-800/90 backdrop-blur-md border-gray-700`
                : `${barang.tipe === 'sewa' ? 'border-cyan-400' : 'border-emerald-400'} bg-white`}
            `}>
              <div className={`text-4xl mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{barang.icon}</div>
              <div className={`font-bold text-lg mb-1 ${darkMode ? 'text-gray-100' : 'text-cyan-900'}`}>{barang.nama}</div>
              <div className={`mb-2 text-sm font-semibold ${barang.tipe === "sewa" ? (darkMode ? 'text-cyan-300' : 'text-cyan-600') : (darkMode ? 'text-emerald-300' : 'text-emerald-600')}`}>{barang.tipe === "sewa" ? `Sewa - Rp${barang.harga.toLocaleString()}` : "Gratis"}</div>
              <button onClick={() => handleAjukan(barang)} className={`mt-2 px-6 py-2 rounded-xl font-bold shadow flex items-center gap-2 transition
                ${darkMode ? 'bg-gradient-to-r from-cyan-700 to-emerald-700 text-white hover:from-cyan-600 hover:to-emerald-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}
              >
                <FaPlusCircle /> Ajukan
              </button>
            </div>
          ))}
        </section>
        {/* Modal */}
        {modalOpen && (
          <div className={`fixed inset-0 z-50 flex items-center justify-center ${darkMode ? 'bg-black/80' : 'bg-black/40'}`}>
            <div className={`rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fadein-slow relative
              ${darkMode ? 'bg-gray-800/95 text-gray-100 border border-gray-700' : 'bg-white text-cyan-900'}`}
            >
              <button onClick={closeModal} className={`absolute top-3 right-3 text-xl font-bold ${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}>&times;</button>
              {step === "form" && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>{selectedBarang.nama} ({selectedBarang.tipe === "sewa" ? `Sewa - Rp${selectedBarang.harga.toLocaleString()}` : "Gratis"})</h2>
                  <input name="nama" type="text" placeholder="Nama Lengkap" value={form.nama} onChange={handleChange} className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100 focus:ring-cyan-700 placeholder-gray-400' : 'border-cyan-300 focus:ring-cyan-400'}`} required />
                  <input name="nik" type="text" placeholder="NIK (16 digit)" value={form.nik} onChange={handleChange} className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100 focus:ring-cyan-700 placeholder-gray-400' : 'border-cyan-300 focus:ring-cyan-400'}`} required maxLength={16} minLength={16} />
                  <textarea name="alamat" placeholder="Alamat" value={form.alamat} onChange={handleChange} className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100 focus:ring-cyan-700 placeholder-gray-400' : 'border-cyan-300 focus:ring-cyan-400'}`} required />
                  <div className="flex gap-2">
                    <input name="tanggalPinjam" type="date" value={form.tanggalPinjam} onChange={handleChange} className={`px-4 py-2 rounded-lg border w-1/2 focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100 focus:ring-cyan-700 placeholder-gray-400' : 'border-cyan-300 focus:ring-cyan-400'}`} required />
                    <input name="tanggalKembali" type="date" value={form.tanggalKembali} onChange={handleChange} className={`px-4 py-2 rounded-lg border w-1/2 focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100 focus:ring-cyan-700 placeholder-gray-400' : 'border-cyan-300 focus:ring-cyan-400'}`} required />
                  </div>
                  <button type="submit" className={`mt-2 px-6 py-2 rounded-xl font-bold shadow transition
                    ${darkMode ? 'bg-gradient-to-r from-cyan-700 to-emerald-700 text-white hover:from-cyan-600 hover:to-emerald-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}
                  >{selectedBarang.tipe === "sewa" ? "Lanjut ke Pembayaran" : "Ajukan Peminjaman"}</button>
                </form>
              )}
              {step === "payment" && (
                <div className="flex flex-col gap-4">
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-800'}`}>Pembayaran Sewa</h2>
                  <div className="mb-2">Total: <span className={`font-bold ${darkMode ? 'text-cyan-200' : 'text-cyan-700'}`}>Rp{selectedBarang.harga.toLocaleString()}</span></div>
                  <button onClick={handlePayment} className={`px-6 py-2 rounded-xl font-bold shadow transition
                    ${darkMode ? 'bg-gradient-to-r from-cyan-700 to-emerald-700 text-white hover:from-cyan-600 hover:to-emerald-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}
                  >Bayar &amp; Ajukan</button>
                  {loading && <div className={`font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-600'}`}>Memproses pembayaran...</div>}
                </div>
              )}
              {step === "success" && (
                <div className="flex flex-col gap-4 items-center">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>Pengajuan Berhasil!</h2>
                  <div className={`text-center ${darkMode ? 'text-cyan-200' : 'text-cyan-800'}`}>Pengajuan Anda sedang menunggu konfirmasi admin.<br />Status dapat dicek di halaman notifikasi.</div>
                  <button onClick={closeModal} className={`px-6 py-2 rounded-xl font-bold shadow transition
                    ${darkMode ? 'bg-gradient-to-r from-emerald-700 to-cyan-700 text-white hover:from-emerald-800 hover:to-cyan-800' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
                  >Tutup</button>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Notifikasi Pengajuan */}
        <section className="mt-10">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-emerald-200' : 'text-cyan-900'}`}>Notifikasi Pengajuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notif.length === 0 && <div className={`${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Belum ada pengajuan.</div>}
            {notif.map((n, i) => (
              <div key={i} className={`rounded-xl shadow p-4 border-l-4 animate-fadein
                ${darkMode ? 'bg-gray-800/90 border-cyan-700 text-gray-100' : 'bg-white border-cyan-400'}`}
              >
                <div className={`font-bold mb-1 ${darkMode ? 'text-cyan-200' : 'text-cyan-800'}`}>{n.barang} ({n.tipe === "sewa" ? `Sewa - Rp${n.harga.toLocaleString()}` : "Gratis"})</div>
                <div className={`text-sm mb-1 ${darkMode ? 'text-cyan-300' : ''}`}>{n.nama} ({n.nik})</div>
                <div className={`text-sm mb-1 ${darkMode ? 'text-cyan-300' : ''}`}>{n.alamat}</div>
                <div className={`text-sm mb-1 ${darkMode ? 'text-cyan-300' : ''}`}>Pinjam: {n.tanggalPinjam} &rarr; {n.tanggalKembali}</div>
                <div className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{n.waktu}</div>
                <div className={`font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>{n.status}</div>
              </div>
            ))}
          </div>
        </section>
        <style jsx global>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
          .animate-fadein-slow { animation: fadein 2s cubic-bezier(.4,0,.2,1) both; }
        `}</style>
      </main>
    </>
  );
}
