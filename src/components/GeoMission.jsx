// src/components/GeoMission.jsx - DENGAN UKURAN FONT YANG LEBIH BESAR

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  Award,
  Sparkles,
} from "lucide-react";

// =====================================================
// GEOSPACE LOGO
// =====================================================

const GeospaceLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo mark */}
      <div className="relative flex h-[42px] w-[42px] items-center justify-center">
        {/* Cube */}
        <div
          className="
            absolute
            h-[28px]
            w-[28px]
            rotate-45
            rounded-[2px]
            border-[2px]
            border-[#18aaa6]
          "
        />

        {/* Cube vertical */}
        <div
          className="
            absolute
            h-[28px]
            w-[2px]
            bg-[#18aaa6]
          "
        />

        {/* Cube diagonal */}
        <div
          className="
            absolute
            h-[2px]
            w-[28px]
            rotate-[30deg]
            bg-[#18aaa6]
          "
        />

        {/* Center */}
        <div
          className="
            absolute
            h-[10px]
            w-[10px]
            rounded-full
            bg-[#ff6b5c]
          "
        />
      </div>

      {/* Text */}
      <div className="flex items-center">
        <span
          className="
            text-[25px]
            font-extrabold
            tracking-[2px]
            text-[#18aaa6]
          "
        >
          GEO
        </span>

        <span
          className="
            text-[25px]
            font-extrabold
            tracking-[2px]
            text-[#14263d]
          "
        >
          SPACE
        </span>
      </div>
    </div>
  );
};

// =====================================================
// HERO ILLUSTRATION
// =====================================================

const GeoMissionIllustration = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[25px]
        top-0
        hidden
        h-full
        w-[360px]
        lg:block
      "
    >
      {/* Decorative orbit */}
      <div
        className="
          absolute
          right-[30px]
          top-[48px]
          h-[65px]
          w-[255px]
          rounded-[50%]
          border
          border-dashed
          border-[#18aaa6]/50
          rotate-[5deg]
        "
      />

      {/* Small dots */}
      <div className="absolute right-[295px] top-[51px] h-2 w-2 rounded-full bg-[#ff6b5c]" />
      <div className="absolute right-[52px] top-[30px] h-2 w-2 rounded-full bg-[#ff6b5c]" />

      {/* Plus */}
      <span className="absolute right-[210px] top-[17px] text-[20px] font-bold text-[#18aaa6]">
        +
      </span>

      <span className="absolute right-[110px] top-[48px] text-[17px] font-bold text-[#18aaa6]">
        +
      </span>

      {/* Small star */}
      <span className="absolute right-[160px] top-[20px] text-[14px] text-[#ff8c80]">
        ✦
      </span>

      {/* BOOK */}
      <div
        className="
          absolute
          bottom-[9px]
          right-[55px]
          h-[42px]
          w-[230px]
          rotate-[-4deg]
          rounded-[50%]
          border-[3px]
          border-[#18aaa6]
          bg-white
          shadow-[0_5px_10px_rgba(20,80,80,0.08)]
        "
      />

      <div
        className="
          absolute
          bottom-[12px]
          right-[166px]
          h-[48px]
          w-[3px]
          rotate-[8deg]
          bg-[#18aaa6]
        "
      />

      {/* BOOK PAGE */}
      <div
        className="
          absolute
          bottom-[23px]
          right-[72px]
          h-[30px]
          w-[210px]
          rounded-[50%]
          bg-[#f9ffff]
          shadow-[0_2px_8px_rgba(20,80,80,0.05)]
        "
      />

      {/* CUBE LEFT */}
      <div
        className="
          absolute
          right-[175px]
          top-[20px]
          h-[43px]
          w-[43px]
          rounded-[5px]
          bg-[#16aaa6]
          shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.08)]
        "
      />

      {/* CUBE LEFT SIDE */}
      <div
        className="
          absolute
          right-[175px]
          top-[20px]
          h-[43px]
          w-[43px]
          rounded-[5px]
          bg-gradient-to-br
          from-[#2ac5c1]
          to-[#0e9692]
          opacity-50
        "
      />

      {/* CUBE RIGHT */}
      <div
        className="
          absolute
          right-[72px]
          top-[35px]
          h-[45px]
          w-[45px]
          rounded-[5px]
          bg-[#ff6858]
          shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.08)]
        "
      />
    </div>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoMission({
  onBackToDashboard,
  onNavigateNext,
  onNavigatePrev,
}) {
  // ===================================================
  // TUJUAN PEMBELAJARAN
  // ===================================================

  const tujuanPembelajaran = [
    {
      id: 1,
      taxonomies: "C3",
      title: "Mengenal Unsur & Sifat",
      desc: "Peserta didik mampu menguraikan unsur dan sifat bangun ruang melalui eksplorasi fitur interaktif pada e-modul Geospace minimal tiga sifat dan tiga unsur secara benar.",
    },
    {
      id: 2,
      taxonomies: "C4",
      title: "Mengonstruksi & Menguraikan",
      desc: "Peserta didik mampu menganalisis bangun ruang melalui kegiatan mengkonstruksi dan menguraikan kubus dan balok menggunakan simulasi interaktif pada e-modul Geospace dengan menyajikan hasil analisis secara sistematis dan benar.",
    },
    {
      id: 3,
      taxonomies: "C4",
      title: "Visualisasi Spasial",
      desc: "Peserta didik mampu menganalisis visualisasi spasial bangun ruang melalui pengamatan tampilan digital (rotasi, tampak ruang) pada e-modul Geospace dengan menjelaskan perbedaan tampilan minimal dua sudut pandang secara logis.",
    },
    {
      id: 4,
      taxonomies: "C5",
      title: "Membuktikan Rumus",
      desc: "Peserta didik mampu membuktikan rumus luas permukaan dan volume bangun ruang melalui eksplorasi dan pemecahan masalah pada e-modul Geospace dengan menyusun langkah pembuktian secara runtut dan memberikan alasan matematis yang benar.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#14263d]">
      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          h-[64px]
          w-full
          border-b
          border-[#edf1f2]
          bg-white/95
          backdrop-blur
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            h-full
            w-full
            max-w-[1400px]
            items-center
            justify-between
            px-3
            sm:px-5
            lg:px-6
          "
        >
          {/* BACK TO DASHBOARD */}

          <button
            type="button"
            onClick={onBackToDashboard}
            className="
              group
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[8px]
              border
              border-[#e4eeee]
              bg-white
              px-4
              text-[12px]
              font-bold
              text-[#159f9b]
              shadow-[0_2px_8px_rgba(30,70,70,0.04)]
              transition-all
              hover:border-[#9edbd9]
              hover:bg-[#f5fbfb]
            "
          >
            <ArrowLeft
              size={18}
              strokeWidth={2.4}
              className="
                transition-transform
                duration-200
                group-hover:-translate-x-1
              "
            />

            <span>Dashboard</span>
          </button>

          {/* CENTER LOGO */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <GeospaceLogo />
          </div>

          {/* RIGHT LABEL */}

          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-[27px]
                w-[27px]
                items-center
                justify-center
                rounded-full
                text-[#159f9b]
              "
            >
              <Compass size={25} strokeWidth={2.3} />
            </div>

            <span
              className="
                hidden
                text-[14px]
                font-bold
                text-[#14263d]
                sm:block
              "
            >
              GEOMISSION
            </span>
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main
        className="
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
          gap-4
          px-3
          py-4
          sm:px-5
          lg:px-6
        "
      >
        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative
            min-h-[160px]
            overflow-hidden
            rounded-[11px]
            border
            border-[#bfe4e3]
            bg-gradient-to-r
            from-[#effafa]
            via-[#f8ffff]
            to-[#e8f8f7]
            px-6
            py-5
            shadow-[0_3px_12px_rgba(30,80,80,0.04)]
            sm:px-8
          "
        >
          {/* Background decorative shape */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[100px]
              h-[220px]
              w-[450px]
              rounded-full
              bg-[#d9f3f2]
              opacity-50
            "
          />

          {/* Content */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-6
            "
          >
            {/* Hero icon */}

            <div
              className="
                flex
                h-[100px]
                w-[100px]
                shrink-0
                items-center
                justify-center
                rounded-[18px]
                bg-[#159f9b]
                text-white
                shadow-[0_7px_20px_rgba(21,159,155,0.22)]
              "
            >
              <div className="relative">
                <Compass size={54} strokeWidth={1.5} />

                <Sparkles
                  size={20}
                  className="
                    absolute
                    -right-3
                    -top-3
                    text-[#ffd54f]
                  "
                />

                <Sparkles
                  size={15}
                  className="
                    absolute
                    -bottom-3
                    -right-5
                    text-[#ffd54f]
                  "
                />
              </div>
            </div>

            {/* Text */}

            <div className="min-w-0 max-w-[600px]">
              <div
                className="
                  mb-2
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#159f9b]
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  text-white
                  shadow-[0_3px_8px_rgba(21,159,155,0.12)]
                "
              >
                <Sparkles size={12} strokeWidth={2.5} />
                Target Pembelajaran
              </div>

              <h1
                className="
                  text-[24px]
                  font-extrabold
                  leading-tight
                  tracking-[-0.3px]
                  text-[#14263d]
                  sm:text-[28px]
                "
              >
                GEOMISSION: Capaian & Tujuan
              </h1>

              <p
                className="
                  mt-1.5
                  max-w-[540px]
                  text-[12px]
                  leading-[18px]
                  text-[#68788a]
                  sm:text-[13px]
                "
              >
                Pahami arah dan target kompetensi yang harus kamu kuasai selama
                mempelajari materi bangun ruang kubus dan balok di e-modul
                Geospace.
              </p>
            </div>
          </div>

          {/* Illustration */}

          <GeoMissionIllustration />
        </section>

        {/* =================================================
            CP SECTION
        ================================================= */}

        <section
          className="
            rounded-[10px]
            border
            border-[#18aaa6]
            bg-[#f8fcfc]
            px-4
            py-4
            shadow-[0_3px_10px_rgba(30,70,70,0.03)]
            sm:px-6
          "
        >
          {/* CP Header */}

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Icon */}

              <div
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[11px]
                  bg-[#159f9b]
                  text-white
                  shadow-[0_4px_10px_rgba(21,159,155,0.16)]
                "
              >
                <Layers size={26} strokeWidth={2} />
              </div>

              {/* Title */}

              <div>
                <h2
                  className="
                    text-[16px]
                    font-bold
                    text-[#14263d]
                    sm:text-[18px]
                  "
                >
                  Capaian Pembelajaran (CP)
                </h2>

                <span
                  className="
                    text-[11px]
                    font-bold
                    text-[#159f9b]
                    sm:text-[12px]
                  "
                >
                  Fase C • Kurikulum Merdeka
                </span>
              </div>
            </div>

            {/* Element */}

            <span
              className="
                hidden
                rounded-[7px]
                border
                border-[#75c9c6]
                bg-white
                px-4
                py-2
                text-[11px]
                font-bold
                text-[#159f9b]
                sm:block
              "
            >
              Elemen: Geometri
            </span>
          </div>

          {/* CP Quote */}

          <div
            className="
              mt-3
              flex
              items-start
              gap-3
              rounded-[9px]
              border
              border-[#e0e8e8]
              bg-white
              px-5
              py-3
              shadow-[0_2px_6px_rgba(30,50,70,0.025)]
            "
          >
            <span
              className="
                mt-[-2px]
                text-[32px]
                font-black
                leading-none
                text-[#159f9b]
              "
            >
              “
            </span>

            <p
              className="
                pt-1
                text-[12px]
                font-medium
                leading-[18px]
                text-[#526174]
                sm:text-[13px]
              "
            >
              Pada akhir fase C, peserta didik mampu mengonstruksi dan
              menguraikan bangun ruang (kubus, balok, dan gabungannya) dan
              mengenali visualisasi spasial (bagian depan, atas, dan samping).
            </p>
          </div>
        </section>

        {/* =================================================
            TP SECTION
        ================================================= */}

        <section
          className="
            rounded-[10px]
            border
            border-[#ffb5ab]
            bg-[#fffdfc]
            px-4
            py-4
            shadow-[0_3px_10px_rgba(80,40,30,0.025)]
            sm:px-6
          "
        >
          {/* TP HEADER */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-[10px]
                bg-[#ff6b5c]
                text-white
                shadow-[0_4px_10px_rgba(255,107,92,0.15)]
              "
            >
              <Award size={26} strokeWidth={2} />
            </div>

            <div>
              <h2
                className="
                  text-[16px]
                  font-bold
                  text-[#14263d]
                  sm:text-[18px]
                "
              >
                Tujuan Pembelajaran (TP)
              </h2>

              <p
                className="
                  text-[11px]
                  text-[#718096]
                  sm:text-[12px]
                "
              >
                Indikator kemampuan yang akan kamu capai secara bertahap
              </p>
            </div>
          </div>

          {/* TP LIST */}

          <div
            className="
              mt-3
              overflow-hidden
              rounded-[9px]
              border
              border-[#edf0f1]
              bg-white
            "
          >
            {tujuanPembelajaran.map((tp, index) => (
              <div
                key={tp.id}
                className={`
                  group
                  grid
                  grid-cols-[52px_minmax(200px,240px)_minmax(0,1fr)_32px]
                  items-center
                  gap-4
                  px-4
                  py-3
                  transition-colors
                  duration-200
                  hover:bg-[#f8fcfc]
                  ${
                    index !== tujuanPembelajaran.length - 1
                      ? "border-b border-[#edf0f1]"
                      : ""
                  }
                `}
              >
                {/* TAXONOMY */}

                <div
                  className="
                    flex
                    h-[36px]
                    min-w-[44px]
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-[#ffb9b0]
                    bg-[#fff9f8]
                    px-2.5
                    text-[13px]
                    font-extrabold
                    text-[#ff6b5c]
                  "
                >
                  {tp.taxonomies}
                </div>

                {/* TITLE */}

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-bold
                        text-[#ff6b5c]
                      "
                    >
                      Poin {tp.id}
                    </span>

                    <h3
                      className="
                        truncate
                        text-[13px]
                        font-bold
                        text-[#14263d]
                        transition-colors
                        group-hover:text-[#159f9b]
                        sm:text-[14px]
                      "
                    >
                      {tp.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-[11px]
                    leading-[16px]
                    text-[#68788a]
                    sm:text-[12px]
                    sm:leading-[18px]
                  "
                >
                  {tp.desc}
                </p>

                {/* CHECK */}

                <div className="flex justify-end">
                  <div
                    className="
                      flex
                      h-[28px]
                      w-[28px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#effafa]
                    "
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={2}
                      className="
                        text-[#159f9b]
                        transition-transform
                        duration-200
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            rounded-[9px]
            border
            border-[#edf0f1]
            bg-white
            px-5
            py-3
            shadow-[0_3px_10px_rgba(30,50,70,0.04)]
          "
        >
          {/* PREVIOUS */}

          <button
            type="button"
            onClick={onNavigatePrev}
            className="
              group
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[7px]
              border
              border-[#70c8c5]
              bg-white
              px-4
              text-[11px]
              font-bold
              text-[#159f9b]
              transition-all
              duration-200
              hover:bg-[#f1fbfa]
              hover:shadow-[0_3px_8px_rgba(21,159,155,0.08)]
            "
          >
            <ArrowLeft
              size={18}
              strokeWidth={2.2}
              className="
                transition-transform
                duration-200
                group-hover:-translate-x-1
              "
            />

            <span className="hidden sm:inline">Kembali ke Naviguide</span>

            <span className="sm:hidden">Naviguide</span>
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={onNavigateNext}
            className="
              group
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[7px]
              bg-[#159f9b]
              px-5
              text-[11px]
              font-bold
              text-white
              shadow-[0_4px_10px_rgba(21,159,155,0.16)]
              transition-all
              duration-200
              hover:bg-[#128e8a]
              hover:shadow-[0_5px_14px_rgba(21,159,155,0.22)]
            "
          >
            <span>Lanjut ke GeoMap</span>

            <ArrowRight
              size={18}
              strokeWidth={2.3}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          mt-2
          border-t
          border-[#edf0f1]
          bg-white
          py-3
          text-center
        "
      >
        <p
          className="
            text-[10px]
            text-[#8a96a5]
            sm:text-[11px]
          "
        >
          Inquiry Scaffolding Model
          <span className="mx-2 text-[#c5cbcf]">•</span>
          Geospace 2026
        </p>
      </footer>
    </div>
  );
}
