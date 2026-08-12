import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Calculator,
  Eye,
  Grid3X3,
  Sparkles,
} from "lucide-react";

// =====================================================
// DATA PERTEMUAN
// =====================================================

const meetings = [
  {
    id: 1,
    label: "PERTEMUAN 1",
    title: "Unsur dan Sifat Bangun Ruang",
    description:
      "Mengenal titik sudut, rusuk, sisi, serta sifat-sifat utama pada kubus dan balok.",
    icon: Box,
    color: "teal",
  },
  {
    id: 2,
    label: "PERTEMUAN 2",
    title: "Mengkonstruk dan Mengurai Bangun Ruang",
    description:
      "Eksplorasi jaring-jaring 3D, membedah proses pembentukan dan penguraian kubus & balok.",
    icon: Grid3X3,
    color: "teal",
  },
  {
    id: 3,
    label: "PERTEMUAN 3",
    title: "Visualisasi Spasial",
    description:
      "Mengamati objek dari berbagai sudut pandang (depan, atas, samping) & proyeksi 3D.",
    icon: Eye,
    color: "teal",
  },
  {
    id: 4,
    label: "PERTEMUAN 4",
    title: "Rumus Bangun Ruang",
    description:
      "Membuktikan dan menerapkan rumus luas permukaan serta volume kubus & balok.",
    icon: Calculator,
    color: "coral",
  },
];

// =====================================================
// GEOSPACE LOGO
// =====================================================

const GeospaceLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo mark */}
      <div className="relative flex h-[42px] w-[42px] items-center justify-center">
        {/* Cube */}
        <div className="absolute h-[30px] w-[30px] rotate-45 rounded-[4px] border-[2px] border-[#18aaa6]" />

        <div className="absolute h-[30px] w-[30px] rotate-45 rounded-[4px] border-[2px] border-[#18aaa6]" />

        {/* Center */}
        <div className="absolute h-[12px] w-[12px] rounded-full bg-[#ff5d4d]" />
      </div>

      {/* Text */}
      <div className="flex items-center">
        <span className="text-[29px] font-extrabold tracking-[2px] text-[#18aaa6]">
          GEO
        </span>
        <span className="text-[29px] font-extrabold tracking-[2px] text-[#14263d]">
          SPACE
        </span>
      </div>
    </div>
  );
};

// =====================================================
// DECORATIVE HERO ILLUSTRATION
// =====================================================

const HeroDecoration = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Left cubes */}
      <div className="absolute left-[35px] top-[42px] hidden sm:block">
        {/* Teal cube */}
        <div className="relative h-[55px] w-[55px]">
          <div className="absolute left-[5px] top-[9px] h-[42px] w-[42px] rounded-[5px] bg-[#18aaa6] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.07)]" />

          <div className="absolute left-[5px] top-[9px] h-[42px] w-[42px] border border-white/30" />
        </div>

        {/* Coral cube */}
        <div className="absolute left-[68px] top-[17px] h-[50px] w-[50px] rounded-[5px] bg-[#ff5d4d] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.07)]" />

        {/* Dotted ellipse */}
        <div className="absolute -left-[18px] top-[50px] h-[35px] w-[185px] rounded-[50%] border border-dashed border-[#18aaa6]/60" />
      </div>

      {/* Decorative pluses */}
      <span className="absolute left-[115px] top-[25px] text-[20px] font-bold text-[#18aaa6]">
        +
      </span>

      <span className="absolute left-[155px] top-[13px] text-[12px] font-bold text-[#a9dede]">
        ✦
      </span>

      <span className="absolute right-[175px] top-[25px] text-[20px] font-bold text-[#18aaa6]">
        +
      </span>

      <span className="absolute right-[210px] top-[20px] text-[16px] text-[#ff5d4d]">
        ○
      </span>

      {/* Right book decoration */}
      <div className="absolute right-[35px] top-[20px] hidden h-[115px] w-[180px] lg:block">
        {/* Book */}
        <div className="absolute bottom-[10px] left-[20px] h-[38px] w-[145px] rotate-[-4deg] rounded-[50%] border-[3px] border-[#18aaa6] bg-white shadow-sm" />

        <div className="absolute bottom-[18px] left-[91px] h-[45px] w-[2px] rotate-[6deg] bg-[#18aaa6]" />

        {/* Geometric icons */}
        <div className="absolute right-[105px] top-[10px] flex h-[31px] w-[31px] rotate-[25deg] items-center justify-center rounded-[5px] border-[2px] border-[#18aaa6]">
          <div className="h-[14px] w-[14px] rotate-45 border border-[#18aaa6]" />
        </div>

        <div className="absolute right-[28px] top-[24px] flex h-[31px] w-[31px] rotate-[-15deg] items-center justify-center rounded-[5px] border-[2px] border-[#ff5d4d]">
          <div className="h-[14px] w-[14px] rotate-45 border border-[#ff5d4d]" />
        </div>
      </div>
    </div>
  );
};

// =====================================================
// ICON CARD
// =====================================================

const MeetingIcon = ({ Icon, color }) => {
  const isCoral = color === "coral";

  return (
    <div
      className={`flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[15px] text-white shadow-[0_7px_18px_rgba(24,170,166,0.14)] ${
        isCoral ? "bg-[#ff5d4d]" : "bg-[#18aaa6]"
      }`}
    >
      <Icon size={48} strokeWidth={1.8} />
    </div>
  );
};

// =====================================================
// MEETING CARD
// =====================================================

const MeetingCard = ({ meeting, onSelect }) => {
  const Icon = meeting.icon;
  const isCoral = meeting.color === "coral";

  return (
    <div className="group relative min-h-[184px] overflow-hidden rounded-[17px] border border-[#e5eeee] bg-white px-5 py-5 shadow-[0_4px_15px_rgba(25,60,80,0.055)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(25,60,80,0.09)]">
      {/* Decorative circle */}
      <div
        className={`pointer-events-none absolute -bottom-[48px] -right-[30px] h-[105px] w-[105px] rounded-full ${
          isCoral ? "bg-[#fff1ef]" : "bg-[#eefafa]"
        }`}
      />

      <div className="relative z-10 flex h-full items-start gap-5">
        {/* Icon */}
        <MeetingIcon Icon={Icon} color={meeting.color} />

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Label */}
          <div
            className={`mb-2 inline-flex rounded-[7px] border px-2 py-1 ${
              isCoral
                ? "border-[#ffc6be] bg-[#fff8f7] text-[#ff5d4d]"
                : "border-[#a8e1df] bg-[#f4fbfb] text-[#18aaa6]"
            }`}
          >
            <span className="text-[11px] font-bold tracking-[0.2px]">
              {meeting.label}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[17px] font-extrabold leading-[22px] text-[#14263d]">
            {meeting.id}. {meeting.title}
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-[430px] text-[12px] leading-[18px] text-[#718096]">
            {meeting.description}
          </p>

          {/* Start exploration */}
          <button
            type="button"
            onClick={() => onSelect(meeting.id)}
            className={`mt-3 flex items-center gap-2 text-[13px] font-extrabold transition-all ${
              isCoral
                ? "text-[#ff5d4d] hover:text-[#e8493b]"
                : "text-[#18aaa6] hover:text-[#108e8a]"
            }`}
          >
            <span>Mulai Eksplorasi</span>

            <span
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full transition-all group-hover:translate-x-1 ${
                isCoral
                  ? "bg-[#fff0ed] text-[#ff5d4d]"
                  : "bg-[#e9f8f7] text-[#18aaa6]"
              }`}
            >
              <ArrowRight size={22} strokeWidth={2.3} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoExplore({
  onBackToDashboard,
  onNavigateNext,
  onNavigatePrev,
  onSelectMeeting,
}) {
  // ---------------------------------------------------
  // SELECT MEETING
  // ---------------------------------------------------

  const handleSelectMeeting = (meetingId) => {
    if (onSelectMeeting) {
      onSelectMeeting(meetingId);
    }
  };

  // ---------------------------------------------------
  // RENDER
  // ---------------------------------------------------

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14263d]">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="relative h-[68px] shrink-0 border-b border-[#edf1f2] bg-white">
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-8">
          {/* Back */}
          <button
            type="button"
            onClick={onBackToDashboard}
            className="flex h-[43px] items-center gap-3 rounded-[8px] border border-[#a9dedd] bg-white px-4 text-[13px] font-bold text-[#18aaa6] transition-all hover:bg-[#f3fbfb]"
          >
            <ArrowLeft size={20} strokeWidth={2.2} />
            <span className="hidden sm:block">Back to Homepage</span>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <GeospaceLogo />
          </div>

          {/* GeoExplore */}
          <div className="flex h-[43px] items-center gap-2 rounded-[8px] border border-[#a9dedd] bg-[#f7fcfc] px-4 text-[#18aaa6]">
            <Sparkles size={19} strokeWidth={2} />

            <span className="text-[13px] font-bold">GeoExplore</span>
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-5 pb-5 pt-7 sm:px-8">

  {/* TITLE */}
  <section className="relative z-10 mb-6 text-center">
    <h1 className="text-[30px] font-extrabold tracking-[-0.6px] text-[#14263d] sm:text-[34px]">
      Pilih Pertemuan Pembelajaran
    </h1>

    <p className="mt-2 text-[13px] leading-[20px] text-[#718096] sm:text-[14px]">
      Eksplorasi materi bangun ruang secara interaktif berbasis sintaks{" "}
      <span className="font-bold text-[#18aaa6]">
        Inquiry Scaffolding.
      </span>
    </p>
  </section>

  {/* MEETING GRID */}
  <section className="relative z-10 grid grid-cols-2 gap-4">

    {meetings.map((meeting) => (
      <MeetingCard
        key={meeting.id}
        meeting={meeting}
        onSelect={handleSelectMeeting}
      />
    ))}

  </section>

</main>

      {/* =================================================
          FOOTER NAVIGATION
      ================================================= */}

      <footer className="shrink-0 border-t border-[#dceeee] bg-white">
        <div className="mx-auto flex min-h-[62px] w-full max-w-[1100px] items-center justify-between gap-4 px-5 sm:px-8">
          {/* Previous */}
          <button
            type="button"
            onClick={onNavigatePrev}
            className="flex h-[38px] items-center gap-2 rounded-[8px] border border-[#a9dedd] bg-white px-4 text-[12px] font-bold text-[#18aaa6] transition-all hover:bg-[#f4fbfb]"
          >
            <ArrowLeft size={18} />
            <span>Kembali ke GeoMap</span>
          </button>

          {/* Footer text */}
          <p className="hidden text-[12px] text-[#718096] md:block">
            E-Modul Interaktif Geospace
            <span className="mx-2 text-[#bfcaca]">•</span>
            Guided Inquiry Scaffolding
          </p>

          {/* Next */}
          <button
            type="button"
            onClick={onNavigateNext}
            className="group flex h-[38px] items-center gap-2 rounded-[8px] bg-[#18aaa6] px-5 text-[12px] font-bold text-white shadow-[0_4px_10px_rgba(24,170,166,0.18)] transition-all hover:bg-[#108f8b]"
          >
            <span>Lanjutkan</span>

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </footer>
    </div>
  );
}