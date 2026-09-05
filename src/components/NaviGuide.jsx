// src/components/Naviguide.jsx - FIXED DENGAN FLEX ROW
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Cuboid,
  GitFork,
  Home,
  LogIn,
  Trophy,
  Sparkles,
  Info,
  ListChecks,
  Target,
} from "lucide-react";

// =====================================================
// GEOSPACE LOGO - DIPERBESAR
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
// MAIN COMPONENT
// =====================================================

export default function Naviguide({ onNavigate }) {
  // ===================================================
  // STATE
  // ===================================================

  const [activeSection, setActiveSection] = useState(1);
  const [activeMenu, setActiveMenu] = useState("geoexplore");

  // ===================================================
  // SIDEBAR SECTION
  // ===================================================

  const sections = [
    {
      id: 1,
      title: "Halaman Masuk",
      description: "Cara mengakses GEOSPACE dan memasukkan identitas peserta didik.",
      icon: LogIn,
    },
    {
      id: 2,
      title: "Homepage",
      description: "Penjelasan lima menu utama GEOSPACE yang digunakan secara berurutan.",
      icon: Home,
    },
    {
      id: 3,
      title: "Alur Penggunaan",
      description: "Panduan mengikuti proses pembelajaran dari Naviguide hingga GeoChallenge.",
      icon: ListChecks,
    },
  ];

  // ===================================================
  // MENU HOMEPAGE
  // ===================================================

  const menus = [
    {
      id: "naviguide",
      letter: "a.",
      title: "Naviguide",
      subtitle: "Petunjuk Penggunaan",
      icon: BookOpen,
      color: "teal",
    },
    {
      id: "geomission",
      letter: "b.",
      title: "GeoMission",
      subtitle: "Capaian & Tujuan",
      icon: Target,
      color: "coral",
    },
    {
      id: "geomap",
      letter: "c.",
      title: "GeoMap",
      subtitle: "Peta Konsep Materi",
      icon: GitFork,
      color: "teal",
    },
    {
      id: "geoexplore",
      letter: "d.",
      title: "GeoExplore",
      subtitle: "Eksplorasi Interaktif",
      icon: Cuboid,
      color: "teal",
    },
    {
      id: "geochallenge",
      letter: "e.",
      title: "GeoChallenge",
      subtitle: "Asesmen & Evaluasi",
      icon: Trophy,
      color: "coral",
    },
  ];

  // ===================================================
  // CONTENT HOMEPAGE
  // ===================================================

  const contentData = {
    naviguide: {
      title: "Naviguide",
      description:
        "Petunjuk penggunaan GEOSPACE yang membantu peserta didik memahami tahapan pembelajaran sebelum memulai aktivitas.",
      items: [
        "Membaca petunjuk penggunaan GEOSPACE",
        "Memahami fungsi setiap menu pembelajaran",
        "Mengikuti pembelajaran sesuai urutan",
        "Membaca petunjuk sebelum mengerjakan aktivitas",
      ],
      info:
        "Gunakan Naviguide sebagai panduan awal agar kamu memahami cara menggunakan setiap fitur dalam GEOSPACE.",
    },
    geomission: {
      title: "GeoMission",
      description:
        "Menu yang menyajikan capaian dan tujuan pembelajaran yang perlu dicapai selama mempelajari konsep kubus dan balok.",
      items: [
        "Memahami capaian pembelajaran",
        "Mengetahui tujuan pembelajaran",
        "Mengetahui kompetensi yang akan dikembangkan",
        "Memahami target pembelajaran",
      ],
      info:
        "Pelajari capaian dan tujuan pembelajaran terlebih dahulu agar kamu mengetahui arah kegiatan belajar yang akan dilakukan.",
    },
    geomap: {
      title: "GeoMap",
      description:
        "Peta konsep yang membantu melihat hubungan antarmateri bangun ruang sebelum melakukan eksplorasi lebih lanjut.",
      items: [
        "Unsur dan sifat bangun ruang",
        "Mengkonstruk dan mengurai bangun ruang",
        "Visualisasi spasial bangun ruang",
        "Rumus luas permukaan dan volume bangun ruang",
      ],
      info:
        "Gunakan GeoMap untuk melihat keterkaitan materi sehingga kamu memiliki gambaran sebelum masuk ke GeoExplore.",
    },
    geoexplore: {
      title: "GeoExplore",
      description:
        "Pelajari setiap submateri secara berurutan melalui kegiatan eksplorasi yang disusun berdasarkan sintaks Inquiry Scaffolding.",
      items: [
        "Unsur dan sifat bangun ruang",
        "Mengkonstruk dan mengurai bangun ruang",
        "Visualisasi spasial bangun ruang",
        "Rumus luas permukaan dan volume bangun ruang",
      ],
      info:
        "Pada setiap submateri, peserta didik diharapkan membaca penjelasan materi, mengamati ilustrasi atau animasi, mengikuti aktivitas eksplorasi, serta mengerjakan latihan yang tersedia.",
    },
    geochallenge: {
      title: "GeoChallenge",
      description:
        "Menu asesmen yang digunakan untuk menguji pemahaman setelah peserta didik menyelesaikan rangkaian pembelajaran.",
      items: [
        "Mengerjakan kuis atau asesmen",
        "Mengukur pemahaman terhadap materi",
        "Mengevaluasi hasil belajar",
        "Melakukan refleksi terhadap pembelajaran",
      ],
      info:
        "Apabila mengalami kesulitan, pelajari kembali materi pada GeoExplore sebelum mengerjakan kuis di GeoChallenge.",
    },
  };

  const activeContent = contentData[activeMenu];

  // ===================================================
  // NAVIGATION MENU
  // ===================================================

  const currentIndex = menus.findIndex(
    (item) => item.id === activeMenu
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveMenu(menus[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < menus.length - 1) {
      setActiveMenu(menus[currentIndex + 1].id);
    }
  };

  const handleBackDashboard = () => {
    if (onNavigate) {
      onNavigate("dashboard");
    }
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="min-h-screen bg-[#f8fbfb] text-[#14263d]">

      {/* =====================================================
          HEADER - DIPERBESAR
      ====================================================== */}

      <header className="relative border-b border-[#e6eeee] bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-10">

          {/* BACK BUTTON */}
          <button
            type="button"
            onClick={handleBackDashboard}
            className="flex items-center gap-2.5 rounded-[10px] border border-[#bfe8e6] bg-white px-5 py-2.5 text-[13px] font-bold text-[#26364b] transition-all hover:border-[#18aaa6] hover:bg-[#f4fbfb] hover:text-[#18aaa6]"
          >
            <ArrowLeft size={19} />
            <span>Kembali ke Dashboard</span>
          </button>

          {/* LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <GeospaceLogo />
          </div>

          {/* NAVIGUIDE LABEL */}
          <div className="ml-auto flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#18aaa6] text-white">
              <BookOpen size={20} strokeWidth={2} />
            </div>

            <span className="hidden text-[16px] font-bold text-[#14263d] sm:block">
              NAVIGUIDE
            </span>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto w-full max-w-[1400px] px-6 py-7 sm:px-8 sm:py-8 lg:px-10">

        {/* =================================================
            HERO - DIPERBESAR
        ================================================== */}

        <section className="relative mb-6 min-h-[160px] overflow-hidden rounded-[16px] border border-[#e2eeee] bg-gradient-to-r from-[#fbffff] via-[#f5fbfb] to-[#edfafa] px-7 py-6 shadow-[0_3px_15px_rgba(30,70,70,0.04)] sm:px-8 sm:py-7">

          {/* Decorative */}
          <div className="pointer-events-none absolute -right-4 -top-14 h-[130px] w-[300px] rounded-full bg-[#dff6f5] opacity-60" />

          <div className="pointer-events-none absolute right-[120px] top-[14px] h-2 w-2 rounded-full bg-[#ff6b5c]" />

          <div className="pointer-events-none absolute right-[220px] top-[18px] text-[16px] font-bold text-[#18aaa6]">
            +
          </div>

          <div className="relative z-10 flex items-center gap-5">

            {/* Icon */}
            <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-white shadow-[0_5px_16px_rgba(24,170,166,0.22)]">
              <Sparkles size={38} strokeWidth={1.8} />
            </div>

            {/* Text */}
            <div className="min-w-0 max-w-[750px]">
              <h1 className="text-[26px] font-extrabold tracking-[-0.3px] text-[#14263d] sm:text-[28px]">
                PETUNJUK PENGGUNAAN GEOSPACE
              </h1>

              <p className="mt-2 max-w-[700px] text-[14px] leading-[22px] text-[#68788a] sm:text-[15px]">
                Selamat datang di{" "}
                <span className="font-bold text-[#18aaa6]">
                  GEOSPACE
                </span>{" "}
                (Geometry Space), e-modul interaktif yang membantu kamu
                memahami konsep kubus dan balok secara mandiri,
                menarik, dan interaktif melalui pendekatan
                <span className="font-bold text-[#18aaa6]">
                  {" "}Inquiry Scaffolding.
                </span>
              </p>
            </div>

            {/* Decorative Cubes */}
            <div className="absolute bottom-[-6px] right-[70px] hidden h-[75px] w-[190px] items-end justify-center gap-3 lg:flex">

              <div className="absolute bottom-1 left-3 h-[18px] w-[170px] rotate-[-5deg] rounded-[50%] border-[3px] border-[#18aaa6] bg-white shadow-sm" />

              <div className="absolute bottom-[9px] left-[85px] h-[40px] w-[2px] rotate-[8deg] bg-[#18aaa6]" />

              <div className="absolute left-[75px] top-0 h-[37px] w-[37px] rotate-[-1deg] rounded-[4px] bg-[#13aaa6] shadow-[inset_-7px_-7px_0_rgba(0,0,0,0.08)]" />

              <div className="absolute right-[10px] top-[13px] h-[42px] w-[42px] rotate-[1deg] rounded-[4px] bg-[#ff6b5c] shadow-[inset_-7px_-7px_0_rgba(0,0,0,0.08)]" />
            </div>
          </div>
        </section>

        {/* =================================================
            CONTENT LAYOUT - FLEX ROW HORIZONTAL
        ================================================== */}

        <div className="flex flex-row gap-5">

          {/* =================================================
              LEFT SIDEBAR - FIXED WIDTH
          ================================================== */}

          <aside className="flex w-[360px] min-w-[360px] flex-col gap-3">

            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <div
                  key={section.id}
                  className={`overflow-hidden rounded-[14px] border bg-white transition-all duration-200 ${
                    isActive
                      ? "border-[#18aaa6] shadow-[0_4px_14px_rgba(24,170,166,0.08)]"
                      : "border-[#edf0f1] shadow-[0_3px_10px_rgba(30,50,70,0.04)]"
                  }`}
                >

                  {/* Section Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSection(
                        isActive ? null : section.id
                      )
                    }
                    className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left"
                  >

                    <div
                      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-white ${
                        section.id === 3
                          ? "bg-[#ff6b5c]"
                          : "bg-[#18aaa6]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h2
                        className={`text-[15px] font-bold leading-[20px] ${
                          isActive
                            ? "text-[#14263d]"
                            : "text-[#26364b]"
                        }`}
                      >
                        {section.id}. {section.title}
                      </h2>

                      <p className="mt-0.5 text-[12px] leading-[16px] text-[#718096]">
                        {section.description}
                      </p>
                    </div>

                    {isActive ? (
                      <ChevronUp
                        size={22}
                        className="shrink-0 text-[#18aaa6]"
                      />
                    ) : (
                      <ChevronDown
                        size={22}
                        className="shrink-0 text-[#18aaa6]"
                      />
                    )}
                  </button>

                  {/* =================================================
                      SECTION CONTENT
                  ================================================== */}

                  {isActive && (
                    <div className="border-t border-[#eef4f4] bg-[#fbfefe] px-4 py-3.5">

                      {/* HALAMAN MASUK */}
                      {section.id === 1 && (
                        <div className="space-y-3">

                          <div className="flex gap-2.5">
                            <CircleHelp
                              size={17}
                              className="mt-0.5 shrink-0 text-[#18aaa6]"
                            />

                            <p className="text-[12px] leading-[17px] text-[#718096]">
                              Buka GEOSPACE melalui perangkat yang
                              digunakan.
                            </p>
                          </div>

                          <div className="flex gap-2.5">
                            <CircleHelp
                              size={17}
                              className="mt-0.5 shrink-0 text-[#18aaa6]"
                            />

                            <p className="text-[12px] leading-[17px] text-[#718096]">
                              Masukkan identitas peserta didik pada
                              kolom yang tersedia.
                            </p>
                          </div>

                          <div className="flex gap-2.5">
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#18aaa6]"
                            />

                            <p className="text-[12px] leading-[17px] text-[#718096]">
                              Klik tombol{" "}
                              <span className="font-bold text-[#18aaa6]">
                                Masuk
                              </span>{" "}
                              untuk mengakses halaman utama
                              (Homepage).
                            </p>
                          </div>

                        </div>
                      )}

                      {/* HOMEPAGE */}
                      {section.id === 2 && (
                        <div className="flex gap-2.5 text-[12px] leading-[17px] text-[#718096]">

                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[#18aaa6]"
                          />

                          <span>
                            Homepage memiliki lima menu utama yang
                            digunakan secara berurutan, yaitu
                            Naviguide, GeoMission, GeoMap, GeoExplore,
                            dan GeoChallenge.
                          </span>

                        </div>
                      )}

                      {/* ALUR */}
                      {section.id === 3 && (
                        <div className="flex gap-2.5 text-[12px] leading-[17px] text-[#718096]">

                          <ListChecks
                            size={17}
                            className="mt-0.5 shrink-0 text-[#ff6b5c]"
                          />

                          <span>
                            Ikuti tahapan pembelajaran secara berurutan
                            dan manfaatkan setiap fitur yang tersedia
                            untuk membantu memahami konsep kubus dan
                            balok.
                          </span>

                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}

          </aside>

          {/* =================================================
              RIGHT CONTENT - FLEX-1
          ================================================== */}

          <section className="flex flex-1 flex-col rounded-[14px] border border-[#edf0f1] bg-white p-6 shadow-[0_4px_15px_rgba(30,50,70,0.04)] sm:p-7">

            {/* =================================================
                SECTION 1 — HALAMAN MASUK
            ================================================== */}

            {activeSection === 1 && (
              <div className="flex flex-1 flex-col">

                <div className="mb-5 px-1">
                  <div className="mb-2 flex items-center gap-2.5">
                    <LogIn
                      size={22}
                      className="text-[#18aaa6]"
                    />

                    <h2 className="text-[20px] font-bold text-[#18aaa6]">
                      Halaman Masuk
                    </h2>
                  </div>

                  <p className="text-[13px] leading-[19px] text-[#718096]">
                    Ikuti langkah berikut untuk mulai menggunakan
                    GEOSPACE.
                  </p>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">

                  {/* Step 1 */}
                  <div className="rounded-[14px] border border-[#e5eeee] bg-[#fbfefe] p-5">

                    <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#18aaa6] text-[15px] font-extrabold text-white">
                      1
                    </div>

                    <h3 className="text-[14px] font-bold text-[#26364b]">
                      Buka GEOSPACE
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-[18px] text-[#718096]">
                      Buka GEOSPACE melalui perangkat yang digunakan.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="rounded-[14px] border border-[#e5eeee] bg-[#fbfefe] p-5">

                    <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#18aaa6] text-[15px] font-extrabold text-white">
                      2
                    </div>

                    <h3 className="text-[14px] font-bold text-[#26364b]">
                      Masukkan Identitas
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-[18px] text-[#718096]">
                      Masukkan identitas peserta didik pada kolom
                      yang telah tersedia.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="rounded-[14px] border border-[#e5eeee] bg-[#fbfefe] p-5">

                    <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#ff6b5c] text-[15px] font-extrabold text-white">
                      3
                    </div>

                    <h3 className="text-[14px] font-bold text-[#26364b]">
                      Klik Masuk
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-[18px] text-[#718096]">
                      Klik tombol{" "}
                      <span className="font-bold text-[#ff6b5c]">
                        Masuk
                      </span>{" "}
                      untuk mengakses Homepage.
                    </p>
                  </div>

                </div>

                {/* Info */}
                <div className="mt-5 flex items-start gap-2.5 rounded-[12px] bg-[#f1f8f8] px-4 py-3">

                  <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-white">
                    <Info size={14} strokeWidth={2.5} />
                  </div>

                  <p className="text-[12px] leading-[17px] text-[#718096]">
                    Pastikan identitas yang dimasukkan sudah benar
                    sebelum melanjutkan ke Homepage.
                  </p>

                </div>

              </div>
            )}

            {/* =================================================
                SECTION 2 — HOMEPAGE
            ================================================== */}

            {activeSection === 2 && (
              <div className="flex flex-1 flex-col">

                {/* Title */}
                <div className="mb-5 px-1">

                  <h2 className="text-[20px] font-bold text-[#18aaa6]">
                    Homepage & Menu Utama
                  </h2>

                  <p className="mt-1.5 text-[13px] leading-[19px] text-[#718096]">
                    Homepage memiliki lima menu utama yang digunakan
                    secara berurutan dalam proses pembelajaran.
                  </p>

                </div>

                {/* Inner - FLEX ROW */}
                <div className="flex flex-1 flex-row gap-4">

                  {/* =================================================
                      MENU LIST - FIXED WIDTH
                  ================================================== */}

                  <div className="flex w-[220px] min-w-[220px] flex-col rounded-[12px] border border-[#edf0f1] bg-[#fcfefe] p-2">

                    {menus.map((menu) => {

                      const Icon = menu.icon;
                      const selected = activeMenu === menu.id;

                      return (
                        <button
                          key={menu.id}
                          type="button"
                          onClick={() => setActiveMenu(menu.id)}
                          className={`group flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left transition-all duration-200 ${
                            selected
                              ? "border border-[#bfe8e6] bg-[#eaf8f7] shadow-[0_2px_7px_rgba(24,170,166,0.06)]"
                              : "border border-transparent hover:bg-[#f5fbfb]"
                          }`}
                        >

                          <div
                            className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-white ${
                              menu.color === "coral"
                                ? "bg-[#ff6b5c]"
                                : "bg-[#18aaa6]"
                            }`}
                          >
                            <Icon size={20} strokeWidth={2} />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-center gap-1.5">

                              <span
                                className={`text-[12px] font-bold ${
                                  menu.color === "coral"
                                    ? "text-[#ff6b5c]"
                                    : "text-[#18aaa6]"
                                }`}
                              >
                                {menu.letter}
                              </span>

                              <span
                                className={`truncate text-[13px] font-bold ${
                                  selected
                                    ? "text-[#18aaa6]"
                                    : "text-[#26364b]"
                                }`}
                              >
                                {menu.title}
                              </span>

                            </div>

                            <p className="truncate text-[11px] text-[#718096]">
                              {menu.subtitle}
                            </p>

                          </div>

                          {selected && (
                            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#18aaa6] shadow-sm">
                              <ArrowRight size={16} />
                            </div>
                          )}

                        </button>
                      );
                    })}

                  </div>

                  {/* =================================================
                      MENU DESCRIPTION - FLEX-1
                  ================================================== */}

                  <div className="relative flex-1 overflow-hidden rounded-[12px] border border-[#edf0f1] bg-white px-6 py-5">

                    <div
                      className={`absolute left-0 top-0 h-full w-[4px] ${
                        activeMenu === "geochallenge"
                          ? "bg-[#ff6b5c]"
                          : "bg-[#18aaa6]"
                      }`}
                    />

                    <div className="pl-3">

                      <div className="mb-3 flex items-center gap-3">

                        {(() => {
                          const menu = menus.find(
                            (item) => item.id === activeMenu
                          );

                          const Icon = menu.icon;

                          return (
                            <div
                              className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-white ${
                                menu.color === "coral"
                                  ? "bg-[#ff6b5c]"
                                  : "bg-[#18aaa6]"
                              }`}
                            >
                              <Icon size={22} />
                            </div>
                          );
                        })()}

                        <div>

                          <h3 className="text-[18px] font-bold text-[#26364b]">
                            {activeContent.title}
                          </h3>

                          <p className="text-[11px] text-[#8a96a5]">
                            {menus.find(
                              (item) => item.id === activeMenu
                            )?.subtitle}
                          </p>

                        </div>

                      </div>

                      {/* Description */}
                      <p className="text-[13px] leading-[19px] text-[#718096]">
                        {activeContent.description}
                      </p>

                      {/* =================================================
                          GEOEXPLORE SPECIAL CONTENT
                      ================================================== */}

                      {activeMenu === "geoexplore" && (
                        <div className="mt-4">

                          <div className="mb-2.5 rounded-[10px] bg-[#eaf8f7] px-3 py-2">

                            <p className="text-[12px] font-bold text-[#18aaa6]">
                              Submateri yang dipelajari:
                            </p>

                          </div>

                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                            {activeContent.items.map(
                              (item, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-2 rounded-[10px] border border-[#edf2f2] bg-[#fcfefe] px-3 py-2.5"
                                >

                                  <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[11px] font-bold text-white">
                                    {index + 1}
                                  </div>

                                  <span className="text-[12px] leading-[16px] text-[#26364b]">
                                    {item}
                                  </span>

                                </div>
                              )
                            )}

                          </div>

                        </div>
                      )}

                      {/* =================================================
                          OTHER MENU CONTENT
                      ================================================== */}

                      {activeMenu !== "geoexplore" && (
                        <div className="mt-4 rounded-[12px] border border-[#edf2f2] bg-[#fcfefe] px-4 py-3">

                          <div className="space-y-2.5">

                            {activeContent.items.map(
                              (item, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-2.5"
                                >

                                  <CheckCircle2
                                    size={17}
                                    strokeWidth={2}
                                    className="mt-[1px] shrink-0 text-[#18aaa6]"
                                  />

                                  <span className="text-[12px] leading-[16px] text-[#26364b]">
                                    {item}
                                  </span>

                                </div>
                              )
                            )}

                          </div>

                        </div>
                      )}

                      {/* Info */}
                      <div className="mt-4 flex items-start gap-2.5 rounded-[12px] bg-[#f1f8f8] px-4 py-3">

                        <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-white">
                          <Info size={14} strokeWidth={2.5} />
                        </div>

                        <p className="text-[12px] leading-[17px] text-[#718096]">
                          {activeContent.info}
                        </p>

                      </div>

                    </div>
                  </div>

                </div>

                {/* Bottom Navigation */}
                <div className="mt-4 flex items-center justify-between border-t border-[#edf0f1] pt-4">

                  {/* Previous */}
                  <button
                    type="button"
                    disabled={currentIndex === 0}
                    onClick={handlePrevious}
                    className={`flex h-[44px] items-center gap-2.5 rounded-[10px] border px-5 text-[12px] font-bold transition-all ${
                      currentIndex === 0
                        ? "cursor-not-allowed border-[#edf0f1] text-[#c5cccf]"
                        : "border-[#e5eeee] text-[#18aaa6] hover:border-[#9edbd9] hover:bg-[#f4fbfb]"
                    }`}
                  >
                    <ArrowLeft size={18} />
                    <span>Sebelumnya</span>
                  </button>

                  {/* Indicator */}
                  <div className="hidden items-center gap-2 sm:flex">

                    {menus.map((menu, index) => (
                      <button
                        key={menu.id}
                        type="button"
                        onClick={() => setActiveMenu(menu.id)}
                        className={`h-[8px] rounded-full transition-all ${
                          index === currentIndex
                            ? "w-[28px] bg-[#18aaa6]"
                            : "w-[8px] bg-[#d9e6e6]"
                        }`}
                      />
                    ))}

                  </div>

                  {/* Next */}
                  <button
                    type="button"
                    disabled={
                      currentIndex === menus.length - 1
                    }
                    onClick={handleNext}
                    className={`flex h-[44px] items-center gap-2.5 rounded-[10px] px-6 text-[12px] font-bold text-white transition-all ${
                      currentIndex === menus.length - 1
                        ? "cursor-not-allowed bg-[#c9d5d5]"
                        : "bg-[#ff5d4d] shadow-[0_4px_10px_rgba(255,93,77,0.16)] hover:bg-[#ef4e3e]"
                    }`}
                  >
                    <span>Selanjutnya</span>
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            )}

            {/* =================================================
                SECTION 3 — ALUR PENGGUNAAN
            ================================================== */}

            {activeSection === 3 && (
              <div className="flex flex-1 flex-col">

                <div className="mb-5 px-1">

                  <div className="mb-2 flex items-center gap-2.5">

                    <ListChecks
                      size={23}
                      className="text-[#18aaa6]"
                    />

                    <h2 className="text-[20px] font-bold text-[#18aaa6]">
                      Alur Penggunaan
                    </h2>

                  </div>

                  <p className="text-[13px] leading-[19px] text-[#718096]">
                    Ikuti tahapan pembelajaran GEOSPACE secara
                    berurutan agar proses belajar berlangsung optimal.
                  </p>

                </div>

                {/* =================================================
                    FLOW - GRID
                ================================================== */}

                <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* 1 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fbfefe] px-4 py-3.5 transition-all hover:border-[#bfe8e6] hover:bg-[#f5fbfb]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[13px] font-extrabold text-white">
                      1
                    </div>

                    <p className="text-[12px] leading-[18px] text-[#26364b]">
                      Gunakan menu pembelajaran secara berurutan
                      mulai dari{" "}
                      <span className="font-bold text-[#18aaa6]">
                        Naviguide
                      </span>{" "}
                      hingga{" "}
                      <span className="font-bold text-[#ff5d4d]">
                        GeoChallenge
                      </span>
                      .
                    </p>

                  </div>

                  {/* 2 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fbfefe] px-4 py-3.5 transition-all hover:border-[#bfe8e6] hover:bg-[#f5fbfb]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[13px] font-extrabold text-white">
                      2
                    </div>

                    <p className="text-[12px] leading-[18px] text-[#26364b]">
                      Bacalah setiap petunjuk sebelum mengerjakan
                      aktivitas.
                    </p>

                  </div>

                  {/* 3 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fbfefe] px-4 py-3.5 transition-all hover:border-[#bfe8e6] hover:bg-[#f5fbfb]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[13px] font-extrabold text-white">
                      3
                    </div>

                    <p className="text-[12px] leading-[18px] text-[#26364b]">
                      Kerjakan setiap latihan secara mandiri.
                    </p>

                  </div>

                  {/* 4 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fbfefe] px-4 py-3.5 transition-all hover:border-[#bfe8e6] hover:bg-[#f5fbfb]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[13px] font-extrabold text-white">
                      4
                    </div>

                    <p className="text-[12px] leading-[18px] text-[#26364b]">
                      Manfaatkan visualisasi dan animasi pada{" "}
                      <span className="font-bold text-[#18aaa6]">
                        GeoExplore
                      </span>{" "}
                      untuk membantu memahami konsep bangun ruang.
                    </p>

                  </div>

                  {/* 5 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fbfefe] px-4 py-3.5 transition-all hover:border-[#bfe8e6] hover:bg-[#f5fbfb]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-[13px] font-extrabold text-white">
                      5
                    </div>

                    <p className="text-[12px] leading-[18px] text-[#26364b]">
                      Apabila mengalami kesulitan, pelajari kembali
                      materi sebelum mengerjakan kuis pada{" "}
                      <span className="font-bold text-[#ff5d4d]">
                        GeoChallenge
                      </span>
                      .
                    </p>

                  </div>

                  {/* 6 */}
                  <div className="flex items-start gap-3 rounded-[12px] border border-[#e5eeee] bg-[#fff7f5] px-4 py-3.5 transition-all hover:border-[#ffd0c9]">

                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#ff6b5c] text-[13px] font-extrabold text-white">
                      6
                    </div>

                    <p className="text-[12px] font-medium leading-[18px] text-[#26364b]">
                      Selamat belajar dan bereksplorasi bersama{" "}
                      <span className="font-extrabold text-[#18aaa6]">
                        GEOSPACE
                      </span>{" "}
                      untuk memahami konsep kubus dan balok secara
                      lebih mudah, menarik, dan interaktif.
                    </p>

                  </div>

                </div>

                {/* =================================================
                    FLOW VISUAL
                ================================================== */}

                <div className="mt-5 rounded-[14px] border border-[#e5eeee] bg-[#fcfefe] p-4">

                  <p className="mb-3 text-center text-[12px] font-bold text-[#718096]">
                    URUTAN PEMBELAJARAN
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2">

                    {[
                      {
                        name: "Naviguide",
                        color: "teal",
                      },
                      {
                        name: "GeoMission",
                        color: "coral",
                      },
                      {
                        name: "GeoMap",
                        color: "teal",
                      },
                      {
                        name: "GeoExplore",
                        color: "teal",
                      },
                      {
                        name: "GeoChallenge",
                        color: "coral",
                      },
                    ].map((item, index, array) => (
                      <React.Fragment key={item.name}>

                        <div
                          className={`rounded-full px-4 py-2.5 text-[11px] font-bold text-white ${
                            item.color === "coral"
                              ? "bg-[#ff6b5c]"
                              : "bg-[#18aaa6]"
                          }`}
                        >
                          {item.name}
                        </div>

                        {index < array.length - 1 && (
                          <ArrowRight
                            size={17}
                            className="text-[#b5c5c5]"
                          />
                        )}

                      </React.Fragment>
                    ))}

                  </div>

                </div>

              </div>
            )}

          </section>
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-[#edf0f1] bg-white py-3.5 text-center">

        <p className="text-[12px] text-[#8a96a5] sm:text-[13px]">
          Inquiry Scaffolding Model
          <span className="mx-2 text-[#c5cbcf]">
            •
          </span>
          Geospace 2026
        </p>

      </footer>
    </div>
  );
}