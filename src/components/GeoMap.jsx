// src/components/GeoMap.jsx

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Maximize,
  Minus,
  Plus,
  RotateCcw,
  Shapes,
} from "lucide-react";

// =====================================================
// GEOSPACE LOGO
// =====================================================

const GeospaceLogo = () => {
  return (
    <img
      src="/images/Geospace.png"
      alt="GeoSpace Logo"
      className="h-10 w-auto object-contain"
    />
  );
};

// =====================================================
// ZOOM CONTROL
// =====================================================

const ZoomButton = ({ children, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-[42px] flex-col items-center justify-center gap-[2px] rounded-[9px] border border-[#E7ECEF] bg-white px-2 py-1.5 text-[#26364B] shadow-[0_2px_7px_rgba(30,50,70,0.05)] transition hover:border-[#B9E3E1] hover:text-[#18AAA6]"
      title={label}
    >
      {children}

      <span className="text-[7px] font-medium text-[#718096]">{label}</span>
    </button>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoMap({
  onBackToDashboard,
  onNavigateNext,
  onNavigatePrev,
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // ===================================================
  // ZOOM
  // ===================================================

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleFullscreen = () => {
    const element = document.documentElement;

    if (!document.fullscreenElement) {
      element.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#26364B]">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="h-[58px] shrink-0 border-b border-[#EDF1F2] bg-white">
        <div className="relative mx-auto flex h-full w-full max-w-[1020px] items-center px-3 sm:px-4">
          {/* Dashboard */}
          <button
            type="button"
            onClick={onBackToDashboard}
            className="flex h-[38px] items-center gap-2 rounded-[8px] border border-[#BDE4E2] bg-white px-3 text-[11px] font-bold text-[#188F8C] transition hover:bg-[#F3FBFA]"
          >
            <ArrowLeft size={17} strokeWidth={2} />

            <span>Dashboard</span>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <GeospaceLogo />
          </div>

          {/* Current page */}
          <div className="ml-auto">
            <div className="flex h-[38px] items-center gap-2 rounded-[8px] border border-[#CBE8E7] bg-white px-4 text-[#188F8C]">
              <Shapes size={18} strokeWidth={2} />

              <span className="text-[11px] font-bold">GeoMap</span>
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto flex w-full max-w-[1020px] flex-1 flex-col px-2 py-2 sm:px-3">
        {/* =================================================
            MAP CONTAINER
        ================================================= */}

        <section className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[#E7ECEE] bg-white shadow-[0_3px_14px_rgba(30,60,70,0.04)]">
          {/* =================================================
              DECORATION
          ================================================= */}

          <div className="pointer-events-none absolute right-0 top-[80px] h-[180px] w-[110px] opacity-50">
            <div
              className="absolute right-0 top-0 h-[130px] w-[130px]"
              style={{
                backgroundImage:
                  "radial-gradient(#BDEAE8 1.2px, transparent 1.2px)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-[160px] opacity-50">
            <div
              className="absolute bottom-0 left-0 h-[90px] w-[140px]"
              style={{
                backgroundImage:
                  "radial-gradient(#BDEAE8 1.2px, transparent 1.2px)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>

          {/* =================================================
              TOP TITLE
          ================================================= */}

          <div className="relative z-10 flex shrink-0 items-start justify-between px-5 pt-4">
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[10px] bg-[#159D99] text-white shadow-[0_4px_10px_rgba(21,157,153,0.16)]">
                <Shapes size={30} strokeWidth={2} />
              </div>

              <div className="border-l-[3px] border-[#18AAA6] pl-3">
                <h1 className="text-[19px] font-extrabold tracking-[-0.3px] text-[#14263D]">
                  PETA KONSEP PEMBELAJARAN
                </h1>

                <p className="mt-1 text-[10px] leading-[14px] text-[#718096]">
                  Bagan alur hubungan materi{" "}
                  <span className="font-bold text-[#159D99]">
                    Bangun Ruang (Kubus &amp; Balok)
                  </span>{" "}
                  dalam e-modul{" "}
                  <span className="font-bold text-[#159D99]">Geospace.</span>
                </p>
              </div>
            </div>

            {/* =================================================
                ZOOM CONTROLS
            ================================================= */}

            <div className="flex items-center gap-1.5 rounded-[10px] border border-[#E4EAEC] bg-white p-1.5 shadow-[0_3px_12px_rgba(30,60,70,0.07)]">
              <ZoomButton label="Perkecil" onClick={handleZoomOut}>
                <Minus size={16} strokeWidth={2.5} />
              </ZoomButton>

              <ZoomButton label="Perbesar" onClick={handleZoomIn}>
                <Plus size={16} strokeWidth={2.5} />
              </ZoomButton>

              <div className="flex h-[42px] min-w-[58px] flex-col items-center justify-center rounded-[8px] border border-[#E0E7EA] bg-white">
                <span className="text-[11px] font-bold text-[#26364B]">
                  {Math.round(zoomLevel * 100)}%
                </span>

                <span className="text-[7px] text-[#718096]">Ukuran</span>
              </div>

              <ZoomButton label="Reset" onClick={handleResetZoom}>
                <RotateCcw size={16} strokeWidth={2} />
              </ZoomButton>

              <ZoomButton label="Penuh" onClick={handleFullscreen}>
                <Maximize size={15} strokeWidth={2} />
              </ZoomButton>
            </div>
          </div>

          {/* =================================================
              CONCEPT MAP IMAGE
          ================================================= */}

          <div className="relative flex flex-1 items-center justify-center overflow-auto px-4 py-4">
            <div
              className="relative transition-transform duration-300"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center center",
              }}
            >
              {/* 
                ===================================================
                GANTI src DENGAN PATH GAMBAR MINDMAP ANDA
                ===================================================
                Contoh:
                - Jika gambar di folder public: "/images/mindmap.png"
                - Jika gambar di folder src/assets: require("../assets/mindmap.png")
                - Jika dari URL: "https://example.com/mindmap.png"
              */}
              <img
                src="/images/mindmap-geospace.png"
                alt="Peta Konsep Bangun Ruang - Kubus dan Balok"
                className="max-h-[70vh] w-auto rounded-[8px] border border-[#E7ECEE] shadow-[0_4px_20px_rgba(30,60,70,0.08)]"
                style={{
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />

              {/* 
                ===================================================
                FALLBACK jika gambar tidak ditemukan
                ===================================================
              */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                {/* <div className="rounded-[10px] bg-white/90 px-6 py-4 text-center shadow-lg border border-[#E7ECEE]">
                  <Shapes size={40} className="mx-auto text-[#159D99]" />
                  <p className="mt-2 text-[12px] font-medium text-[#526174]">
                    Peta Konsep tidak tersedia
                  </p>
                  <p className="text-[10px] text-[#8A96A5]">
                    Silakan tambahkan gambar mindmap
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          {/* 
            ===================================================
            KETERANGAN GAMBAR
            ===================================================
          */}
          <div className="relative z-20 shrink-0 border-t border-[#E8EDEE] bg-[#FAFCFC] px-4 py-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-[9px] text-[#718096]">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-full bg-[#159D99]" />
                Konsep Utama
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-full bg-[#2365C9]" />
                Sub Konsep
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-0.5 w-4 bg-[#64748B]" />
                Hubungan Konsep
              </span>
              <span className="text-[#B0BCC8]">|</span>
              <span>Gunakan tombol zoom untuk memperbesar/memperkecil</span>
            </div>
          </div>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="relative z-20 flex shrink-0 items-center justify-between border-t border-[#E8EDEE] bg-white px-3 py-2">
            <button
              type="button"
              onClick={onNavigatePrev}
              className="flex h-[36px] items-center gap-2 rounded-[8px] border border-[#BCE4E2] bg-white px-4 text-[10px] font-bold text-[#159D99] shadow-[0_2px_7px_rgba(24,170,166,0.04)] transition hover:bg-[#F4FBFA]"
            >
              <ArrowLeft size={17} />

              <span>Kembali ke GeoMission</span>
            </button>

            <button
              type="button"
              onClick={onNavigateNext}
              className="group flex h-[36px] items-center gap-3 rounded-[8px] bg-[#159D99] px-5 text-[10px] font-bold text-white shadow-[0_4px_10px_rgba(21,157,153,0.18)] transition hover:bg-[#108C89]"
            >
              <span>Lanjut ke GeoExplore</span>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
