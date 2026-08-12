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
// DATA SOAL
// =====================================================

const questionData = {
  1: [
    {
      id: 1,
      question:
        "Berapa jumlah titik sudut yang dimiliki oleh sebuah bangun ruang kubus?",
      options: [
        {
          id: "A",
          text: "6 titik sudut",
        },
        {
          id: "B",
          text: "8 titik sudut",
        },
        {
          id: "C",
          text: "12 titik sudut",
        },
        {
          id: "D",
          text: "16 titik sudut",
        },
      ],
      answer: "B",
    },

    {
      id: 2,
      question: "Berapa jumlah rusuk yang dimiliki oleh sebuah kubus?",
      options: [
        {
          id: "A",
          text: "6 rusuk",
        },
        {
          id: "B",
          text: "8 rusuk",
        },
        {
          id: "C",
          text: "12 rusuk",
        },
        {
          id: "D",
          text: "16 rusuk",
        },
      ],
      answer: "C",
    },

    {
      id: 3,
      question: "Berapa jumlah sisi yang dimiliki oleh sebuah kubus?",
      options: [
        {
          id: "A",
          text: "4 sisi",
        },
        {
          id: "B",
          text: "6 sisi",
        },
        {
          id: "C",
          text: "8 sisi",
        },
        {
          id: "D",
          text: "12 sisi",
        },
      ],
      answer: "B",
    },

    {
      id: 4,
      question: "Manakah pernyataan yang benar mengenai sifat-sifat kubus?",
      options: [
        {
          id: "A",
          text: "Semua sisinya berbentuk persegi dan sama besar",
        },
        {
          id: "B",
          text: "Hanya dua sisi yang sama besar",
        },
        {
          id: "C",
          text: "Tidak memiliki titik sudut",
        },
        {
          id: "D",
          text: "Memiliki 10 rusuk",
        },
      ],
      answer: "A",
    },

    {
      id: 5,
      question:
        "Bangun ruang yang memiliki 6 sisi berbentuk persegi panjang dan 8 titik sudut adalah...",
      options: [
        {
          id: "A",
          text: "Kubus",
        },
        {
          id: "B",
          text: "Balok",
        },
        {
          id: "C",
          text: "Tabung",
        },
        {
          id: "D",
          text: "Kerucut",
        },
      ],
      answer: "B",
    },
  ],

  2: [
    {
      id: 1,
      question:
        "Jaring-jaring kubus tersusun dari beberapa bangun datar berbentuk...",
      options: [
        { id: "A", text: "Segitiga" },
        { id: "B", text: "Lingkaran" },
        { id: "C", text: "Persegi" },
        { id: "D", text: "Trapesium" },
      ],
      answer: "C",
    },

    {
      id: 2,
      question: "Jaring-jaring kubus terdiri dari berapa buah persegi?",
      options: [
        { id: "A", text: "4 persegi" },
        { id: "B", text: "5 persegi" },
        { id: "C", text: "6 persegi" },
        { id: "D", text: "8 persegi" },
      ],
      answer: "C",
    },

    {
      id: 3,
      question:
        "Kegiatan membuka sisi-sisi kubus sehingga menjadi bentuk datar disebut...",
      options: [
        { id: "A", text: "Rotasi" },
        { id: "B", text: "Jaring-jaring" },
        { id: "C", text: "Translasi" },
        { id: "D", text: "Refleksi" },
      ],
      answer: "B",
    },

    {
      id: 4,
      question: "Jaring-jaring balok tersusun dari...",
      options: [
        { id: "A", text: "6 persegi panjang" },
        { id: "B", text: "6 lingkaran" },
        { id: "C", text: "4 segitiga" },
        { id: "D", text: "8 persegi" },
      ],
      answer: "A",
    },

    {
      id: 5,
      question: "Tujuan mempelajari jaring-jaring bangun ruang adalah...",
      options: [
        {
          id: "A",
          text: "Mengetahui bentuk datar penyusun bangun ruang",
        },
        {
          id: "B",
          text: "Menghitung jumlah titik sudut saja",
        },
        {
          id: "C",
          text: "Menghilangkan sisi bangun",
        },
        {
          id: "D",
          text: "Mengubah bangun ruang menjadi lingkaran",
        },
      ],
      answer: "A",
    },
  ],

  3: [
    {
      id: 1,
      question:
        "Kemampuan membayangkan posisi suatu benda dari berbagai arah disebut...",
      options: [
        { id: "A", text: "Kemampuan spasial" },
        { id: "B", text: "Kemampuan numerik" },
        { id: "C", text: "Kemampuan verbal" },
        { id: "D", text: "Kemampuan musikal" },
      ],
      answer: "A",
    },

    {
      id: 2,
      question: "Tampak suatu bangun dari arah depan disebut...",
      options: [
        { id: "A", text: "Tampak atas" },
        { id: "B", text: "Tampak depan" },
        { id: "C", text: "Tampak samping" },
        { id: "D", text: "Tampak belakang" },
      ],
      answer: "B",
    },

    {
      id: 3,
      question: "Tampak atas digunakan untuk melihat bangun dari arah...",
      options: [
        { id: "A", text: "Bawah" },
        { id: "B", text: "Samping" },
        { id: "C", text: "Atas" },
        { id: "D", text: "Belakang" },
      ],
      answer: "C",
    },

    {
      id: 4,
      question: "Kemampuan spasial membantu kita untuk...",
      options: [
        {
          id: "A",
          text: "Membayangkan posisi dan bentuk benda",
        },
        {
          id: "B",
          text: "Menghafal semua rumus",
        },
        {
          id: "C",
          text: "Menghitung tanpa melihat objek",
        },
        {
          id: "D",
          text: "Membaca teks dengan cepat",
        },
      ],
      answer: "A",
    },

    {
      id: 5,
      question:
        "Untuk memahami bentuk suatu bangun ruang secara lengkap, kita dapat mengamati...",
      options: [
        { id: "A", text: "Satu arah saja" },
        {
          id: "B",
          text: "Berbagai arah pandangan",
        },
        { id: "C", text: "Warna bangun saja" },
        { id: "D", text: "Ukuran teks saja" },
      ],
      answer: "B",
    },
  ],

  4: [
    {
      id: 1,
      question: "Rumus luas permukaan kubus adalah...",
      options: [
        { id: "A", text: "6 × s²" },
        { id: "B", text: "4 × s²" },
        { id: "C", text: "s × s × s" },
        { id: "D", text: "2 × s" },
      ],
      answer: "A",
    },

    {
      id: 2,
      question: "Rumus volume kubus adalah...",
      options: [
        { id: "A", text: "6 × s²" },
        { id: "B", text: "s³" },
        { id: "C", text: "2 × s²" },
        { id: "D", text: "4 × s" },
      ],
      answer: "B",
    },

    {
      id: 3,
      question: "Rumus volume balok adalah...",
      options: [
        { id: "A", text: "p + l + t" },
        { id: "B", text: "2(p + l)" },
        { id: "C", text: "p × l × t" },
        { id: "D", text: "6 × s²" },
      ],
      answer: "C",
    },

    {
      id: 4,
      question: "Jika panjang rusuk kubus 5 cm, maka volumenya adalah...",
      options: [
        { id: "A", text: "25 cm³" },
        { id: "B", text: "50 cm³" },
        { id: "C", text: "100 cm³" },
        { id: "D", text: "125 cm³" },
      ],
      answer: "D",
    },

    {
      id: 5,
      question:
        "Sebuah balok memiliki panjang 8 cm, lebar 4 cm, dan tinggi 3 cm. Volumenya adalah...",
      options: [
        { id: "A", text: "48 cm³" },
        { id: "B", text: "72 cm³" },
        { id: "C", text: "96 cm³" },
        { id: "D", text: "120 cm³" },
      ],
      answer: "C",
    },
  ],
};

// =====================================================
// LOGO
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

// =====================================================
// CUBE ILLUSTRATION
// =====================================================

const CubeIllustration = () => {
  return (
    <div className="relative h-[92px] w-[150px]">
      {/* Cube 1 */}
      <div className="absolute left-[5px] top-[12px] h-[55px] w-[55px] rotate-[30deg] rounded-[2px] bg-gradient-to-br from-[#30c9c4] to-[#15999c] shadow-[inset_-10px_-10px_0_rgba(0,0,0,0.08)]" />

      {/* Cube 2 */}
      <div className="absolute bottom-[4px] right-[15px] h-[48px] w-[48px] rotate-[30deg] rounded-[2px] bg-gradient-to-br from-[#ff795f] to-[#f04d35] shadow-[inset_-9px_-9px_0_rgba(0,0,0,0.08)]" />
    </div>
  );
};

// =====================================================
// TOP MATERIAL CARD
// =====================================================

const MaterialHeader = ({ meeting }) => {
  const data = meetingData[meeting] || meetingData[1];

  return (
    <section className="relative overflow-hidden rounded-[14px] border border-[#e2eeee] bg-white shadow-[0_3px_14px_rgba(30,70,70,0.05)]">
      <div className="flex min-h-[88px] items-center justify-between gap-4 px-5 py-3.5 sm:px-7">
        {/* LEFT ILLUSTRATION */}
        <div className="hidden h-[72px] w-[115px] shrink-0 items-center justify-center rounded-[10px] bg-[#f8fbfb] sm:flex">
          <CubeIllustration />
        </div>

        {/* TEXT */}
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

        {/* CLIPBOARD */}
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

// =====================================================
// STAGE HEADER
// =====================================================

const StageHeader = ({ number, title, description, color = "teal", icon }) => {
  const Icon = icon;

  const colors = {
    teal: {
      bg: "#18aaa6",
      light: "#eaf8f7",
      border: "#b9e5e3",
    },
    coral: {
      bg: "#ff5d4d",
      light: "#fff2ef",
      border: "#ffd1ca",
    },
    blue: {
      bg: "#397ed0",
      light: "#eff5ff",
      border: "#c8dbf6",
    },
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

// =====================================================
// FEEDBACK CARD - DIPERBESAR
// =====================================================

const FeedbackCard = ({ feedback, setFeedback, onSendFeedback }) => {
  return (
    <section className="rounded-[13px] border border-[#bde6e4] bg-white p-4 shadow-[0_2px_8px_rgba(30,80,80,0.03)]">
      <StageHeader
        number={1}
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

        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={onSendFeedback}
            className="flex h-[34px] items-center gap-1.5 rounded-[7px] bg-[#168d8d] px-4 text-[11px] font-bold text-white transition-all hover:bg-[#117d7d]"
          >
            <Send size={14} />
            Kirim Masukan
          </button>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONCLUSION CARD - DIPERBESAR
// =====================================================

const ConclusionCard = ({ conclusion, setConclusion, onSaveConclusion }) => {
  return (
    <section className="rounded-[13px] border border-[#ffd9c9] bg-white p-4 shadow-[0_2px_8px_rgba(80,60,30,0.03)]">
      <StageHeader
        number={2}
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

        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={onSaveConclusion}
            className="flex h-[34px] items-center gap-1.5 rounded-[7px] bg-[#ff5d4d] px-4 text-[11px] font-bold text-white transition-all hover:bg-[#ef4e3e]"
          >
            <Save size={14} />
            Simpan Kesimpulan
          </button>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONCEPT MAP CARD - DIPERBESAR
// =====================================================

const ConceptMapCard = ({ conceptMap, setConceptMap }) => {
  return (
    <section className="rounded-[13px] border border-[#f0dca7] bg-[#fffaf0] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#ffb51b] text-white">
          <Lightbulb size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[12px] font-extrabold leading-[16px] text-[#26364b]">
            Buatlah peta konsep pada kertas kerja yang dibagikan guru.
          </h3>

          <p className="mt-0.5 text-[10px] text-[#718096]">
            Unggah atau tuliskan hasil peta konsep mandirimu.
          </p>
        </div>

        <label className="flex h-[44px] w-[135px] cursor-pointer items-center justify-center rounded-[7px] border border-dashed border-[#ffbd43] bg-white text-[#ffb51b] transition-all hover:bg-[#fff7e5]">
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setConceptMap(e.target.files[0].name);
              }
            }}
          />

          {conceptMap ? (
            <span className="max-w-[115px] truncate text-[10px] font-bold">
              {conceptMap}
            </span>
          ) : (
            <div className="flex items-center gap-1.5">
              <Upload size={16} />
              <span className="text-[10px] font-bold">Unggah</span>
            </div>
          )}
        </label>

        <div className="hidden h-[44px] w-[42px] items-center justify-center rounded-[7px] border border-[#e8d9ba] bg-white text-[#ffb51b] sm:flex">
          <FileText size={23} />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// QUESTION NAVIGATOR
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
          const isAnswered = answers[index] !== undefined;

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
// QUIZ OPTION
// =====================================================

const QuizOption = ({ option, selected, onSelect, disabled }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option.id)}
      className={`group flex w-full items-center gap-3 rounded-[9px] border px-2.5 py-2 text-left transition-all ${
        selected
          ? "border-[#0b73d4] bg-[#eef6ff] shadow-[0_2px_7px_rgba(11,115,212,0.08)]"
          : "border-[#dce3ea] bg-white hover:border-[#8dbbe7] hover:bg-[#f7fbff]"
      } ${disabled ? "cursor-default" : "cursor-pointer"}`}
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[5px] border text-[10px] font-bold ${
          selected
            ? "border-[#0b73d4] bg-[#0b73d4] text-white"
            : "border-[#a9c8ec] bg-white text-[#0b73d4]"
        }`}
      >
        {option.id}
      </span>

      <span className="text-[10px] font-medium leading-[15px] text-[#26364b] sm:text-[11px]">
        {option.text}
      </span>

      {selected && (
        <CheckCircle2 size={15} className="ml-auto shrink-0 text-[#0b73d4]" />
      )}
    </button>
  );
};

// =====================================================
// QUIZ PANEL - DIPERBESAR
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
    if (!selectedAnswer) {
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
      {/* QUIZ HEADER */}
      <div className="flex items-center gap-2.5 border-b border-[#e1e9f2] px-4 py-3">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0b73d4] text-white">
          <CircleHelp size={22} />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#0b73d4] px-2.5 py-1 text-[10px] font-bold text-white">
              Tahap 3
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

      {/* QUIZ BODY */}
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
              {question.question}
            </p>
          </div>

          {/* OPTIONS */}
          <div className="mt-4 space-y-2">
            {question.options.map((option) => (
              <QuizOption
                key={option.id}
                option={option}
                selected={selectedAnswer === option.id}
                onSelect={handleSelectAnswer}
              />
            ))}
          </div>

          {/* NEXT BUTTON */}
          <div className="mt-auto flex justify-end pt-4">
            <button
              type="button"
              disabled={!selectedAnswer}
              onClick={handleNext}
              className={`flex h-[38px] items-center gap-2 rounded-[8px] px-5 text-[11px] font-bold text-white transition-all ${
                !selectedAnswer
                  ? "cursor-not-allowed bg-[#aab8c7]"
                  : "bg-[#0b73d4] shadow-[0_3px_8px_rgba(11,115,212,0.18)] hover:bg-[#0964b9]"
              }`}
            >
              <span>
                {isLastQuestion ? "Selesaikan Kuis" : "Soal Berikutnya"}
              </span>

              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// RESULT MODAL
// =====================================================

const ResultModal = ({ score, onBack, onRetry }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14263d]/50 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[400px] overflow-hidden rounded-[18px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
        <div className="bg-gradient-to-br from-[#087b7d] to-[#0b5559] px-6 py-7 text-center">
          <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ffb51b] text-white shadow-[0_5px_18px_rgba(255,181,27,0.3)]">
            <Trophy size={38} />
          </div>

          <h2 className="mt-3 text-[22px] font-extrabold text-white">
            Kuis Selesai!
          </h2>

          <p className="mt-1 text-[11px] text-[#d7eeee]">
            Kamu telah menyelesaikan evaluasi pembelajaran.
          </p>
        </div>

        <div className="px-6 py-6 text-center">
          <p className="text-[10px] font-semibold text-[#718096]">Nilai Kamu</p>

          <div className="mt-1 text-[42px] font-extrabold text-[#18aaa6]">
            {score}
          </div>

          <p className="text-[10px] text-[#718096]">dari 100</p>

          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="flex h-[38px] flex-1 items-center justify-center rounded-[8px] border border-[#dbe8e8] text-[10px] font-bold text-[#168d8d] hover:bg-[#f3fafa]"
            >
              Ulangi Kuis
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
        {/* TIP */}
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

        {/* DIVIDERS */}
        <div className="hidden h-[35px] w-px bg-[#dce9e9] md:block" />

        {/* ITEM 1 */}
        <div className="flex items-center gap-2">
          <Target size={25} className="text-[#2196e0]" />

          <div>
            <p className="text-[9px] font-bold text-[#26364b]">Pahami Materi</p>
            <p className="text-[8px] text-[#718096]">dengan Baik</p>
          </div>
        </div>

        <div className="hidden h-[35px] w-px bg-[#dce9e9] md:block" />

        {/* ITEM 2 */}
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

        {/* ITEM 3 */}
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

  const [conceptMap, setConceptMap] = useState("");

  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(0);

  // ===================================================
  // NAVIGATION
  // ===================================================

  const handleBack = () => {
    if (onNavigate) {
      onNavigate("geochallenge");
    }
  };

  // ===================================================
  // FEEDBACK
  // ===================================================

  const handleSendFeedback = () => {
    if (!feedback.trim()) {
      alert("Silakan tuliskan masukan terlebih dahulu.");
      return;
    }

    alert("Masukan berhasil dikirim!");
  };

  // ===================================================
  // CONCLUSION
  // ===================================================

  const handleSaveConclusion = () => {
    if (!conclusion.trim()) {
      alert("Silakan tuliskan kesimpulan terlebih dahulu.");
      return;
    }

    alert("Kesimpulan berhasil disimpan!");
  };

  // ===================================================
  // FINISH QUIZ
  // ===================================================

  const handleFinishQuiz = () => {
    let correct = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correct++;
      }
    });

    const finalScore = Math.round((correct / questions.length) * 100);

    setScore(finalScore);
    setShowResult(true);

    if (onComplete) {
      onComplete({
        meeting,
        score: finalScore,
        answers,
        correctAnswers: correct,
        totalQuestions: questions.length,
        feedback,
        conclusion,
        conceptMap,
      });
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

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="min-h-screen bg-[#f7fafb] text-[#26364b]">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="sticky top-0 z-30 bg-[#006b70] shadow-[0_2px_10px_rgba(0,50,60,0.12)]">
        <div className="mx-auto flex h-[62px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LEFT */}
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

          {/* MEETING */}
          <div className="hidden items-center gap-2 sm:flex">
            <div className="rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold text-white">
              Pertemuan {meeting}
            </div>
          </div>

          {/* DECORATION */}
          <div className="hidden items-center gap-2 lg:flex">
            <span className="text-[18px] text-[#ffca45]">✦</span>

            <div className="h-[38px] w-[38px] rotate-[30deg] bg-[#17a4a3] shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.1)]" />

            <div className="h-[32px] w-[32px] rotate-[30deg] bg-[#ff7a43] shadow-[inset_-7px_-7px_0_rgba(0,0,0,0.1)]" />
          </div>
        </div>

        {/* MOBILE MEETING */}
        <div className="border-t border-white/10 px-4 py-2 sm:hidden">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold text-white">
            Pertemuan {meeting}
          </span>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto w-full max-w-[1400px] px-3 py-3 sm:px-5 sm:py-4 lg:px-7">
        {/* MATERIAL HEADER */}
        <MaterialHeader meeting={meeting} />

        {/* =================================================
            CONTENT - FLEX ROW (LEFT + RIGHT)
        ================================================= */}

        <div className="mt-3 flex flex-row gap-4">
          {/* =================================================
              LEFT COLUMN - Tahap 1 & 2
          ================================================= */}

          <div className="flex w-[420px] min-w-[420px] flex-col gap-3">
            {/* FEEDBACK - Tahap 1 */}
            <FeedbackCard
              feedback={feedback}
              setFeedback={setFeedback}
              onSendFeedback={handleSendFeedback}
            />

            {/* CONCLUSION - Tahap 2 */}
            <ConclusionCard
              conclusion={conclusion}
              setConclusion={setConclusion}
              onSaveConclusion={handleSaveConclusion}
            />

            {/* CONCEPT MAP */}
            <ConceptMapCard
              conceptMap={conceptMap}
              setConceptMap={setConceptMap}
            />
          </div>

          {/* =================================================
              RIGHT COLUMN - Tahap 3 (Quiz)
          ================================================= */}

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

        {/* =================================================
            BOTTOM TIPS
        ================================================= */}

        <div className="mt-3">
          <BottomTips />
        </div>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-[#e5eeee] bg-white py-3.5 text-center">
        <p className="text-[10px] text-[#8a96a5] sm:text-[11px]">
          Inquiry Scaffolding Model
          <span className="mx-2 text-[#c5cbcf]">•</span>
          Geospace 2026
        </p>
      </footer>

      {/* =================================================
          RESULT MODAL
      ================================================= */}

      {showResult && (
        <ResultModal score={score} onRetry={handleRetry} onBack={handleBack} />
      )}
    </div>
  );
}
