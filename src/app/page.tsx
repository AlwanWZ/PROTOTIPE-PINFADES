"use client";
import { useState } from "react";
import { Moon, Sun, Menu, X, MapPin, Users, Calendar, Shield, Zap, Smartphone, Instagram, Youtube } from "lucide-react";

type NavbarLandingProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const NavbarLanding = ({ isDark, toggleDarkMode }: NavbarLandingProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700' : 'bg-white/95 backdrop-blur-md shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">PF</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>PinFaDes</h1>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Desa Jelegong</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-emerald-600'}`}>Beranda</a>
            <a href="#fasilitas" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-emerald-600'}`}>Fasilitas</a>
            <a href="#tatacara" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-emerald-600'}`}>Tata Cara</a>
            <a href="#profil" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-emerald-600'}`}>Profil</a>
            <a href="/login" className={`ml-2 px-5 py-2 rounded-xl font-bold shadow transition-all duration-200 ${isDark ? 'bg-cyan-700 text-white hover:bg-cyan-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}>Login</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}> 
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className={`block px-3 py-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Beranda</a>
            <a href="#fasilitas" className={`block px-3 py-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Fasilitas</a>
            <a href="#tatacara" className={`block px-3 py-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Tata Cara</a>
            <a href="#profil" className={`block px-3 py-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>Profil</a>
            <a href="/login" className={`block mt-2 px-3 py-2 rounded-xl font-bold shadow transition-all duration-200 text-center ${isDark ? 'bg-cyan-700 text-white hover:bg-cyan-800' : 'bg-cyan-600 text-white hover:bg-cyan-700'}`}>Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  } 

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50'}`}>
      <NavbarLanding isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className={`pt-20 pb-16 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50'}`} id="hero">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium mb-6 animate-pulse">
                <MapPin className="w-4 h-4 mr-2" />
                Desa Jelegong, Rancaekek
              </div>
              
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  PinFaDes
                </span>
                <br />
                <span className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Mudah & Cepat
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Satu aplikasi untuk semua kebutuhan fasilitas desa: <span className="text-emerald-600 font-bold">aula, kursi, sound system, tenda</span>, dan lainnya. Ada yang <span className="text-cyan-600 font-bold">GRATIS</span>, ada juga yang <span className="text-emerald-600 font-bold">bisa disewa</span>. Proses cepat & transparan!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Mulai Pinjam Sekarang
                </button>
                <button className={`px-8 py-4 font-bold rounded-2xl border-2 transition-all duration-300 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'}`}>
                  Pelajari Lebih Lanjut
                </button>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>1000+ Warga Aktif</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Aman & Terpercaya</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-2xl`}>
                  <div className="w-80 h-80 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Fasilitas Desa</h3>
                      <p className="text-sm opacity-90">Mudah diakses kapan saja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 px-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Fasilitas Tersedia", icon: "🏢" },
              { number: "500+", label: "Peminjaman Sukses", icon: "✅" },
              { number: "24/7", label: "Akses Online", icon: "🕐" },
              { number: "100%", label: "Gratis", icon: "💯" }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${isDark ? 'bg-gray-700 shadow-xl border border-gray-600' : 'bg-white shadow-xl'}`}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="py-16 px-6" id="fasilitas">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Fasilitas <span className="text-emerald-600">Lengkap</span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Berbagai fasilitas desa siap mendukung kegiatan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aula & Ruang Rapat",
                description: "Tempat pertemuan, seminar, dan acara warga dengan kapasitas besar",
                icon: "🏛️",
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "Kursi & Meja",
                description: "Perlengkapan acara dengan berbagai pilihan jumlah dan ukuran",
                icon: "🪑",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Sound System",
                description: "Perangkat audio profesional untuk mendukung acara dan pengumuman",
                icon: "🎵",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Tenda & Canopy",
                description: "Untuk acara outdoor, bazar, dan kegiatan lapangan",
                icon: "⛺",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Perlengkapan Olahraga",
                description: "Fasilitas untuk kegiatan olahraga dan rekreasi warga",
                icon: "⚽",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Peralatan Dapur",
                description: "Kompor, panci, dan peralatan masak untuk acara besar",
                icon: "🍳",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((facility, index) => (
              <div key={index} className={`group ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{facility.icon}</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {facility.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tata Cara Section */}
      <section className="py-16 px-6" id="tatacara">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Cara <span className="text-cyan-600">Peminjaman</span>
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Proses yang mudah dan cepat dalam 5 langkah
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Daftar & Login",
                description: "Buat akun atau login dengan data warga yang valid"
              },
              {
                step: "02",
                title: "Pilih Fasilitas",
                description: "Pilih fasilitas yang dibutuhkan dan cek ketersediaan"
              },
              {
                step: "03",
                title: "Isi Formulir",
                description: "Lengkapi formulir pengajuan dengan detail acara"
              },
              {
                step: "04",
                title: "Konfirmasi Admin",
                description: "Tunggu persetujuan dari admin desa (maksimal 24 jam)"
              },
              {
                step: "05",
                title: "Ambil & Kembalikan",
                description: "Ambil fasilitas sesuai jadwal dan kembalikan tepat waktu"
              }
            ].map((step, index) => (
              <div key={index} className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl`}>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mengapa <span className="text-purple-600">PinFaDes?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Cepat & Mudah",
                description: "Pengajuan dan konfirmasi hanya dalam hitungan menit",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <span className="text-2xl">💸</span>,
                title: "100% Gratis",
                description: "Tidak ada biaya tersembunyi, semuanya gratis untuk warga",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Friendly",
                description: "Akses dari mana saja, kapan saja dengan tampilan responsif",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} className={`text-center p-8 rounded-3xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Desa Section */}
      <section className="py-16 px-6" id="profil">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-bold text-3xl">JL</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Profil <span className="text-emerald-600">Desa Jelegong</span>
          </h2>
          <p className={`text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Desa Jelegong adalah desa yang aktif, ramah, dan selalu mendukung kegiatan warganya. 
            Dengan sistem digital PinFaDes, peminjaman fasilitas desa kini lebih mudah, 
            transparan, dan efisien untuk semua warga.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Jelegong, Rancaekek, Kabupaten Bandung
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left items-center">
          <div className="flex flex-col items-center sm:items-start justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">PF</span>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}> 
              PinFaDes - Pinjam Fasilitas Desa
            </h3>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> 
              Melayani warga Desa Jelegong dengan sepenuh hati
            </p>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-700 hover:bg-emerald-600 text-pink-400' : 'bg-gray-100 hover:bg-emerald-100 text-pink-600'}`}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-700 hover:bg-emerald-600 text-black' : 'bg-gray-100 hover:bg-emerald-100 text-black'}`}> 
                {/* TikTok SVG icon - new, more recognizable */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6" fill="none">
                  <g>
                    <path d="M176 32c0 26.51 21.49 48 48 48v32c-22.09 0-42.09-8.95-56.57-23.43A79.91 79.91 0 0 1 176 32h-32v144a48 48 0 1 1-48-48h8v32h-8a16 16 0 1 0 16 16V32h32c0 35.35 28.65 64 64 64V32h-32Z" fill="currentColor"/>
                  </g>
                </svg>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-700 hover:bg-emerald-600 text-red-500' : 'bg-gray-100 hover:bg-emerald-100 text-red-600'}`}>
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}> 
              &copy; {new Date().getFullYear()} Desa Jelegong. All rights reserved.
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 sm:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.429891073745!2d107.77212357587636!3d-6.958509068130224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4860ff36fed%3A0x5d48039496b5e833!2sKantor%20Desa%20Jelegong%20Rancaekek!5e0!3m2!1sid!2sid!4v1752982812423!5m2!1sid!2sid"
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '1rem', maxWidth: 600 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Desa Jelegong"
            ></iframe>
          </div>
        </div>



      </footer>
    </div>
  );
}
