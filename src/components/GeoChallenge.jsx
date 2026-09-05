// GeoChallenge.jsx

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  FileText,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  Send,
  Share2,
  Trophy,
  CircleCheck,
  Eye,
  Cuboid,
  Boxes,
  Ruler,
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
// SPARKLE ICON
// =====================================================

function SparkleIcon() {
  return (
    <span className="flex h-[20px] w-[20px] items-center justify-center text-[20px] leading-none">
      ✦
    </span>
  );
}

// =====================================================
// CHALLENGE ICON - DIPERBESAR
// =====================================================

const ChallengeIcon = ({ type }) => {
  if (type === "cube") {
    return <Cuboid size={32} strokeWidth={1.8} />;
  }

  if (type === "spatial") {
    return <Eye size={32} strokeWidth={1.8} />;
  }

  if (type === "formula") {
    return <Ruler size={32} strokeWidth={1.8} />;
  }

  return <Trophy size={34} strokeWidth={1.8} />;
};

// =====================================================
// DATA
// =====================================================

const challenges = [
  {
    id: 1,
    meeting: "Pertemuan 1",
    title: "Unsur dan Sifat Bangun Ruang",
    description:
      "Evaluasi pemahaman mengenai titik sudut, rusuk, sisi, serta sifat-sifat kubus dan balok.",
    iconType: "trophy",
    color: "teal",
    questions: "5 Soal Kuis",
    reflection: "Kesimpulan & Refleksi",
  },

  {
    id: 2,
    meeting: "Pertemuan 2",
    title: "Mengkonstruk dan Mengurai Bangun Ruang",
    description:
      "Evaluasi analisis jaring-jaring 3D serta konstruksi dan gabungan bangun ruang.",
    iconType: "cube",
    color: "teal",
    questions: "5 Soal Kuis",
    reflection: "Kesimpulan & Refleksi",
  },

  {
    id: 3,
    meeting: "Pertemuan 3",
    title: "Visualisasi Spasial",
    description:
      "Evaluasi pengamatan spasial dan proyeksi tampak ruang (depan, atas, samping).",
    iconType: "spatial",
    color: "blue",
    questions: "5 Soal Kuis",
    reflection: "Kesimpulan & Refleksi",
  },

  {
    id: 4,
    meeting: "Pertemuan 4",
    title: "Rumus Bangun Ruang",
    description:
      "Asesmen sumatif akhir mengenai luas permukaan dan volume kubus & balok.",
    iconType: "formula",
    color: "coral",
    questions: "5 Soal Kuis",
    reflection: "Kesimpulan & Refleksi",
  },
];

// =====================================================
// STATUS CONFIG
// =====================================================

const statusConfig = {
  completed: {
    label: "Selesai",
    description: "Tantangan sudah diselesaikan",
    button: "Buka Kembali",
  },

  available: {
    label: "Tersedia",
    description: "Tantangan siap dikerjakan",
    button: "Mulai",
  },

  locked: {
    label: "Terkunci",
    description: "Selesaikan tantangan sebelumnya untuk membuka!",
    button: "Terkunci",
  },
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoChallenge({
  onNavigate,
  onOpenDetail,
  onStartChallenge,
  onViewResult,
  onChallengeComplete,
}) {
  // ===================================================
  // COMPLETED CHALLENGES
  // ===================================================

  const [completedChallenges, setCompletedChallenges] = useState(() => {
    try {
      const saved = localStorage.getItem("geospace_completed_challenges");

      if (!saved) {
        return [];
      }

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Gagal membaca progress GeoChallenge:", error);

      return [];
    }
  });

  // ===================================================
  // SAVE PROGRESS & SYNC DENGAN SUPABASE
  // ===================================================

  useEffect(() => {
    const fetchProgressFromSupabase = async () => {
      try {
        const savedData = localStorage.getItem("geospace_user");
        if (!savedData) return;

        const sessionData = JSON.parse(savedData);
        if (!sessionData || !sessionData.id) return;

        const { data, error } = await supabase
          .from("student_answers")
          .select("pertemuan")
          .eq("user_id", sessionData.id);

        if (!error && data) {
          const finishedMeetings = [
            ...new Set(data.map((item) => Number(item.pertemuan))),
          ];
          setCompletedChallenges((prev) => {
            return [...new Set([...prev, ...finishedMeetings])];
          });
        }
      } catch (err) {
        console.error("Error fetching completed challenges:", err);
      }
    };

    fetchProgressFromSupabase();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "geospace_completed_challenges",
        JSON.stringify(completedChallenges),
      );
    } catch (error) {
      console.error("Gagal menyimpan progress GeoChallenge:", error);
    }
  }, [completedChallenges]);

  // ===================================================
  // PROGRESS
  // ===================================================

  const completedCount = completedChallenges.length;

  const totalChallenges = challenges.length;

  const progress = Math.round((completedCount / totalChallenges) * 100);

  // ===================================================
  // GET CHALLENGE STATUS
  // ===================================================

  const getChallengeStatus = (challenge) => {
    const isCompleted = completedChallenges.includes(challenge.id);

    if (isCompleted) {
      return "completed";
    }

    if (challenge.id === 1) {
      return "available";
    }

    const previousCompleted = completedChallenges.includes(challenge.id - 1);

    if (previousCompleted) {
      return "available";
    }

    return "locked";
  };

  // ===================================================
  // COMPLETE CHALLENGE
  // ===================================================

  const handleChallengeComplete = (challengeId) => {
    setCompletedChallenges((prev) => {
      if (prev.includes(challengeId)) {
        return prev;
      }

      return [...prev, challengeId];
    });

    if (onChallengeComplete) {
      onChallengeComplete(challengeId);
    }
  };

  // ===================================================
  // RESET PROGRESS
  // ===================================================

  const handleResetProgress = () => {
    setCompletedChallenges([]);

    try {
      localStorage.removeItem("geospace_completed_challenges");
    } catch (error) {
      console.error("Gagal menghapus progress GeoChallenge:", error);
    }
  };

  // ===================================================
  // NAVIGATE DASHBOARD
  // ===================================================

  const handleBackDashboard = () => {
    if (onNavigate) {
      onNavigate("dashboard");
    }
  };

  // ===================================================
  // CHALLENGE ACTION - PERBAIKAN UTAMA ADA DI SINI
  // ===================================================

  const handleChallengeAction = (challenge) => {
    const challengeStatus = getChallengeStatus(challenge);

    if (challengeStatus === "locked") {
      return;
    }

    if (onOpenDetail) {
      onOpenDetail(challenge.id);
      return;
    }

    if (onStartChallenge) {
      onStartChallenge(challenge, () => handleChallengeComplete(challenge.id));
    } else if (onNavigate) {
      onNavigate("geochallengedetail", {
        meeting: challenge.id,
        challenge: challenge,
        onComplete: () => handleChallengeComplete(challenge.id),
      });
    }
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#14263d]">
      {/* =================================================
          HEADER - DIPERBESAR
      ================================================= */}

      <header className="relative border-b border-[#edf0f1] bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 sm:px-7 lg:px-9">
          {/* BACK BUTTON */}

          <button
            type="button"
            onClick={handleBackDashboard}
            className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#cfe6e6] bg-white px-5 text-[14px] font-bold text-[#237b80] transition-all hover:border-[#18aaa6] hover:bg-[#f2fbfb]"
          >
            <ArrowLeft size={20} />

            <span>Dashboard</span>
          </button>

          {/* LOGO / TITLE */}

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
            <Trophy size={38} strokeWidth={2.3} className="text-[#ff5d4d]" />

            <h1 className="hidden text-[32px] font-extrabold tracking-[2px] text-[#14263d] sm:block">
              <span className="text-[#18aaa6]">GEO</span>
              CHALLENGE
            </h1>

            <h1 className="text-[22px] font-extrabold tracking-[1px] text-[#14263d] sm:hidden">
              <span className="text-[#18aaa6]">GEO</span>
              CHALLENGE
            </h1>
          </div>

          {/* EMPTY RIGHT SPACE */}

          <div className="w-[48px]" />
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto w-full max-w-[1400px] px-5 py-5 sm:px-6 sm:py-6 lg:px-8">
        {/* =================================================
            HERO - DIPERBESAR DENGAN FLEX ROW
        ================================================= */}

        <section className="relative mb-4 min-h-[180px] overflow-hidden rounded-[16px] border border-[#d8eded] bg-[#063e43] px-8 py-7 shadow-[0_4px_16px_rgba(20,70,70,0.08)] sm:px-10">
          {/* Background glow */}

          <div className="pointer-events-none absolute -right-16 -top-24 h-[230px] w-[430px] rounded-full bg-[#0b6668] opacity-50" />

          <div className="pointer-events-none absolute -bottom-20 right-[30%] h-[180px] w-[300px] rounded-full bg-[#075256] opacity-40" />

          {/* Stars */}

          <div className="pointer-events-none absolute left-[18px] top-[22px] text-[18px] text-[#ffca45]">
            ✦
          </div>

          <div className="pointer-events-none absolute left-[38%] top-[15px] text-[20px] text-[#ffca45]">
            ✦
          </div>

          <div className="pointer-events-none absolute right-[38%] top-[28px] text-[18px] text-[#ffca45]">
            ✦
          </div>

          <div className="pointer-events-none absolute right-[10px] top-[12px] text-[13px] tracking-[5px] text-[#18aaa6]">
            •••••
          </div>

          {/* Decorative cube */}

          <div className="pointer-events-none absolute right-[43%] top-[17px] hidden lg:block">
            <div className="h-[38px] w-[38px] rotate-[30deg] border border-[#7be2df] bg-[#15999c] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.12)]" />
          </div>

          <div className="pointer-events-none absolute bottom-[22px] right-[34%] hidden lg:block">
            <div className="h-[42px] w-[42px] rotate-[30deg] border border-[#ff9a8e] bg-[#ff5d4d] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.12)]" />
          </div>

          {/* HERO CONTENT - FLEX ROW */}

          <div className="relative z-10 flex flex-row items-center justify-between gap-8">
            {/* LEFT CONTENT */}

            <div className="max-w-[650px]">
              {/* Badge */}

              <div className="mb-3 inline-flex items-center gap-2.5 rounded-full bg-[#ff5d4d] px-5 py-1.5 text-[13px] font-bold text-white shadow-[0_3px_10px_rgba(255,93,77,0.2)]">
                <SparkleIcon />

                <span>Evaluasi & Refleksi Mandiri</span>
              </div>

              {/* Title */}

              <h2 className="text-[32px] font-extrabold leading-[38px] tracking-[-0.4px] text-white sm:text-[36px] sm:leading-[42px]">
                GeoChallenge & Papan Aktif
              </h2>

              <p className="mt-2 max-w-[620px] text-[14px] leading-[20px] text-[#d6eeee] sm:text-[15px]">
                Uji pemahamanmu pada tiap bab pertemuan melalui kuis sumatif,
                rangkum kesimpulan pembelajaran, dan kembangkan peta konsep
                mandiri.
              </p>
            </div>

            {/* PROGRESS CARD - RIGHT SIDE */}

            <div className="w-[340px] shrink-0 rounded-[16px] border border-[#6b9d9f] bg-[#0b5559]/70 p-5">
              <div className="flex items-center gap-4">
                {/* Trophy */}

                <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[14px] bg-[#ff5d4d] text-white shadow-[0_4px_12px_rgba(255,93,77,0.25)]">
                  <Trophy size={34} />
                </div>

                {/* Progress */}

                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-bold text-[#d9eeee]">
                    Progres Tantangan
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[22px] font-extrabold text-white">
                      {completedCount} / {totalChallenges}{" "}
                      <span className="text-[14px] font-medium">Selesai</span>
                    </span>

                    <span className="text-[16px] font-extrabold text-[#ff715f]">
                      {progress}%
                    </span>
                  </div>

                  {/* Progress bar */}

                  <div className="mt-2 h-[10px] overflow-hidden rounded-full bg-[#567b7d]">
                    <div
                      className="h-full rounded-full bg-[#ff5d4d] transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SECTION HEADER - FLEX ROW
        ================================================= */}

        <section className="rounded-[14px] border border-[#e4eeee] bg-white px-7 py-5 shadow-[0_2px_10px_rgba(30,60,70,0.03)]">
          <div className="flex flex-row items-center justify-between gap-4">
            {/* LEFT */}

            <div className="flex items-center gap-4">
              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#0f8f91] text-white">
                <ClipboardCheck size={28} strokeWidth={1.9} />
              </div>

              <div>
                <h2 className="text-[20px] font-extrabold text-[#14263d]">
                  Pilih Tantangan Pertemuan
                </h2>

                <p className="mt-0.5 text-[13px] text-[#718096] sm:text-[14px]">
                  Selesaikan seluruh tantangan secara berurutan untuk membuka
                  materi berikutnya.
                </p>
              </div>
            </div>

            {/* RIGHT INFO */}

            <div className="hidden shrink-0 items-center gap-3 rounded-[12px] border border-[#dceeee] bg-[#f2fafa] px-5 py-3 md:flex">
              <Lightbulb
                size={26}
                className="shrink-0 text-[#18aaa6]"
                strokeWidth={1.8}
              />

              <p className="text-[13px] font-medium leading-[18px] text-[#237b80]">
                Kerjakan kuis, tulis kesimpulan, lalu refleksikan pemahamanmu
                untuk setiap pertemuan!
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            CHALLENGE LIST
        ================================================= */}

        <section className="mt-4 space-y-3">
          {challenges.map((challenge) => {
            const challengeStatus = getChallengeStatus(challenge);

            const status = statusConfig[challengeStatus];

            const isCompleted = challengeStatus === "completed";

            const isAvailable = challengeStatus === "available";

            const isLocked = challengeStatus === "locked";

            return (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                status={status}
                isCompleted={isCompleted}
                isAvailable={isAvailable}
                isLocked={isLocked}
                onAction={handleChallengeAction}
              />
            );
          })}
        </section>

        {/* =================================================
            TIP + SHARE - FLEX ROW
        ================================================= */}

        <section className="mt-4 flex flex-row gap-4">
          {/* TIP */}

          <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[12px] border border-[#f4dfaf] bg-[#fffaf0] px-6">
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[#ffb51b]">
              ✦
            </div>

            <p className="text-[13px] leading-[18px] text-[#536173] sm:text-[14px]">
              <strong className="text-[#26364b]">Tips:</strong> Selesaikan
              tantangan secara berurutan untuk membuka materi selanjutnya dan
              dapatkan sertifikat terbaikmu!
            </p>
          </div>

          {/* SHARE */}
          {/* 
          <div className="flex min-w-[320px] shrink-0 items-center justify-center gap-3 rounded-[12px] border border-[#e5eeee] bg-white px-6 py-3 shadow-[0_2px_8px_rgba(30,60,70,0.03)]">
            <span className="mr-1 text-[13px] font-bold text-[#526273]">
              Bagikan progresmu:
            </span>


            <button
              type="button"
              aria-label="Bagikan melalui WhatsApp"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#20c968] text-white shadow-sm transition-transform hover:scale-105"
            >
              <MessageCircle size={20} />
            </button>


            <button
              type="button"
              aria-label="Bagikan melalui Telegram"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#229ed9] text-white shadow-sm transition-transform hover:scale-105"
            >
              <Send size={20} />
            </button>


            <button
              type="button"
              aria-label="Bagikan progres"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#665cf2] text-white shadow-sm transition-transform hover:scale-105"
            >
              <Share2 size={20} />
            </button>
          </div> */}
        </section>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-[#edf0f1] bg-white py-4 text-center">
        <p className="text-[12px] text-[#8a96a5] sm:text-[13px]">
          Inquiry Scaffolding Model
          <span className="mx-2 text-[#c5cbcf]">•</span>
          Geospace 2026
        </p>
      </footer>
    </div>
  );
}

// =====================================================
// CHALLENGE CARD - DIPERBESAR DENGAN FLEX ROW
// =====================================================

function ChallengeCard({
  challenge,
  status,
  isCompleted,
  isAvailable,
  isLocked,
  onAction,
}) {
  // ===================================================
  // ACCENT COLOR
  // ===================================================

  const getAccentColor = () => {
    if (isCompleted) {
      return "#18aaa6";
    }

    if (challenge.color === "coral") {
      return "#ff5d4d";
    }

    if (challenge.color === "blue") {
      return "#718198";
    }

    return "#18aaa6";
  };

  const accentColor = getAccentColor();

  // ===================================================
  // ICON COLOR
  // ===================================================

  const iconColor =
    challenge.color === "coral"
      ? "#ff5d4d"
      : challenge.color === "blue"
        ? "#4d88d4"
        : "#18aaa6";

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <article
      className={`group relative flex flex-row overflow-hidden rounded-[14px] border bg-white transition-all duration-200 ${
        isLocked
          ? "border-[#e7eaed]"
          : "border-[#e4eeee] hover:border-[#b8dedd] hover:shadow-[0_4px_14px_rgba(30,80,80,0.06)]"
      }`}
    >
      {/* =================================================
          NUMBER - LEFT
      ================================================= */}

      <div
        className="flex min-h-[68px] w-[72px] shrink-0 items-center justify-center"
        style={{
          backgroundColor: accentColor,
        }}
      >
        <span
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[20px] font-extrabold"
          style={{
            color: accentColor,
          }}
        >
          {challenge.id}
        </span>
      </div>

      {/* =================================================
          MAIN CHALLENGE - FLEX ROW
      ================================================= */}

      <div className="flex min-w-0 flex-1 items-center gap-4 px-5 py-4">
        {/* ICON */}

        <div
          className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full text-white shadow-[0_3px_10px_rgba(30,80,80,0.12)]"
          style={{
            backgroundColor: iconColor,
          }}
        >
          <ChallengeIcon type={challenge.iconType} />
        </div>

        {/* TEXT */}

        <div className="min-w-0 flex-1">
          {/* Meeting Badge */}

          <div
            className="mb-1 inline-flex rounded-full border px-3 py-[3px] text-[10px] font-bold"
            style={{
              color: accentColor,
              borderColor: `${accentColor}55`,
              backgroundColor: `${accentColor}0d`,
            }}
          >
            {challenge.meeting}
          </div>

          {/* Title */}

          <h3 className="text-[16px] font-extrabold leading-[20px] text-[#26364b]">
            {challenge.title}
          </h3>

          {/* Description */}

          <p className="mt-1 line-clamp-2 text-[12px] leading-[16px] text-[#718096]">
            {challenge.description}
          </p>
        </div>
      </div>

      {/* =================================================
          ACTIVITY - MIDDLE
      ================================================= */}

      <div className="flex w-[260px] shrink-0 items-center border-l border-dashed border-[#dfe8e8] px-5">
        <div className="w-full space-y-2">
          {/* QUESTIONS */}

          <div
            className={`flex items-center gap-2.5 rounded-[8px] px-3 py-2.5 ${
              isLocked ? "bg-[#f6f7f8]" : "bg-[#f1f8f8]"
            }`}
          >
            <ClipboardCheck
              size={18}
              className={isLocked ? "text-[#7d8795]" : "text-[#18aaa6]"}
            />

            <span className="text-[12px] font-semibold text-[#526273]">
              {challenge.questions}
            </span>
          </div>

          {/* REFLECTION */}

          <div
            className={`flex items-center gap-2.5 rounded-[8px] px-3 py-2.5 ${
              isLocked ? "bg-[#f6f7f8]" : "bg-[#f1f8f8]"
            }`}
          >
            <FileText
              size={18}
              className={isLocked ? "text-[#7d8795]" : "text-[#18aaa6]"}
            />

            <span className="text-[12px] font-semibold text-[#526273]">
              {challenge.reflection}
            </span>
          </div>
        </div>
      </div>

      {/* =================================================
          STATUS - RIGHT
      ================================================= */}

      <div className="flex w-[340px] shrink-0 items-center justify-between gap-4 border-l border-[#edf0f1] px-6 py-4">
        {/* STATUS TEXT */}

        <div className="flex min-w-0 items-start gap-3">
          {/* COMPLETED */}

          {isCompleted && (
            <CircleCheck
              size={26}
              className="mt-0.5 shrink-0 text-[#18aaa6]"
              strokeWidth={2}
            />
          )}

          {/* AVAILABLE */}

          {isAvailable && (
            <LockKeyhole
              size={26}
              className="mt-0.5 shrink-0 text-[#18aaa6]"
              strokeWidth={2}
            />
          )}

          {/* LOCKED */}

          {isLocked && (
            <LockKeyhole
              size={26}
              className="mt-0.5 shrink-0 text-[#667487]"
              strokeWidth={2}
            />
          )}

          <div className="min-w-0">
            {/* Status label */}

            <p
              className={`text-[13px] font-extrabold ${
                isLocked ? "text-[#718096]" : "text-[#18aaa6]"
              }`}
            >
              {status.label}
            </p>

            {/* Status description */}

            <p className="mt-0.5 max-w-[130px] text-[11px] leading-[15px] text-[#718096]">
              {status.description}
            </p>
          </div>
        </div>

        {/* BUTTON */}

        <button
          type="button"
          disabled={isLocked}
          onClick={() => onAction(challenge)}
          className={`flex h-[42px] shrink-0 items-center gap-2.5 rounded-[10px] px-5 text-[12px] font-bold text-white transition-all ${
            isCompleted
              ? "bg-[#168d8d] shadow-[0_3px_8px_rgba(24,141,141,0.16)] hover:bg-[#117d7d]"
              : isAvailable
                ? "bg-[#168d8d] shadow-[0_3px_8px_rgba(24,141,141,0.16)] hover:bg-[#117d7d]"
                : "cursor-not-allowed bg-[#aeb8c5]"
          }`}
        >
          <span>{status.button}</span>

          {isLocked ? <LockKeyhole size={16} /> : <ArrowRight size={18} />}
        </button>
      </div>
    </article>
  );
}
