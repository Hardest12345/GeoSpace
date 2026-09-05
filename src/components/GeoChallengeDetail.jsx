// src/components/GeoChallengeQuiz.jsx
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  MessageCircle,
  Pencil,
  Save,
  Send,
  Sparkles,
  Trophy,
  Upload,
  CircleHelp,
  Target,
  BookOpen,
  FileText,
} from "lucide-react";
import { supabase } from "../lib/supabase";

// =====================================================
// DATA PERTEMUAN
// =====================================================

const meetingData = {
  1: {
    title: "Unsur dan Sifat Bangun Ruang",
    description:
      "Evaluasi pemahaman mengenai titik sudut, rusuk, sisi, serta sifat-sifat kubus dan balok.",
    color: "teal",
  },
  2: {
    title: "Mengkonstruk dan Mengurai Bangun Ruang",
    description:
      "Evaluasi analisis jaring-jaring 3D serta konstruksi dan gabungan bangun ruang.",
    color: "teal",
  },
  3: {
    title: "Visualisasi Spasial",
    description:
      "Evaluasi pengamatan spasial dan proyeksi tampak ruang (depan, atas, samping).",
    color: "blue",
  },
  4: {
    title: "Rumus Bangun Ruang",
    description:
      "Asesmen sumatif akhir mengenai luas permukaan dan volume kubus dan balok.",
    color: "coral",
  },
};

// =====================================================
// DATA SOAL (Uraian / Deskripsi - 5 Soal Per Pertemuan)
// =====================================================

// =====================================================
// DATA SOAL (Uraian / Deskripsi - 5 Soal Per Pertemuan)
// =====================================================

const questionData = {
  1: [
    {
      id: 1,
      question:
        "Sebuah toko oleh-oleh menggunakan kotak berbentuk kubus untuk mengemas kue. Pemilik toko ingin memastikan bahwa kotak tersebut memiliki bentuk kubus. Hal-hal apa saja yang perlu diperhatikan dari kotak tersebut untuk memastikan bentuknya? Jelaskan berdasarkan sisi, rusuk, dan titik sudut yang dimiliki kotak.",
      image: null, // Tidak ada gambar untuk pertemuan 1
    },
    {
      id: 2,
      question:
        "Sinta memiliki sebuah kotak sepatu berbentuk balok. Ia ingin menggambar kotak tersebut agar dapat menunjukkan bagian-bagian yang dimilikinya. Informasi apa yang perlu diperhatikan Sinta untuk menunjukkan sisi, rusuk, dan titik sudut pada gambar?",
      image: null,
    },
    {
      id: 3,
      question:
        "Sebuah dadu berbentuk kubus memiliki panjang rusuk 5 cm. Tentukan jumlah panjang seluruh rusuk dadu tersebut.",
      image: null,
    },
    {
      id: 4,
      question:
        "Perhatikan dua benda berikut, sebuah dadu dan sebuah kotak sepatu. Keduanya memiliki 6 sisi, 12 rusuk, dan 8 titik sudut. Jelaskan ciri yang dapat digunakan untuk membedakan kedua benda tersebut sebagai kubus atau balok.",
      image: null,
    },
    {
      id: 5,
      question:
        "Beni mengatakan bahwa sebuah kotak pasti berbentuk kubus karena memiliki 6 sisi, 12 rusuk, dan 8 titik sudut. Apakah pendapat Beni benar? Jelaskan alasanmu.",
      image: null,
    },
  ],
  2: [
    {
      id: 1,
      question:
        "Rani membuat menara dari beberapa kubus kecil. Ia menyusun kubus tersebut menjadi beberapa tingkat. Agar dapat mengetahui jumlah kubus yang digunakan, apa yang perlu diperhatikan dari susunan tersebut? Jelaskan cara yang dapat digunakan Rani.",
      image: null,
    },
    {
      id: 2,
      question:
        "Andi ingin mengetahui jumlah seluruh kubus tanpa menghitung satu per satu. Bagaimana susunan tersebut dapat diuraikan agar lebih mudah dihitung?",
      image: "/images/soal2-pert2.png", // ✅ soal2-pert2.png
    },
    {
      id: 3,
      question:
        "Sebuah susunan terdiri atas 8 kubus pada bagian bawah, 5 kubus pada bagian tengah, dan 3 kubus pada bagian atas. Rina mengatakan bahwa keseluruhan kubus adalah 15. Apakah jawaban Rina benar? Jelaskan alasanmu.",
      image: null,
    },
    {
      id: 4,
      question:
        "Ella menyusun sebuah miniatur bangunan dari 12 kubus. Sebanyak 7 kubus berada pada bagian bawah dan 3 kubus berada pada bagian atas. Jika keseluruhan kubus digunakan, berapa kubus yang masih berada pada bagian lain dari susunan tersebut? Jelaskan bagaimana kamu mengetahuinya.",
      image: null,
    },
    {
      id: 5,
      question:
        "Dari sebuah susunan kubus, Dika menghitung 9 kubus yang terlihat dari depan. Ia mengatakan bahwa jumlah seluruh kubus adalah 9. Apakah cara Dika sudah tepat? Jelaskan alasanmu.",
      image: null,
    },
  ],
  3: [
    {
      id: 1,
      question:
        "Jika sebuah susunan kubus dilihat dari depan, samping, dan atas, bentuk yang terlihat dapat berbeda. Apa yang perlu diperhatikan untuk menentukan tampak depan, tampak samping, dan tampak atas dari susunan tersebut? Jelaskan.",
      image: "/images/soal1-pert3.png", // ✅ soal1-pert3.png
    },
    {
      id: 2,
      question:
        "Perhatikan gambar tampak depan dan tampak atas berikut. Siti ingin membuat susunan kubus yang sesuai dengan kedua gambar tersebut. Jelaskan informasi yang dapat diperoleh Siti dari masing-masing gambar untuk menentukan susunan kubus.",
      image: "/images/soal2-pert3.png", // ✅ soal2-pert3.png
    },
    {
      id: 3,
      question:
        "Perhatikan sebuah susunan kubus dan tiga gambar tampaknya. Tentukan gambar yang menunjukkan tampak depan, tampak samping, dan tampak atas dari susunan tersebut. Jelaskan alasanmu.",
      image: "/images/soal3-pert3.png", // ✅ soal3-pert3.png
    },
    {
      id: 4,
      question:
        "Perhatikan susunan kubus tersebut dari arah depan seperti pada gambar. Bagaimana susunan kubus yang terlihat? Jelaskan posisi kubus bagian bawah dan kubus bagian atas.",
      image: "/images/soal4-pert3.png", // ✅ soal4-pert3.png
    },
    {
      id: 5,
      question:
        "Dua susunan kubus memiliki tampak depan yang sama. Riko mengatakan bahwa kedua susunan tersebut pasti sama. Apakah kesimpulan Riko benar? Jelaskan alasanmu.",
      image: null,
    },
  ],
  4: [
    {
      id: 1,
      question:
        "Perhatikan jaring-jaring kubus berikut. Setiap persegi memiliki panjang sisi 10 cm. Bagaimana kamu dapat menggunakan jaring-jaring tersebut untuk menentukan luas seluruh permukaan kubus? Jelaskan langkah-langkahnya.",
      image: "/images/soal1-pert4.png", // ✅ soal1-pert4.png
    },
    {
      id: 2,
      question:
        "Sebuah kotak berbentuk balok memiliki panjang 20 cm, lebar 10 cm, dan tinggi 8 cm. Kotak tersebut akan dilapisi kertas pada seluruh permukaannya. Bagian-bagian mana yang perlu dihitung untuk menentukan luas kertas yang diperlukan? Jelaskan.",
      image: null,
    },
    {
      id: 3,
      question:
        "Sebuah kubus memiliki panjang rusuk 12 cm. Tentukan luas seluruh permukaan kubus tersebut.",
      image: null,
    },
    {
      id: 4,
      question:
        "Sebuah balok memiliki panjang 20 cm, lebar 10 cm, dan tinggi 8 cm. Tentukan luas seluruh permukaan balok tersebut dan jelaskan mengapa setiap pasangan ukuran sisi digunakan sebanyak dua kali.",
      image: null,
    },
    {
      id: 5,
      question:
        "Doni menghitung luas permukaan kubus dengan panjang rusuk 10 cm menggunakan rumus 4 × s². Ia memperoleh hasil 400 cm². Periksa jawaban Doni dan jelaskan kesalahannya.",
      image: null,
    },
  ],
};

// =====================================================
// SUB-COMPONENTS (LOGO, ILLUSTRATION, CARDS, ETC)
// =====================================================

const GeoChallengeLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-[40px] w-[40px] items-center justify-center">
        <Trophy size={38} strokeWidth={2.3} className="text-[#ffb51b]" />
        <div className="absolute bottom-[1px] h-[3px] w-[15px] rounded-full bg-[#ffb51b]" />
      </div>
      <div className="text-[24px] font-extrabold tracking-[-0.5px]">
        <span className="text-[#18aaa6]">Geo</span>
        <span className="text-white">Challenge</span>
      </div>
    </div>
  );
};

const CubeIllustration = () => {
  return (
    <div className="relative h-[92px] w-[150px]">
      <div className="absolute left-[5px] top-[12px] h-[55px] w-[55px] rotate-[30deg] rounded-[2px] bg-gradient-to-br from-[#30c9c4] to-[#15999c] shadow-[inset_-10px_-10px_0_rgba(0,0,0,0.08)]" />
      <div className="absolute bottom-[4px] right-[15px] h-[48px] w-[48px] rotate-[30deg] rounded-[2px] bg-gradient-to-br from-[#ff795f] to-[#f04d35] shadow-[inset_-9px_-9px_0_rgba(0,0,0,0.08)]" />
    </div>
  );
};

const MaterialHeader = ({ meeting }) => {
  const data = meetingData[meeting] || meetingData[1];
  return (
    <section className="relative overflow-hidden rounded-[14px] border border-[#e2eeee] bg-white shadow-[0_3px_14px_rgba(30,70,70,0.05)]">
      <div className="flex min-h-[88px] items-center justify-between gap-4 px-5 py-3.5 sm:px-7">
        <div className="hidden h-[72px] w-[115px] shrink-0 items-center justify-center rounded-[10px] bg-[#f8fbfb] sm:flex">
          <CubeIllustration />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="rounded-full bg-[#e7f8f7] px-3 py-1 text-[10px] font-bold text-[#188d8c]">
              {`Pertemuan ${meeting}`}
            </span>
          </div>
          <h2 className="truncate text-[18px] font-extrabold text-[#14263d] sm:text-[20px]">
            {data.title}
          </h2>
          <p className="mt-1 max-w-[620px] text-[10px] leading-[15px] text-[#68788a] sm:text-[11px]">
            {data.description}
          </p>
        </div>
        <div className="hidden h-[72px] w-[85px] items-center justify-center lg:flex">
          <div className="relative rotate-[6deg]">
            <ClipboardList
              size={58}
              strokeWidth={1.6}
              className="text-[#138f90]"
            />
            <div className="absolute left-[17px] top-[16px] space-y-1">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[#18aaa6]" />
                <div className="h-[2px] w-[20px] bg-[#9acccc]" />
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[#18aaa6]" />
                <div className="h-[2px] w-[20px] bg-[#9acccc]" />
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={10} className="text-[#18aaa6]" />
                <div className="h-[2px] w-[20px] bg-[#9acccc]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StageHeader = ({ number, title, description, color = "teal", icon }) => {
  const Icon = icon;
  const colors = {
    teal: { bg: "#18aaa6", light: "#eaf8f7", border: "#b9e5e3" },
    coral: { bg: "#ff5d4d", light: "#fff2ef", border: "#ffd1ca" },
    blue: { bg: "#397ed0", light: "#eff5ff", border: "#c8dbf6" },
  };
  const c = colors[color];
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-white shadow-sm"
        style={{ backgroundColor: c.bg }}
      >
        <Icon size={20} strokeWidth={2.1} />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
            style={{ backgroundColor: c.bg }}
          >
            Tahap {number}
          </span>
          <h3 className="text-[13px] font-extrabold text-[#14263d] sm:text-[14px]">
            {title}
          </h3>
        </div>
        <p className="mt-0.5 text-[9px] leading-[14px] text-[#718096] sm:text-[10px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeedbackCard = ({ feedback, setFeedback }) => {
  return (
    <section className="rounded-[13px] border border-[#bde6e4] bg-white p-4 shadow-[0_2px_8px_rgba(30,80,80,0.03)]">
      <StageHeader
        number={4}
        title="Masukan & Saran"
        description="Berikan umpan balik mengenai media pembelajaran dari presentasimu."
        color="teal"
        icon={MessageCircle}
      />
      <div className="mt-3">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tuliskan masukan atau saran kamu di sini..."
          className="min-h-[80px] w-full resize-none rounded-[9px] border border-[#dce7e7] bg-white px-3 py-2.5 text-[11px] leading-[16px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
        />
      </div>
    </section>
  );
};

const ConclusionCard = ({ conclusion, setConclusion }) => {
  return (
    <section className="rounded-[13px] border border-[#ffd9c9] bg-white p-4 shadow-[0_2px_8px_rgba(80,60,30,0.03)]">
      <StageHeader
        number={5}
        title="Kesimpulan Pembelajaran"
        description="Tuliskan kesimpulan pembelajaran hari ini."
        color="coral"
        icon={Pencil}
      />
      <div className="mt-3">
        <textarea
          value={conclusion}
          onChange={(e) => setConclusion(e.target.value)}
          placeholder="Tuliskan kesimpulan pembelajaran hari ini di sini..."
          className="min-h-[80px] w-full resize-none rounded-[9px] border border-[#eaded8] bg-white px-3 py-2.5 text-[11px] leading-[16px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff795f] focus:ring-2 focus:ring-[#ff795f]/10"
        />
      </div>
    </section>
  );
};

const ConceptMapCard = () => {
  return (
    <section className="rounded-[13px] border border-[#f0dca7] bg-[#fffaf0] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#ffb51b] text-white">
          <Lightbulb size={23} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[12px] font-extrabold leading-[16px] text-[#26364b]">
            📝 Buatlah peta konsep pada lembar kerja yang dibagikan guru.
          </h3>
          <p className="mt-0.5 text-[10px] text-[#718096]">
            Kerjakan secara mandiri di lembar peta konsep yang telah disediakan.
          </p>
        </div>
        <div className="hidden h-[44px] w-[42px] shrink-0 items-center justify-center rounded-[7px] border border-[#e8d9ba] bg-white text-[#ffb51b] sm:flex">
          <FileText size={23} />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// QUESTION NAVIGATOR & QUIZ PANEL
// =====================================================

const QuestionNavigator = ({
  currentQuestion,
  setCurrentQuestion,
  answers,
}) => {
  return (
    <div className="flex flex-col items-center border-r border-[#e3e8ed] bg-[#fbfcfd] px-3 py-4">
      <div className="text-center">
        <p className="text-[10px] font-semibold text-[#526273]">Soal</p>
        <div className="mt-0.5 text-[17px] font-extrabold text-[#14263d]">
          {currentQuestion + 1}
          <span className="text-[11px] font-medium text-[#718096]"> / 5</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          const isActive = currentQuestion === index;
          const isAnswered =
            answers[index] !== undefined && answers[index]?.trim() !== "";
          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentQuestion(index)}
              className={`flex h-[25px] w-[25px] items-center justify-center rounded-full border text-[9px] font-bold transition-all ${
                isActive
                  ? "border-[#0b73d4] bg-[#0b73d4] text-white shadow-[0_2px_6px_rgba(11,115,212,0.2)]"
                  : isAnswered
                    ? "border-[#18aaa6] bg-[#eaf8f7] text-[#168d8d]"
                    : "border-[#aab5c1] bg-white text-[#718096] hover:border-[#0b73d4] hover:text-[#0b73d4]"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// =====================================================
// QUIZ PANEL - DENGAN DUKUNGAN GAMBAR
// =====================================================

const QuizPanel = ({
  questions,
  currentQuestion,
  answers,
  setAnswers,
  setCurrentQuestion,
  onFinish,
}) => {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleSelectAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer?.trim()) {
      return;
    }
    if (isLastQuestion) {
      onFinish();
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <section className="h-full overflow-hidden rounded-[13px] border border-[#c9dcf7] bg-white shadow-[0_3px_12px_rgba(30,70,120,0.05)]">
      <div className="flex items-center gap-2.5 border-b border-[#e1e9f2] px-4 py-3">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0b73d4] text-white">
          <CircleHelp size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#0b73d4] px-2.5 py-1 text-[10px] font-bold text-white">
              Tahap 6
            </span>
            <h3 className="text-[13px] font-extrabold text-[#14263d]">
              Evaluasi Pembelajaran
            </h3>
          </div>
          <p className="mt-0.5 text-[9px] text-[#718096]">
            Kerjakan kuis berikut untuk menguji pemahamanmu!
          </p>
        </div>
      </div>
      <div className="flex min-h-[320px]">
        <QuestionNavigator
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
        />
        <div className="flex min-w-0 flex-1 flex-col px-4 py-4 sm:px-5">
          {/* QUESTION */}
          <div>
            <p className="text-[12px] font-extrabold leading-[18px] text-[#26364b] sm:text-[13px]">
              {currentQuestion + 1}. {question.question}
            </p>
          </div>

          {/* GAMBAR (jika ada) */}
          {question.image && (
            <div className="mt-3 flex justify-center">
              <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50 p-2 max-w-[300px]">
                <img
                  src={question.image}
                  alt={`Gambar untuk soal ${currentQuestion + 1}`}
                  className="w-full h-auto max-h-[200px] object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Gambar tidak ditemukan: ${question.image}`);
                  }}
                />
                <p className="text-[8px] text-center text-slate-400 mt-1">
                  Gambar pendukung soal
                </p>
              </div>
            </div>
          )}

          {/* DESCRIPTIVE ANSWER INPUT */}
          <div className="mt-4 flex-1">
            <textarea
              value={selectedAnswer || ""}
              onChange={(e) => handleSelectAnswer(e.target.value)}
              placeholder="Tuliskan jawaban uraian Anda secara rinci dan jelas di sini..."
              className="h-[140px] w-full resize-none rounded-[9px] border border-[#dce3ea] bg-white p-3 text-[11px] leading-[18px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#0b73d4] focus:ring-2 focus:ring-[#0b73d4]/10"
            />
          </div>

          {/* NEXT BUTTON */}
          <div className="mt-auto flex justify-end pt-4">
            <button
              type="button"
              disabled={!selectedAnswer?.trim()}
              onClick={handleNext}
              className={`flex h-[38px] items-center gap-2 rounded-[8px] px-5 text-[11px] font-bold text-white transition-all ${
                !selectedAnswer?.trim()
                  ? "cursor-not-allowed bg-[#aab8c7]"
                  : "bg-[#0b73d4] shadow-[0_3px_8px_rgba(11,115,212,0.18)] hover:bg-[#0964b9]"
              }`}
            >
              <span>{isLastQuestion ? "Selesaikan Kuis" : "Soal Berikutnya"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONFIRM MODAL
// =====================================================

// =====================================================
// CONFIRM MODAL - Dengan Detail Data yang Akan Ditimpa
// =====================================================

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  meeting,
  isLoading,
  existingData,
}) => {
  if (!isOpen) return null;

  // Analisis data yang ada
  const hasQuiz = existingData?.some((a) => a.tahap === "kuis") || false;
  const hasFeedback =
    existingData?.some((a) => a.tahap === "masukan_saran") || false;
  const hasConclusion =
    existingData?.some((a) => a.tahap === "kesimpulan") || false;

  const itemsToOverwrite = [];
  if (hasQuiz) itemsToOverwrite.push("📝 Jawaban Kuis");
  if (hasFeedback) itemsToOverwrite.push("💬 Masukan & Saran");
  if (hasConclusion) itemsToOverwrite.push("📄 Kesimpulan Pembelajaran");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14263d]/60 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[420px] overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] animate-in fade-in zoom-in duration-200">
        {/* Icon */}
        <div className="bg-gradient-to-br from-[#ffb51b] to-[#f59e0b] px-6 py-5 text-center">
          <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white/20 text-white">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="mt-3 text-xl font-extrabold text-white">
            Ganti Jawaban?
          </h2>
          <p className="mt-1 text-sm text-white/80">
            Anda sudah mengirimkan jawaban untuk Pertemuan {meeting}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <p className="text-center text-sm text-slate-600 leading-relaxed">
            Data berikut akan diganti dengan yang baru:
          </p>

          <div className="mt-3 space-y-1.5">
            {itemsToOverwrite.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 rounded-lg px-3 py-2"
              >
                <span className="text-[#ffb51b]">•</span>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-400 text-center">
            Jawaban lama akan dihapus dan diganti dengan yang baru.
          </p>

          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 rounded-[10px] bg-[#ff5d4d] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(255,93,77,0.25)] transition-all hover:bg-[#ef4e3e] disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Memproses...
                </>
              ) : (
                "Ya, Ganti Semua"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// NOTIFICATION COMPONENT
// =====================================================

const Notification = ({ notification, onClose }) => {
  if (!notification) return null;

  const colors = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-in slide-in-from-top-5 duration-300">
      <div
        className={`rounded-[12px] border p-4 shadow-lg ${colors[notification.type]}`}
      >
        <div className="flex items-start gap-3">
          <span className="text-lg">{icons[notification.type]}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold">{notification.title}</p>
            <p className="text-xs opacity-90">{notification.message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-current opacity-60 hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// RESULT MODAL
// =====================================================

const ResultModal = ({ onBack, onRetry }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14263d]/50 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[400px] overflow-hidden rounded-[18px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
        <div className="bg-gradient-to-br from-[#087b7d] to-[#0b5559] px-6 py-7 text-center">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#18aaa6] text-white shadow-[0_5px_18px_rgba(24,170,166,0.3)]">
            <CheckCircle2 size={38} />
          </div>
          <h2 className="mt-3 text-[22px] font-extrabold text-white">
            Jawaban Berhasil Terkirim!
          </h2>
          <p className="mt-1 text-[11px] text-[#d7eeee]">
            Jawaban uraianmu telah disimpan di database dan dapat diperiksa oleh
            guru.
          </p>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="text-[12px] font-semibold text-[#26364b]">
            Terima kasih telah menyelesaikan evaluasi pembelajaran ini.
          </p>
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="flex h-[38px] flex-1 items-center justify-center rounded-[8px] border border-[#dbe8e8] text-[10px] font-bold text-[#168d8d] hover:bg-[#f3fafa]"
            >
              Edit Jawaban
            </button>
            <button
              type="button"
              onClick={onBack}
              className="flex h-[38px] flex-1 items-center justify-center rounded-[8px] bg-[#168d8d] text-[10px] font-bold text-white hover:bg-[#117d7d]"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// BOTTOM TIPS
// =====================================================

const BottomTips = () => {
  return (
    <section className="rounded-[14px] border border-[#dceeee] bg-gradient-to-r from-[#f0fbfb] to-white px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#dff6f5] text-[#18aaa6]">
            <Sparkles size={19} />
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-[#237b80]">Tips!</p>
            <p className="text-[9px] text-[#718096]">
              Kerjakan setiap tahap dengan sungguh-sungguh untuk meningkatkan
              pemahamanmu.
            </p>
          </div>
        </div>
        <div className="hidden h-[35px] w-px bg-[#dce9e9] md:block" />
        <div className="flex items-center gap-2">
          <Target size={25} className="text-[#2196e0]" />
          <div>
            <p className="text-[9px] font-bold text-[#26364b]">Pahami Materi</p>
            <p className="text-[8px] text-[#718096]">dengan Baik</p>
          </div>
        </div>
        <div className="hidden h-[35px] w-px bg-[#dce9e9] md:block" />
        <div className="flex items-center gap-2">
          <ClipboardList size={25} className="text-[#18aaa6]" />
          <div>
            <p className="text-[9px] font-bold text-[#26364b]">
              Kerjakan Tugas
            </p>
            <p className="text-[8px] text-[#718096]">dengan Teliti</p>
          </div>
        </div>
        <div className="hidden h-[35px] w-px bg-[#dce9e9] md:block" />
        <div className="flex items-center gap-2">
          <Trophy size={26} className="text-[#8a6de9]" />
          <div>
            <p className="text-[9px] font-bold text-[#26364b]">Raih Hasil</p>
            <p className="text-[8px] text-[#718096]">Maksimal!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoChallengeQuiz({
  meeting = 1,
  onNavigate,
  onComplete,
}) {
  const questions = questionData[meeting] || questionData[1];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [notification, setNotification] = useState(null);

  // ===================================================
  // NAVIGATION
  // ===================================================

  const handleBack = () => {
    if (onNavigate) {
      onNavigate("geochallenge");
    }
  };

  // ===================================================
  // SUBMIT ANSWERS
  // ===================================================

  // ===================================================
  // SUBMIT ANSWERS (DIPISAHKAN)
  // ===================================================

  const submitAnswers = async (userId, isOverwrite = false) => {
  setIsSubmitting(true);

  try {
    // =====================================================
    // JIKA OVERWRITE, HAPUS HANYA JAWABAN GEOCHALLENGE UNTUK PERTEMUAN INI
    // =====================================================
    if (isOverwrite) {
      // Hapus hanya jawaban geochallenge untuk pertemuan ini
      const { error: deleteError } = await supabase
        .from("student_answers")
        .delete()
        .eq("user_id", userId)
        .eq("module_type", "geochallenge")  // ← TAMBAHKAN INI!
        .eq("pertemuan", Number(meeting));

      if (deleteError) {
        console.error("Error deleting old answers:", deleteError);
        setNotification({
          type: "error",
          title: "Gagal Menghapus",
          message: "Terjadi kesalahan saat menghapus jawaban lama.",
        });
        setIsSubmitting(false);
        return;
      }

      console.log(
        "🗑️ Jawaban GeoChallenge lama untuk pertemuan",
        meeting,
        "telah dihapus",
      );
    }

    // =====================================================
    // SIAPKAN DATA JAWABAN BARU
    // =====================================================

    const rowsToInsert = [];

    // 1. Jawaban Kuis (5 soal)
    questions.forEach((q, idx) => {
      const jawaban = answers[idx]?.trim() || "";
      if (jawaban) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geochallenge",  // ← TAMBAHKAN INI!
          pertemuan: Number(meeting),
          tahap: "kuis",
          pertanyaan: q.question,
          jawaban: jawaban,
        });
      }
    });

    // 2. Feedback / Masukan & Saran
    if (feedback.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geochallenge",  // ← TAMBAHKAN INI!
        pertemuan: Number(meeting),
        tahap: "masukan_saran",
        pertanyaan: "Masukan & Saran untuk media pembelajaran",
        jawaban: feedback.trim(),
      });
    }

    // 3. Kesimpulan Pembelajaran
    if (conclusion.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geochallenge",  // ← TAMBAHKAN INI!
        pertemuan: Number(meeting),
        tahap: "kesimpulan",
        pertanyaan: "Kesimpulan Pembelajaran",
        jawaban: conclusion.trim(),
      });
    }

    if (rowsToInsert.length === 0) {
      setNotification({
        type: "warning",
        title: "Perhatian",
        message: "Silakan jawab minimal 1 soal atau tulis masukan terlebih dahulu!",
      });
      setIsSubmitting(false);
      return;
    }

    // =====================================================
    // INSERT KE SUPABASE
    // =====================================================

    const { data: insertData, error: insertError } = await supabase
      .from("student_answers")
      .insert(rowsToInsert)
      .select();

    if (insertError) {
      console.error("Error saving answers:", insertError);
      if (insertError.message.includes("value too long")) {
        setNotification({
          type: "error",
          title: "Jawaban Terlalu Panjang",
          message: "Maksimal 255 karakter per jawaban.",
        });
      } else {
        setNotification({
          type: "error",
          title: "Gagal Menyimpan",
          message: insertError.message,
        });
      }
      setIsSubmitting(false);
      return;
    }

    console.log("✅ Jawaban GeoChallenge berhasil disimpan:", insertData);

    // =====================================================
    // UPDATE PROGRESS
    // =====================================================

    const totalQuestions = questions.length;
    const answeredCount = Object.keys(answers).filter((key) => answers[key]?.trim()).length;
    const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);
    const isCompleted = answeredCount === totalQuestions;

    const { data: existingProgress, error: progressCheckError } = await supabase
      .from("progress")
      .select("id")
      .eq("user_id", userId)
      .eq("module_type", "geochallenge")
      .eq("pertemuan", Number(meeting));

    if (existingProgress && existingProgress.length > 0) {
      await supabase
        .from("progress")
        .update({
          status: isCompleted ? "completed" : "in_progress",
          progress_percentage: progressPercentage,
          score: isCompleted ? 100 : Math.round((answeredCount / totalQuestions) * 100),
          completed_at: isCompleted ? new Date().toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", userId)
        .eq("module_type", "geochallenge")
        .eq("pertemuan", Number(meeting));
    } else {
      await supabase.from("progress").insert([
        {
          user_id: userId,
          module_type: "geochallenge",
          pertemuan: Number(meeting),
          status: isCompleted ? "completed" : "in_progress",
          progress_percentage: progressPercentage,
          score: isCompleted ? 100 : Math.round((answeredCount / totalQuestions) * 100),
          completed_at: isCompleted ? new Date().toISOString() : null,
        },
      ]);
    }

    // =====================================================
    // TAMPILKAN HASIL
    // =====================================================

    setShowResult(true);

    if (onComplete) {
      onComplete({
        meeting,
        answers,
        totalQuestions,
        answeredCount,
        feedback,
        conclusion,
      });
    }

  } catch (err) {
    console.error("❌ Error submitting:", err);
    setNotification({
      type: "error",
      title: "Terjadi Kesalahan",
      message: err.message || "Silakan coba lagi",
    });
  } finally {
    setIsSubmitting(false);
    setShowConfirmModal(false);
  }
};

// ===================================================
// FINISH QUIZ / SUBMIT JAWABAN KE SUPABASE
// ===================================================

const handleFinishQuiz = async () => {
  try {
    const savedData = localStorage.getItem("geospace_user");
    let userId = null;

    if (savedData) {
      try {
        const sessionData = JSON.parse(savedData);
        userId = sessionData.id;
      } catch (e) {
        console.error("Error parsing user session:", e);
      }
    }

    if (!userId) {
      setNotification({
        type: "error",
        title: "Belum Login",
        message: "Silakan login terlebih dahulu!",
      });
      return;
    }

    // =====================================================
    // CEK APAKAH SUDAH ADA JAWABAN GEOCHALLENGE SEBELUMNYA
    // =====================================================

    const { data: existingAnswers, error: checkError } = await supabase
      .from("student_answers")
      .select("id, tahap")
      .eq("user_id", userId)
      .eq("module_type", "geochallenge")  // ← TAMBAHKAN INI!
      .eq("pertemuan", Number(meeting));

    if (checkError) {
      console.error("Error checking existing answers:", checkError);
    }

    // Jika sudah ada jawaban geochallenge, tampilkan modal konfirmasi
    if (existingAnswers && existingAnswers.length > 0) {
      const hasQuizAnswers = existingAnswers.some((a) => a.tahap === "kuis");
      const hasFeedback = existingAnswers.some((a) => a.tahap === "masukan_saran");
      const hasConclusion = existingAnswers.some((a) => a.tahap === "kesimpulan");

      setExistingData(existingAnswers);
      setShowConfirmModal(true);
      return;
    }

    // Jika belum ada, langsung simpan
    await submitAnswers(userId, false);

  } catch (err) {
    console.error("❌ Error:", err);
    setNotification({
      type: "error",
      title: "Terjadi Kesalahan",
      message: err.message || "Silakan coba lagi",
    });
  }
};
  // ===================================================
  // KONFIRMASI TIMPA JAWABAN
  // ===================================================

  const handleConfirmOverwrite = async () => {
    const savedData = localStorage.getItem("geospace_user");
    let userId = null;

    if (savedData) {
      try {
        const sessionData = JSON.parse(savedData);
        userId = sessionData.id;
      } catch (e) {
        console.error("Error parsing user session:", e);
      }
    }

    if (userId) {
      await submitAnswers(userId, true);
    }
  };

  // ===================================================
  // RETRY
  // ===================================================

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };
  const [existingData, setExistingData] = useState(null);

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      {/* Notification */}
      <Notification
        notification={notification}
        onClose={() => setNotification(null)}
      />

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => {
          setShowConfirmModal(false);
          setExistingData(null);
        }}
        onConfirm={handleConfirmOverwrite}
        meeting={meeting}
        isLoading={isSubmitting}
        existingData={existingData}
      />

      <div className="min-h-screen bg-[#f7fafb] text-[#26364b]">
        {/* HEADER */}
        <header className="sticky top-0 z-30 bg-[#006b70] shadow-[0_2px_10px_rgba(0,50,60,0.12)]">
          <div className="mx-auto flex h-[62px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                aria-label="Kembali"
              >
                <ArrowLeft size={19} />
              </button>
              <GeoChallengeLogo />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold text-white">
                Pertemuan {meeting}
              </div>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <span className="text-[18px] text-[#ffca45]">✦</span>
              <div className="h-[38px] w-[38px] rotate-[30deg] bg-[#17a4a3] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.1)]" />
              <div className="h-[32px] w-[32px] rotate-[30deg] bg-[#ff7a43] shadow-[inset_-7px_-7px_0_rgba(0,0,0,0.1)]" />
            </div>
          </div>
          <div className="border-t border-white/10 px-4 py-2 sm:hidden">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold text-white">
              Pertemuan {meeting}
            </span>
          </div>
        </header>

        {/* MAIN */}
        <main className="mx-auto w-full max-w-[1400px] px-3 py-3 sm:px-5 sm:py-4 lg:px-7">
          <MaterialHeader meeting={meeting} />

          <div className="mt-3 flex flex-row gap-4">
            <div className="flex w-[420px] min-w-[420px] flex-col gap-3">
              <FeedbackCard feedback={feedback} setFeedback={setFeedback} />
              <ConclusionCard
                conclusion={conclusion}
                setConclusion={setConclusion}
              />
              <ConceptMapCard />
            </div>

            <div className="flex-1">
              <QuizPanel
                questions={questions}
                currentQuestion={currentQuestion}
                answers={answers}
                setAnswers={setAnswers}
                setCurrentQuestion={setCurrentQuestion}
                onFinish={handleFinishQuiz}
              />
            </div>
          </div>

          <div className="mt-3">
            <BottomTips />
          </div>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-[#e5eeee] bg-white py-3.5 text-center">
          <p className="text-[10px] text-[#8a96a5] sm:text-[11px]">
            Inquiry Scaffolding Model
            <span className="mx-2 text-[#c5cbcf]">•</span>
            Geospace 2026
          </p>
        </footer>

        {/* RESULT MODAL */}
        {showResult && (
          <ResultModal onRetry={handleRetry} onBack={handleBack} />
        )}
      </div>
    </>
  );
}
