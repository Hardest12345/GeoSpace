// src/components/LoginPage.jsx
import React, { useEffect, useState } from "react";
import {
  User,
  LockKeyhole,
  School,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const LoginPage = ({ onLoginSuccess, onNavigateToRegister }) => {
  // =====================================================
  // STATE
  // =====================================================

  // Login mode: 'student' atau 'teacher'
  const [loginMode, setLoginMode] = useState("student");

  // State untuk Student Login (tanpa password)
  const [namaSiswa, setNamaSiswa] = useState("");
  const [kelas, setKelas] = useState("");

  // State untuk Teacher Login (dengan password)
  const [teacherName, setTeacherName] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // State umum
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // LOGIN SISWA (Tanpa Password)
  // =====================================================

  // src/components/LoginPage.jsx - handleStudentLogin

const handleStudentLogin = async () => {
  const nama = namaSiswa.trim();
  const kelasValue = kelas.trim();

  if (!nama) {
    setError("Silakan masukkan nama Anda");
    return;
  }

  if (!kelasValue) {
    setError("Silakan masukkan kelas Anda");
    return;
  }

  setIsLoading(true);
  setError("");

  try {
    // CARA 1: Query langsung (lebih reliable)
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id, nama, kelas, role')
      .eq('role', 'student')
      .ilike('nama', nama)  // case insensitive
      .eq('kelas', kelasValue)
      .eq('is_active', true)
      .maybeSingle();

    console.log("Student query result:", { userData, userError });

    if (userError) {
      console.error("Query error:", userError);
      setError("Terjadi kesalahan saat mencari data siswa");
      setIsLoading(false);
      return;
    }

    if (!userData) {
      setError(
        `Siswa dengan nama "${nama}" di kelas "${kelasValue}" tidak ditemukan.\n` +
        `Silakan minta guru untuk mendaftarkan Anda.`
      );
      setIsLoading(false);
      return;
    }

    // Update last_login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', userData.id);

    // Simpan session
    const sessionData = {
      id: userData.id,
      nama: userData.nama,
      kelas: userData.kelas,
      role: userData.role || 'student',
      loginAt: new Date().toISOString()
    };
    
    localStorage.setItem("geospace_user", JSON.stringify(sessionData));

    // Catat aktivitas login
    await supabase.from("activity_logs").insert([
      {
        user_id: userData.id,
        activity_type: "login",
        details: {
          method: "student_login",
          kelas: kelasValue,
          timestamp: new Date().toISOString()
        }
      }
    ]);

    // Panggil callback
    if (onLoginSuccess) {
      onLoginSuccess(userData.nama, userData.id, userData.kelas, userData.role || 'student');
    }

  } catch (err) {
    console.error("Login error:", err);
    setError(err.message || "Terjadi kesalahan saat login");
  } finally {
    setIsLoading(false);
  }
};

  // =====================================================
  // LOGIN GURU (Dengan Password)
  // =====================================================

  const handleTeacherLogin = async () => {
  const nama = teacherName.trim();
  const password = teacherPassword.trim();

  if (!nama) {
    setError("Silakan masukkan nama guru");
    return;
  }

  if (!password) {
    setError("Silakan masukkan password");
    return;
  }

  setIsLoading(true);
  setError("");

  try {
    // 1. Cari guru di database
    // Cek kolom nama, username, atau email yang cocok dengan input (case-insensitive)
    const { data: userList, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('role', 'teacher');

    if (userError || !userList || userList.length === 0) {
      setError("Guru tidak ditemukan. Periksa nama atau hubungi admin.");
      setIsLoading(false);
      return;
    }

    const searchStr = nama.toLowerCase();
    const userData = userList.find(u =>
      (u.nama && u.nama.toLowerCase() === searchStr) ||
      (u.username && u.username.toLowerCase() === searchStr) ||
      (u.email && u.email.toLowerCase() === searchStr)
    );

    if (!userData) {
      setError("Guru tidak ditemukan. Periksa nama atau hubungi admin.");
      setIsLoading(false);
      return;
    }

    console.log("User data found:", userData); // Debug

    // 2. Verifikasi password (dukung password_hash atau password)
    const storedPass = userData.password_hash || userData.password || "";
    const isValidPassword = password === storedPass;

    console.log("Password match:", isValidPassword); // Debug
    console.log("Input password:", password);
    console.log("Stored hash/pass:", storedPass);

    if (!isValidPassword) {
      setError("Password salah. Silakan coba lagi.");
      setIsLoading(false);
      return;
    }

    // 3. Simpan session
    const sessionData = {
      id: userData.id,
      nama: userData.nama,
      role: userData.role,
      loginAt: new Date().toISOString()
    };
    
    localStorage.setItem("geospace_user", JSON.stringify(sessionData));

    // 4. Catat aktivitas login
    await supabase
      .from('activity_logs')
      .insert([
        {
          user_id: userData.id,
          activity_type: 'login',
          details: { 
            method: 'teacher_login',
            timestamp: new Date().toISOString() 
          }
        }
      ]);

    // 5. Panggil callback
    if (onLoginSuccess) {
      onLoginSuccess(userData.nama, userData.id, null, userData.role);
    }

  } catch (err) {
    console.error("Teacher login error:", err);
    setError(err.message || "Terjadi kesalahan saat login");
  } finally {
    setIsLoading(false);
  }
};

  // =====================================================
  // HANDLE LOGIN (Switch berdasarkan mode)
  // =====================================================

  const handleLogin = () => {
    if (loginMode === "student") {
      handleStudentLogin();
    } else {
      handleTeacherLogin();
    }
  };

  // =====================================================
  // CEK SESSION TERSIMPAN
  // =====================================================

  useEffect(() => {
    const checkSavedUser = async () => {
      try {
        const savedData = localStorage.getItem("geospace_user");

        if (savedData) {
          const sessionData = JSON.parse(savedData);

          // Validasi user masih ada di database
          const { data: user, error } = await supabase
            .from("users")
            .select("id, nama, kelas, role, is_active")
            .eq("id", sessionData.id)
            .single();

          if (user && user.is_active !== false && !error) {
            if (onLoginSuccess) {
              onLoginSuccess(user.nama, user.id, user.kelas, user.role);
            }
            return;
          }
        }
        // Jika tidak valid, hapus localStorage
        localStorage.removeItem("geospace_user");
      } catch (err) {
        console.error("Error checking session:", err);
        localStorage.removeItem("geospace_user");
      }
    };

    checkSavedUser();
  }, [onLoginSuccess]);

  // =====================================================
  // FORMAT NAMA
  // =====================================================

  const handleNameChange = (e) => {
    setNamaSiswa(e.target.value);
    setError("");
  };

  // =====================================================
  // TOGGLE LOGIN MODE
  // =====================================================

  const toggleMode = () => {
    setLoginMode(loginMode === "student" ? "teacher" : "student");
    setError("");
    // Reset fields
    setNamaSiswa("");
    setKelas("");
    setTeacherName("");
    setTeacherPassword("");
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      {/* MAIN CANVAS */}
      <main
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-[#dff8f8]
          via-[#f4fbfa]
          to-[#fff0e5]
        "
      >
        {/* Background Decorations - Sama seperti sebelumnya */}
        <div className="pointer-events-none absolute -left-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-[#bceeee] opacity-70 blur-[1px]" />
        <div className="pointer-events-none absolute -bottom-[220px] -left-[160px] h-[480px] w-[480px] rounded-full bg-[#c9f2f2] opacity-65" />
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-[#fff0e5] opacity-80" />
        <div className="pointer-events-none absolute -bottom-[220px] -right-[160px] h-[500px] w-[500px] rounded-full bg-[#ffe5d7] opacity-75" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 grid min-h-screen w-full lg:grid-cols-2">
          {/* LEFT SIDE - Ilustrasi */}
          <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-transparent px-6 py-16 lg:min-h-screen lg:px-10">
            {/* Decorative dots & symbols - Sama seperti sebelumnya */}
            <div className="absolute left-7 top-9 grid grid-cols-5 gap-[7px] opacity-80">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-[3px] w-[3px] rounded-full bg-white"
                />
              ))}
            </div>

            <div className="absolute bottom-12 left-7 grid grid-cols-5 gap-[7px] opacity-60">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-[3px] w-[3px] rounded-full bg-[#63d1d2]"
                />
              ))}
            </div>

            {/* 3D Cube */}
            <div className="relative z-10 flex -translate-y-2 flex-col items-center justify-center">
              <div className="cube-scene">
                <div className="cube">
                  <div className="cube-face cube-front" />
                  <div className="cube-face cube-right" />
                  <div className="cube-face cube-top" />
                </div>
              </div>
              <div className="cube-shadow" />

              <div className="mt-8 text-center">
                <h2 className="text-[18px] font-bold tracking-[-0.3px] text-[#14263d]">
                  {loginMode === "student"
                    ? "Eksplorasi Bangun Ruang"
                    : "Dashboard Guru"}
                </h2>
                <p className="mt-1.5 text-[13px] leading-[20px] text-[#718096]">
                  {loginMode === "student"
                    ? "Belajar kubus, balok, dan lainnya secara interaktif 🚀"
                    : "Kelola siswa dan pantau progres belajar mereka 📊"}
                </p>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE - Login Card */}
          <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-transparent px-6 py-12 lg:min-h-screen lg:px-10">
            <div className="relative z-20 w-full max-w-[420px]">
              <div className="rounded-[16px] bg-white px-8 py-9 shadow-[0_10px_35px_rgba(30,50,70,0.13)] md:px-9 md:py-10">
                {/* Header */}
                <div className="mb-6 flex flex-col items-center text-center">
                  <img
                    src="/images/Geospace.png"
                    alt="GeoSpace Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <p className="mt-3 text-[13px] text-[#718096]">
                    {loginMode === "student"
                      ? "Selamat datang di Geospace"
                      : "Dashboard Guru Geospace"}
                  </p>
                  <p className="mt-1 text-[12px] text-[#718096]">
                    {loginMode === "student"
                      ? "Jelajahi dunia bangun ruang secara interaktif!"
                      : "Kelola siswa dan pantau pembelajaran"}
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 whitespace-pre-line">
                    ⚠️ {error}
                  </div>
                )}

                {/* =====================================================
                    FORM STUDENT LOGIN
                ====================================================== */}
                {loginMode === "student" ? (
                  <>
                    {/* Greeting */}
                    <div className="mb-5">
                      <h2 className="text-[15px] font-bold text-[#26364b]">
                        Halo! Siapa namamu? 👋
                      </h2>
                      <p className="mt-2 text-[12px] leading-[18px] text-[#8a96a5]">
                        Masukkan nama dan kelas untuk memulai belajar
                      </p>
                    </div>

                    {/* Nama Siswa */}
                    <div className="relative mb-3.5">
                      <User
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#21bfc0]"
                      />
                      <input
                        type="text"
                        value={namaSiswa}
                        placeholder="Nama Lengkap"
                        onChange={handleNameChange}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleLogin();
                          }
                        }}
                        disabled={isLoading}
                        className="h-[48px] w-full rounded-[8px] border border-[#51cccc] bg-white pl-11 pr-4 text-[13px] text-[#26364b] outline-none transition placeholder:text-[#9aa5b1] focus:border-[#21bfc0] focus:ring-2 focus:ring-[#b5eeee] disabled:opacity-60"
                      />
                    </div>

                    {/* Kelas */}
                    <div className="relative mb-3.5">
                      <School
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#21bfc0]"
                      />
                      <input
                        type="text"
                        value={kelas}
                        placeholder="Kelas (Contoh: 5A)"
                        onChange={(e) => {
                          setKelas(e.target.value.toUpperCase());
                          setError("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleLogin();
                          }
                        }}
                        disabled={isLoading}
                        className="h-[48px] w-full rounded-[8px] border border-[#51cccc] bg-white pl-11 pr-4 text-[13px] text-[#26364b] outline-none transition placeholder:text-[#9aa5b1] focus:border-[#21bfc0] focus:ring-2 focus:ring-[#b5eeee] disabled:opacity-60"
                      />
                    </div>

                    {/* Info untuk siswa */}
                    <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-blue-50 p-3">
                      <LockKeyhole
                        size={13}
                        className="shrink-0 text-[#21bfc0]"
                      />
                      <p className="text-[11px] leading-[16px] text-[#4a6a8a]">
                        Belum terdaftar? Minta guru untuk mendaftarkanmu!
                      </p>
                    </div>
                  </>
                ) : (
                  /* =====================================================
                      FORM TEACHER LOGIN
                  ====================================================== */
                  <>
                    {/* Greeting */}
                    <div className="mb-5">
                      <h2 className="text-[15px] font-bold text-[#26364b]">
                        Login Guru 👨‍🏫
                      </h2>
                      <p className="mt-2 text-[12px] leading-[18px] text-[#8a96a5]">
                        Masukkan nama dan password untuk mengakses dashboard
                      </p>
                    </div>

                    {/* Nama Guru */}
                    <div className="relative mb-3.5">
                      <User
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#21bfc0]"
                      />
                      <input
                        type="text"
                        value={teacherName}
                        placeholder="Nama Guru"
                        onChange={(e) => {
                          setTeacherName(e.target.value);
                          setError("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleLogin();
                          }
                        }}
                        disabled={isLoading}
                        className="h-[48px] w-full rounded-[8px] border border-[#51cccc] bg-white pl-11 pr-4 text-[13px] text-[#26364b] outline-none transition placeholder:text-[#9aa5b1] focus:border-[#21bfc0] focus:ring-2 focus:ring-[#b5eeee] disabled:opacity-60"
                      />
                    </div>

                    {/* Password Guru */}
                    <div className="relative mb-3.5">
                      <LockKeyhole
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#21bfc0]"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={teacherPassword}
                        placeholder="Password"
                        onChange={(e) => {
                          setTeacherPassword(e.target.value);
                          setError("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleLogin();
                          }
                        }}
                        disabled={isLoading}
                        className="h-[48px] w-full rounded-[8px] border border-[#51cccc] bg-white pl-11 pr-12 text-[13px] text-[#26364b] outline-none transition placeholder:text-[#9aa5b1] focus:border-[#21bfc0] focus:ring-2 focus:ring-[#b5eeee] disabled:opacity-60"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ba6b2] hover:text-[#26364b]"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {/* Info untuk guru */}
                    <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-blue-50 p-3">
                      <GraduationCap
                        size={13}
                        className="shrink-0 text-[#21bfc0]"
                      />
                      <p className="text-[11px] leading-[16px] text-[#4a6a8a]">
                        Gunakan password yang sudah diberikan oleh admin
                      </p>
                    </div>
                  </>
                )}

                {/* Login Button */}
                <button
  type="button"
  onClick={handleLogin}
  disabled={isLoading}
  className="mt-4 h-[42px] w-full rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
>
  {isLoading ? (
    <>
      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      Memproses...
    </>
  ) : loginMode === "student" ? (
    "Masuk 🚀"
  ) : (
    "Masuk sebagai Guru 👨‍🏫"
  )}
</button>

                {/* Toggle Login Mode */}
                <div className="mt-4 text-center">
                  <button
                    onClick={toggleMode}
                    className="text-[12px] text-[#718096] hover:text-[#21bfc0] transition-colors"
                  >
                    {loginMode === "student"
                      ? "Login sebagai Guru →"
                      : "← Login sebagai Siswa"}
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <LockKeyhole size={13} className="shrink-0 text-[#9ba6b2]" />
                  <p className="text-[11px] leading-[16px] text-[#9ba6b2]">
                    Nama akan digunakan untuk menyimpan progres belajar
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 3D CUBE CSS - Sama seperti sebelumnya */}
      <style>{`
        .cube-scene {
          position: relative;
          width: 165px;
          height: 165px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 750px;
        }

        .cube {
          position: relative;
          width: 112px;
          height: 112px;
          transform-style: preserve-3d;
          transform: rotateX(-8deg) rotateY(-30deg) rotateZ(-1deg);
          animation: cubeFloat 4s ease-in-out infinite;
        }

        .cube-face {
          position: absolute;
          width: 112px;
          height: 112px;
          box-sizing: border-box;
          border: 3px solid rgba(255, 255, 255, 0.92);
          backface-visibility: hidden;
        }

        .cube-front {
          background: linear-gradient(135deg, #12babc 0%, #079b9e 100%);
          transform: translateZ(55px);
          border-radius: 2px;
        }

        .cube-right {
          background: linear-gradient(135deg, #078f94 0%, #057b81 100%);
          transform: rotateY(90deg) translateZ(55px);
          border-radius: 2px;
        }

        .cube-top {
          background: linear-gradient(135deg, #42d2d3 0%, #22babc 100%);
          transform: rotateX(90deg) translateZ(55px);
          border-radius: 2px;
        }

        .cube-shadow {
          width: 108px;
          height: 20px;
          margin-top: -3px;
          border-radius: 50%;
          background: rgba(15, 160, 164, 0.23);
          filter: blur(9px);
          animation: shadowFloat 4s ease-in-out infinite;
        }

        @keyframes cubeFloat {
          0%, 100% {
            transform: rotateX(-8deg) rotateY(-30deg) rotateZ(-1deg) translateY(0);
          }
          50% {
            transform: rotateX(-8deg) rotateY(-30deg) rotateZ(-1deg) translateY(-9px);
          }
        }

        @keyframes shadowFloat {
          0%, 100% {
            transform: scaleX(1);
            opacity: 0.65;
          }
          50% {
            transform: scaleX(0.78);
            opacity: 0.35;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cube, .cube-shadow { animation: none; }
        }

        @media (max-width: 1023px) {
          .cube-scene { width: 145px; height: 145px; }
          .cube, .cube-face { width: 100px; height: 100px; }
          .cube-front { transform: translateZ(49px); }
          .cube-right { transform: rotateY(90deg) translateZ(49px); }
          .cube-top { transform: rotateX(90deg) translateZ(49px); }
          .cube-shadow { width: 96px; }
        }

        @media (max-width: 640px) {
          .cube-scene { width: 135px; height: 135px; }
          .cube, .cube-face { width: 92px; height: 92px; }
          .cube-front { transform: translateZ(45px); }
          .cube-right { transform: rotateY(90deg) translateZ(45px); }
          .cube-top { transform: rotateX(90deg) translateZ(45px); }
          .cube-shadow { width: 90px; }
        }
      `}</style>
    </>
  );
};

export default LoginPage;
