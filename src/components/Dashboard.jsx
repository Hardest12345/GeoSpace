// Dashboard.jsx - FLEX HORIZONTAL DENGAN KONTEN CENTER & CARD BESAR
import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Target,
  GitFork,
  Box,
  Trophy,
  LogOut,
  User,
  ArrowRight,
  BarChart3,
  Sparkles,
} from "lucide-react";

// =====================================================
// GEOSPACE LOGO
// =====================================================

const GeospaceLogo = () => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Logo mark */}
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div
          className="
            absolute
            inset-0
            rotate-30
            rounded-[7px]
            border-[2px]
            border-[#18aaa6]
          "
        />

        <div
          className="
            relative
            flex
            h-[21px]
            w-[21px]
            items-center
            justify-center
          "
        >
          <div
            className="
              absolute
              h-[15px]
              w-[15px]
              rotate-45
              rounded-[2px]
              border-[1.5px]
              border-[#ff6b5c]
            "
          />

          <div
            className="
              absolute
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#18aaa6]
            "
          />
        </div>
      </div>

      <div className="flex items-center">
        <span
          className="
            text-[20px]
            font-extrabold
            tracking-[1.5px]
            text-[#14263d]
          "
        >
          GEO
        </span>

        <span
          className="
            text-[20px]
            font-extrabold
            tracking-[1.5px]
            text-[#18aaa6]
          "
        >
          SPACE
        </span>
      </div>
    </div>
  );
};

// =====================================================
// DASHBOARD
// =====================================================

export default function Dashboard({ onLogout, onNavigate }) {
  const [namaSiswa, setNamaSiswa] = useState("Siswa");
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const savedName = localStorage.getItem("geospace_user");
    if (savedName) {
      setNamaSiswa(savedName);
    }
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("geospace_user");
    if (onLogout) {
      onLogout();
    }
  };

  const menuCards = [
    {
      id: "naviguide",
      title: "Naviguide",
      subtitle: "Petunjuk Penggunaan",
      description:
        "Panduan dan petunjuk langkah penggunaan e-modul interaktif Geospace.",
      icon: BookOpen,
      isFeatured: false,
    },
    {
      id: "geomission",
      title: "GeoMission",
      subtitle: "Capaian & Tujuan",
      description:
        "Informasi Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP).",
      icon: Target,
      isFeatured: false,
    },
    {
      id: "geomap",
      title: "GeoMap",
      subtitle: "Peta Konsep Materi",
      description:
        "Struktur visual alur materi bangun ruang yang akan dipelajari.",
      icon: GitFork,
      isFeatured: false,
    },
    {
      id: "geoexplore",
      title: "GeoExplore",
      subtitle: "Eksplorasi Interaktif",
      description:
        "Materi, simulasi 3D, dan guided inquiry scaffolding bangun ruang.",
      icon: Box,
      isFeatured: true,
    },
    {
      id: "geochallenge",
      title: "GeoChallenge",
      subtitle: "Asesmen & Papan Aktif",
      description:
        "Uji pemahamanmu lewat kuis sumatif dan susun peta konsep mandiri.",
      icon: Trophy,
      isFeatured: false,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#14263d]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          h-[58px]
          w-full
          border-b
          border-[#edf1f2]
          bg-white/95
          backdrop-blur
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[1400px]
            items-center
            justify-between
            px-5
            sm:px-7
            lg:px-8
          "
        >
          <GeospaceLogo />

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-[34px]
                items-center
                gap-2
                rounded-[9px]
                border
                border-[#e5eeee]
                bg-white
                px-3
                text-[11px]
                font-semibold
                text-[#26364b]
              "
            >
              <div
                className="
                  flex
                  h-[20px]
                  w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#159f9b]
                  text-white
                "
              >
                <User size={12} strokeWidth={2.5} />
              </div>

              <span>
                Halo,{" "}
                <span className="font-bold text-[#159f9b]">{namaSiswa}!</span>
              </span>
            </div>

            <button
              type="button"
              onClick={handleLogoutClick}
              className="
                flex
                h-[34px]
                items-center
                gap-1.5
                rounded-[9px]
                border
                border-[#ffddd7]
                bg-white
                px-3
                text-[11px]
                font-semibold
                text-[#ff6b5c]
                transition
                hover:bg-[#fff5f3]
                hover:border-[#ffb8ae]
                active:scale-[0.98]
              "
            >
              <LogOut size={14} strokeWidth={2} />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main
        className="
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-1
          flex-col
          gap-5
          px-5
          py-5
          sm:px-7
          lg:px-8
        "
      >
        {/* =====================================================
            PROGRESS SECTION
        ====================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[14px]
            border
            border-[#e5eeee]
            bg-gradient-to-r
            from-[#fbfefe]
            to-[#f7fbfb]
            px-5
            py-4
            shadow-[0_3px_15px_rgba(30,70,70,0.05)]
            sm:px-6
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-28
              w-28
              rounded-full
              bg-[#e8f8f7]
              opacity-60
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >
            <div
              className="
                hidden
                h-[46px]
                w-[46px]
                shrink-0
                items-center
                justify-center
                rounded-[13px]
                bg-white
                text-[#159f9b]
                shadow-[0_3px_12px_rgba(21,159,155,0.08)]
                sm:flex
              "
            >
              <BarChart3 size={23} strokeWidth={2.5} />
            </div>

            <div className="min-w-0 flex-1">
              <div
                className="
                  mb-1.5
                  flex
                  flex-col
                  gap-1
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <h2
                    className="
                      text-[14px]
                      font-bold
                      text-[#14263d]
                      sm:text-[15px]
                    "
                  >
                    Progress Pembelajaran Kamu
                  </h2>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      text-[#718096]
                      sm:text-[10px]
                    "
                  >
                    Selesaikan semua modul untuk menyelesaikan petualangan
                    Geospace
                  </p>
                </div>

                <div
                  className="
                    text-[17px]
                    font-extrabold
                    text-[#159f9b]
                    sm:hidden
                  "
                >
                  {progress}%
                  <span className="ml-1 text-[10px] font-semibold">
                    Selesai
                  </span>
                </div>
              </div>

              <div
                className="
                  mt-2
                  h-[8px]
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-[#e6eaeb]
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-[#159f9b]
                    shadow-[0_2px_5px_rgba(21,159,155,0.18)]
                    transition-all
                    duration-700
                    ease-out
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-1
                pr-1
                sm:flex
              "
            >
              <span
                className="
                  text-[18px]
                  font-extrabold
                  text-[#159f9b]
                "
              >
                {progress}%
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  text-[#159f9b]
                "
              >
                Selesai
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            MENU SECTION - FLEX HORIZONTAL DENGAN KONTEN CENTER
        ====================================================== */}

        <section>
          <div className="mb-3.5">
            <h3
              className="
                text-[16px]
                font-bold
                tracking-[-0.2px]
                text-[#14263d]
                sm:text-[17px]
              "
            >
              Menu Navigasi Utama
            </h3>

            <p
              className="
                mt-0.5
                text-[9px]
                text-[#718096]
                sm:text-[10px]
              "
            >
              Pilih modul atau fitur yang ingin kamu akses
            </p>
          </div>

          {/* =================================================
              MENU CARDS - FLEX ROW DENGAN GAP BESAR
          ================================================== */}

          <div className="flex flex-row gap-4">
            {menuCards.map((card) => {
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(card.id);
                    }
                  }}
                  className={`
                    group
                    relative
                    flex
                    flex-1
                    cursor-pointer
                    rounded-[16px]
                    border-2
                    px-6
                    py-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    min-h-[180px]
                    ${
                      card.isFeatured
                        ? `
                          border-[#159f9b]
                          bg-white
                          shadow-[0_8px_30px_rgba(21,159,155,0.15)]
                          ring-2
                          ring-[#159f9b]/20
                          hover:shadow-[0_12px_40px_rgba(21,159,155,0.25)]
                        `
                        : `
                          border-[#edf0f1]
                          bg-white
                          shadow-[0_4px_15px_rgba(30,50,70,0.06)]
                          hover:border-[#9edbd9]
                          hover:shadow-[0_10px_30px_rgba(30,80,80,0.12)]
                        `
                    }
                  `}
                >
                  {/* =================================================
                      FEATURED BADGE
                  ================================================== */}

                  {card.isFeatured && (
                    <>
                      <span
                        className="
                          absolute
                          right-3
                          top-3
                          rounded-full
                          bg-[#ff6b5c]
                          px-3
                          py-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-white
                          shadow-md
                        "
                      >
                        Utama
                      </span>

                      <Sparkles
                        size={14}
                        className="
                          absolute
                          left-7
                          top-5
                          text-[#ffb020]
                          animate-pulse
                        "
                      />

                      <Sparkles
                        size={12}
                        className="
                          absolute
                          right-8
                          top-[80px]
                          text-[#ffb020]
                          animate-pulse
                          delay-300
                        "
                      />
                    </>
                  )}

                  {/* =================================================
                      CARD CONTENT - CENTERED
                  ================================================== */}

                  <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 text-center">
                    {/* Icon - Bigger */}
                    <div
                      className={`
                        flex
                        h-[64px]
                        w-[64px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[16px]
                        transition-all
                        duration-300
                        ${
                          card.isFeatured
                            ? `
                              bg-[#159f9b]
                              text-white
                              shadow-[0_6px_20px_rgba(21,159,155,0.25)]
                              group-hover:bg-[#128e8a]
                              group-hover:shadow-[0_8px_25px_rgba(21,159,155,0.35)]
                              group-hover:scale-105
                            `
                            : `
                              bg-[#eef8f7]
                              text-[#159f9b]
                              group-hover:bg-[#159f9b]
                              group-hover:text-white
                              group-hover:shadow-[0_6px_20px_rgba(21,159,155,0.2)]
                              group-hover:scale-105
                            `
                        }
                      `}
                    >
                      <IconComponent
                        className="h-[32px] w-[32px]"
                        strokeWidth={1.9}
                      />
                    </div>

                    {/* Text Content - Centered */}
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <h4
                          className="
                            text-[16px]
                            font-bold
                            leading-tight
                            text-[#14263d]
                            transition-colors
                            duration-300
                            group-hover:text-[#159f9b]
                          "
                        >
                          {card.title}
                        </h4>
                        <span
                          className="
                            text-[10px]
                            font-semibold
                            leading-tight
                            text-[#159f9b]
                            bg-[#eef8f7]
                            px-2
                            py-0.5
                            rounded-full
                          "
                        >
                          {card.subtitle}
                        </span>
                      </div>

                      <p
                        className="
                          mt-2
                          line-clamp-2
                          text-[10.5px]
                          leading-[16px]
                          text-[#718096]
                          max-w-[200px]
                        "
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Arrow - Bigger & Centered */}
                    <div
                      className={`
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-[10px]
                        font-bold
                        transition-all
                        duration-300
                        ${
                          card.isFeatured
                            ? "text-[#ff6b5c]"
                            : "text-[#26364b] group-hover:text-[#159f9b]"
                        }
                      `}
                    >
                      <span>Akses Fitur</span>
                      <ArrowRight
                        className="
                          h-[18px]
                          w-[18px]
                          transition-all
                          duration-200
                          group-hover:translate-x-1.5
                          group-hover:scale-110
                        "
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-[#edf0f1]
          bg-white
          py-3.5
          text-center
        "
      >
        <p
          className="
            text-[9px]
            text-[#8a96a5]
            sm:text-[10px]
          "
        >
          E-Modul Interaktif Geospace
          <span className="mx-2 text-[#c5cbcf]">•</span>
          Inquiry Scaffolding Model
        </p>
      </footer>
    </div>
  );
}