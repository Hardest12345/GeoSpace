// src/components/GeoExploreMeeting2.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Grid3X3,
  Sparkles,
  CheckCircle2,
  Send,
  Target,
  Lightbulb,
  MessageCircle,
  ClipboardList,
  School,
  BookOpen,
  Layers,
  Eye,
} from "lucide-react";
import { supabase } from "../lib/supabase";

// =====================================================
// GEOSPACE LOGO
// =====================================================

const GeospaceLogo = () => {
  return (
    <img
      src="/images/GeoExplore.png"
      alt="GeoSpace Logo"
      className="h-10 w-auto object-contain"
    />
  );
};

// =====================================================
// TAHAP 1 - ORIENTASI BERBASIS ZPD
// =====================================================

const TahapOrientasi = ({
  jawaban,
  setJawaban,
  bentukBangunan,
  setBentukBangunan,
}) => {
  return (
    <section className="rounded-[16px] border border-[#b9e5e3] bg-white p-6 shadow-[0_2px_12px_rgba(24,170,166,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-white shadow-[0_4px_10px_rgba(24,170,166,0.2)]">
          <Lightbulb size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#18aaa6] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 1
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Orientasi berbasis ZPD
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Mengenal konstruksi bangun ruang di sekitar kita
          </p>
        </div>
      </div>

      {/* Gambar */}
      <div className="flex justify-center my-4">
        <img
          src="/images/pertemuan2/1.png"
          alt="Taman Baca Al-Amin Batu dan Tempat Makan"
          className="w-[600px] h-auto object-contain rounded-lg border border-[#e5eeee]"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Pertanyaan 1 */}
        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#d4eeee]">
          <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
            <School size={18} className="text-[#18aaa6]" />
            Coba Pikirkan!
          </h4>
          <p className="mt-1 text-[12px] text-[#4a6a6a] leading-relaxed">
            Menurut kalian bagaimana cara menyusun bangunan dari beberapa bangun
            ruang tersebut?
          </p>
          <textarea
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="mt-2 min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
          />
        </div>

        {/* Pertanyaan 2 - Pilihan Bentuk */}
        <div>
          <p className="text-[13px] font-bold text-[#14263d] mb-3">
            ❓ Bangunan apa yang menyusun bangun tersebut?
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setBentukBangunan("KUBUS")}
              className={`rounded-[12px] border-2 p-4 text-center transition-all ${
                bentukBangunan === "KUBUS"
                  ? "border-[#18aaa6] bg-[#f0fafa] shadow-[0_0_0_4px_rgba(24,170,166,0.1)]"
                  : "border-[#dce7e7] hover:border-[#18aaa6] hover:bg-[#f7fcfc]"
              }`}
            >
              <img
                src="/images/pertemuan2/2.png"
                alt="Kubus"
                className="mx-auto w-[250px] h-auto object-contain"
              />
              <span className="mt-2 block text-[14px] font-bold text-[#14263d]">
                KUBUS
              </span>
              <span className="text-[10px] text-[#718096]">(6 sisi sama)</span>
            </button>

            <button
              type="button"
              onClick={() => setBentukBangunan("BALOK")}
              className={`rounded-[12px] border-2 p-4 text-center transition-all ${
                bentukBangunan === "BALOK"
                  ? "border-[#ff5d4d] bg-[#fff5f3] shadow-[0_0_0_4px_rgba(255,93,77,0.1)]"
                  : "border-[#dce7e7] hover:border-[#ff5d4d] hover:bg-[#fff8f7]"
              }`}
            >
              <img
                src="/images/pertemuan2/3.png"
                alt="Balok"
                className="mx-auto w-[450px] h-auto object-contain"
              />
              <span className="mt-2 block text-[14px] font-bold text-[#14263d]">
                BALOK
              </span>
              <span className="text-[10px] text-[#718096]">
                (6 sisi tidak sama)
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 2 - PERUMUSAN HIPOTESIS
// =====================================================

const TahapHipotesis = ({ jumlahKubus, setJumlahKubus, dugaan, setDugaan }) => {
  const pilihanJumlah = [7, 5, 4, 8];

  return (
    <section className="rounded-[16px] border border-[#ffd9c9] bg-white p-6 shadow-[0_2px_12px_rgba(255,93,77,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#ff5d4d] text-white shadow-[0_4px_10px_rgba(255,93,77,0.2)]">
          <Target size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#ff5d4d] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 2
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Perumusan Hipotesis
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Buat dugaan tentang susunan bangun ruang
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Pilihan Jumlah Kubus */}
        <div>
          <p className="text-[13px] font-bold text-[#14263d] mb-3">
            ❓ Kira-kira bentuk bangun Taman Baca Al-Amin terbentuk dari
            beberapa bangun ruang ya?
          </p>
          <div className="grid grid-cols-5 gap-3">
            {pilihanJumlah.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setJumlahKubus(num)}
                className={`rounded-[12px] border-2 p-4 text-center transition-all ${
                  jumlahKubus === num
                    ? "border-[#ff5d4d] bg-[#fff5f3] shadow-[0_0_0_4px_rgba(255,93,77,0.1)]"
                    : "border-[#dce7e7] hover:border-[#ff5d4d] hover:bg-[#fff8f7]"
                }`}
              >
                <span className="text-[20px] font-extrabold text-[#14263d]">
                  {num}
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setJumlahKubus("lebih")}
              className={`rounded-[12px] border-2 p-4 text-center transition-all col-span-1 ${
                jumlahKubus === "lebih"
                  ? "border-[#ff5d4d] bg-[#fff5f3] shadow-[0_0_0_4px_rgba(255,93,77,0.1)]"
                  : "border-[#dce7e7] hover:border-[#ff5d4d] hover:bg-[#fff8f7]"
              }`}
            >
              <span className="text-[14px] font-bold text-[#14263d]">
                Lebih dari semua pilihan
              </span>
            </button>
          </div>
        </div>

        {/* Menulis Dugaan */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Apakah bentuk bangun Taman Baca Al-Amin bisa terlihat berbeda
            jika dilihat dari arah yang berbeda?
          </label>
          <textarea
            value={dugaan}
            onChange={(e) => setDugaan(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[80px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff5d4d] focus:ring-2 focus:ring-[#ff5d4d]/10"
          />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 3 - PENGUMPULAN DATA & KONSTRUKSI
// =====================================================

const TahapKonstruksi = ({ dataKonstruksi, setDataKonstruksi }) => {
  const handleChange = (field, value) => {
    setDataKonstruksi((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-white p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#397ed0] text-white shadow-[0_4px_10px_rgba(57,126,208,0.2)]">
          <Layers size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#397ed0] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 3
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Pengumpulan Data & Konstruksi
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Konstruksi dan uraian bangun ruang
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Gambar Contoh */}
        <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
          <p className="text-[12px] font-bold text-[#14263d] flex items-center gap-2">
            <Eye size={18} className="text-[#397ed0]" />
            Perhatikan contoh gambar hasil mengkonstruk bangun ruang!
          </p>
          <div className="flex justify-center my-3">
            <img
              src="/images/pertemuan2/4.png"
              alt="Contoh konstruksi bangun ruang"
              className="w-[700px] h-auto object-contain rounded-lg border border-[#d4e4f7]"
            />
          </div>
        </div>

        {/* Link Isometric Drawing */}
        <div className="rounded-[12px] bg-[#fff8e7] p-4 border border-[#f0dca7]">
          <div className="text-center py-8">
            <p className="text-[13px] font-bold text-[#14263d] mb-3">
              🛠️ Isometric Drawing Tool
            </p>
            <p className="text-[11px] text-[#718096] mb-4">
              Alat ini membutuhkan akses langsung ke situs NCTM.
            </p>
            <a
              href="https://www.nctm.org/Classroom-Resources/Illuminations/Interactives/Isometric-Drawing-Tool/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#18aaa6] text-white rounded-[10px] text-[12px] font-bold hover:bg-[#108f8b] transition-all"
            >
              <span>🚀</span>
              Buka Isometric Drawing Tool
            </a>
          </div>
        </div>

        {/* Perintah Konstruksi */}
        <div className="rounded-[12px] bg-[#f0f6ff] p-4 border border-[#d4e4f7]">
          <p className="text-[12px] font-bold text-[#14263d] flex items-center gap-2">
            <Target size={18} className="text-[#397ed0]" />
            BUKTIKAN KERJASAMA TIM!
          </p>
          <ul className="mt-2 space-y-1 text-[11px] text-[#4a6a8a] list-disc list-inside">
            <li>Minimal terdiri atas 2 susun kubus keatas</li>
            <li>Jumlah susunan kesampingan kanan atau kiri minimal 2 kubus</li>
            <li>
              Usahakan antar kubus memiliki warna berbeda untuk memudahkan
              analisis
            </li>
            <li>Gunakan Isometric Drawing Tool pada lembar selanjutnya</li>
          </ul>
        </div>

        {/* Tabel Lengkapi Data */}
        <div>
          <h4 className="text-[13px] font-bold text-[#14263d] mb-3 flex items-center gap-2">
            <ClipboardList size={18} className="text-[#397ed0]" />
            LENGKAPI DATAMU
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#f0f6ff]">
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                    No
                  </th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                    Bagian Bangun
                  </th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                    Jumlah Kubus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                    1
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                    Jumlah susunan
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input
                      type="text"
                      value={dataKonstruksi.jumlahSusunan || ""}
                      onChange={(e) =>
                        handleChange("jumlahSusunan", e.target.value)
                      }
                      placeholder="Contoh: 4"
                      className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                    2
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                    Susunan bawah
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input
                      type="text"
                      value={dataKonstruksi.susunanBawah || ""}
                      onChange={(e) =>
                        handleChange("susunanBawah", e.target.value)
                      }
                      placeholder="Contoh: 6"
                      className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                    3
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                    Susunan atas
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input
                      type="text"
                      value={dataKonstruksi.susunanAtas || ""}
                      onChange={(e) =>
                        handleChange("susunanAtas", e.target.value)
                      }
                      placeholder="Contoh: 4"
                      className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                    4
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                    Total Kubus
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input
                      type="text"
                      value={dataKonstruksi.totalKubus || ""}
                      onChange={(e) =>
                        handleChange("totalKubus", e.target.value)
                      }
                      placeholder="Contoh: 10"
                      className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Informasi */}
        <div className="rounded-[12px] bg-[#e8f5e8] p-4 border border-[#b5e6c0] flex items-center gap-4">
          <div className="flex-1">
            <p className="text-[11px] text-[#2d6a2d] leading-relaxed">
              <span className="font-bold">Informasi:</span>
              <br />
              Perhatikan bangunan yang kalian susun dari beberapa kubus!
              Kegiatan menyusun kubus menjadi beberapa tumpukan dan jajaran
              disebut <span className="font-bold">mengkonstruk</span> bangun
              ruang dan Jumlah seluruh kubus dapat diperoleh dengan kalian
              menjumlahkan semua bagian. Sedangkan mengamati jumlah kubus pada
              setiap susunan adalah kegiatan{" "}
              <span className="font-bold">menguraikan</span>.
            </p>
          </div>
          <div className="shrink-0">
            <img
              src="/images/pertemuan2/5.png"
              alt="Konstruksi Kubus"
              className="w-[120px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 4 - PENGUJIAN HIPOTESIS & REFLEKSI
// =====================================================

const TahapRefleksi = ({ refleksi, setRefleksi, masukan, setMasukan }) => {
  return (
    <section className="rounded-[16px] border border-[#b5e6c0] bg-white p-6 shadow-[0_2px_12px_rgba(46,160,60,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#2ea03c] text-white shadow-[0_4px_10px_rgba(46,160,60,0.2)]">
          <CheckCircle2 size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#2ea03c] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 4
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Pengujian Hipotesis & Refleksi
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Evaluasi dugaan awal dan berikan masukan
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Refleksi */}
        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            ❓ Apakah dugaan yang kalian tuliskan diawal sudah benar?
          </label>
          <textarea
            value={refleksi}
            onChange={(e) => setRefleksi(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10"
          />
        </div>

        {/* Masukan & Saran */}
        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            💬 Tuliskan masukan dan saran untuk perbaikan kelompokmu dari teman
            dan guru berdasarkan hasil presentasi!
          </label>
          <textarea
            value={masukan}
            onChange={(e) => setMasukan(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[80px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10"
          />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoExploreMeeting2({
  onBack,
  onNavigateNext,
  onNavigatePrev,
}) {
  // State untuk Tahap 1
  const [jawabanOrientasi, setJawabanOrientasi] = useState("");
  const [bentukBangunan, setBentukBangunan] = useState("");

  // State untuk Tahap 2
  const [jumlahKubus, setJumlahKubus] = useState(null);
  const [dugaan, setDugaan] = useState("");

  // State untuk Tahap 3
  const [dataKonstruksi, setDataKonstruksi] = useState({
    jumlahSusunan: "",
    susunanBawah: "",
    susunanAtas: "",
    totalKubus: "",
  });

  // State untuk Tahap 4
  const [refleksi, setRefleksi] = useState("");
  const [masukan, setMasukan] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ===================================================
  // FETCH EXISTING ANSWERS
  // ===================================================

  useEffect(() => {
    const fetchExistingAnswers = async () => {
      try {
        const savedData = localStorage.getItem("geospace_user");
        if (!savedData) return;
        const sessionData = JSON.parse(savedData);
        const userId = sessionData.id;
        if (!userId) return;

        const { data, error } = await supabase
          .from("student_answers")
          .select("*")
          .eq("user_id", userId)
          .eq("module_type", "geoexplore")
          .eq("pertemuan", 2);

        if (error || !data || data.length === 0) return;

        const konstruksiMap = {};

        data.forEach((item) => {
          if (item.tahap === "orientasi_zpd") setJawabanOrientasi(item.jawaban || "");
          else if (item.tahap === "orientasi_bentuk") setBentukBangunan(item.jawaban || "");
          else if (item.tahap === "hipotesis_jumlah") setJumlahKubus(item.jawaban === "lebih" ? "lebih" : Number(item.jawaban));
          else if (item.tahap === "hipotesis_dugaan") setDugaan(item.jawaban || "");
          else if (item.tahap === "refleksi") setRefleksi(item.jawaban || "");
          else if (item.tahap === "masukan") setMasukan(item.jawaban || "");
          else if (item.tahap === "konstruksi") {
            if (item.pertanyaan === "Jumlah susunan") konstruksiMap.jumlahSusunan = item.jawaban;
            if (item.pertanyaan === "Susunan bawah") konstruksiMap.susunanBawah = item.jawaban;
            if (item.pertanyaan === "Susunan atas") konstruksiMap.susunanAtas = item.jawaban;
            if (item.pertanyaan === "Total Kubus") konstruksiMap.totalKubus = item.jawaban;
          }
        });

        if (Object.keys(konstruksiMap).length > 0) {
          setDataKonstruksi((prev) => ({ ...prev, ...konstruksiMap }));
        }
      } catch (e) {
        console.error("Error loading existing answers:", e);
      }
    };

    fetchExistingAnswers();
  }, []);

  // ===================================================
  // SUBMIT JAWABAN
  // ===================================================

  const handleSubmit = async () => {
    setIsSubmitting(true);

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
        alert("Silakan login terlebih dahulu!");
        setIsSubmitting(false);
        return;
      }

      const rowsToInsert = [];

      // Tahap 1 - Orientasi
      if (jawabanOrientasi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "orientasi_zpd",
          pertanyaan: "Cara menyusun bangunan dari beberapa bangun ruang",
          jawaban: jawabanOrientasi.trim(),
        });
      }
      if (bentukBangunan) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "orientasi_bentuk",
          pertanyaan: "Bangunan apa yang menyusun bangun tersebut",
          jawaban: bentukBangunan,
        });
      }

      // Tahap 2 - Hipotesis
      if (jumlahKubus !== null) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "hipotesis_jumlah",
          pertanyaan: "Jumlah kubus pada Taman Baca Al-Amin",
          jawaban: String(jumlahKubus),
        });
      }
      if (dugaan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "hipotesis_dugaan",
          pertanyaan: "Apakah bentuk bisa terlihat berbeda dari arah berbeda",
          jawaban: dugaan.trim(),
        });
      }

      // Tahap 3 - Konstruksi
      const konstruksiFields = [
        { key: "jumlahSusunan", label: "Jumlah susunan" },
        { key: "susunanBawah", label: "Susunan bawah" },
        { key: "susunanAtas", label: "Susunan atas" },
        { key: "totalKubus", label: "Total Kubus" },
      ];

      konstruksiFields.forEach(({ key, label }) => {
        if (dataKonstruksi[key]?.trim()) {
          rowsToInsert.push({
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 2,
            tahap: "konstruksi",
            pertanyaan: label,
            jawaban: dataKonstruksi[key].trim(),
          });
        }
      });

      // Tahap 4 - Refleksi
      if (refleksi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "refleksi",
          pertanyaan: "Apakah dugaan awal sudah benar?",
          jawaban: refleksi.trim(),
        });
      }
      if (masukan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 2,
          tahap: "masukan",
          pertanyaan: "Masukan dan saran untuk perbaikan",
          jawaban: masukan.trim(),
        });
      }

      if (rowsToInsert.length === 0) {
        alert("Silakan isi minimal 1 jawaban terlebih dahulu!");
        setIsSubmitting(false);
        return;
      }

      // Cek dan hapus jawaban lama jika ada
      const { data: existingAnswers } = await supabase
        .from("student_answers")
        .select("id")
        .eq("user_id", userId)
        .eq("module_type", "geoexplore")
        .eq("pertemuan", 2);

      if (existingAnswers && existingAnswers.length > 0) {
        const confirmOverwrite = window.confirm(
          "Anda sudah mengirimkan jawaban untuk Pertemuan 2.\n\nApakah Anda ingin mengganti dengan jawaban baru?",
        );
        if (!confirmOverwrite) {
          setIsSubmitting(false);
          return;
        }
        await supabase
          .from("student_answers")
          .delete()
          .eq("user_id", userId)
          .eq("module_type", "geoexplore")
          .eq("pertemuan", 2);
      }

      const { error: insertError } = await supabase
        .from("student_answers")
        .insert(rowsToInsert);

      if (insertError) {
        console.error("Error saving answers:", insertError);
        alert("Gagal menyimpan jawaban: " + insertError.message);
        setIsSubmitting(false);
        return;
      }

      // Update progress
      const { data: existingProgress } = await supabase
        .from("progress")
        .select("id")
        .eq("user_id", userId)
        .eq("module_type", "geoexplore")
        .eq("pertemuan", 2);

      if (existingProgress && existingProgress.length > 0) {
        await supabase
          .from("progress")
          .update({
            status: "completed",
            progress_percentage: 100,
            completed_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", userId)
          .eq("module_type", "geoexplore")
          .eq("pertemuan", 2);
      } else {
        await supabase.from("progress").insert([
          {
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 2,
            status: "completed",
            progress_percentage: 100,
            completed_at: new Date().toISOString(),
          },
        ]);
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        if (onNavigateNext) onNavigateNext();
      }, 3000);
    } catch (err) {
      console.error("Error submitting:", err);
      alert("Terjadi kesalahan: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="min-h-screen bg-[#f7fafb] text-[#14263d]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-[#006b70] shadow-[0_2px_10px_rgba(0,50,60,0.12)]">
        <div className="mx-auto flex h-[62px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              aria-label="Kembali"
            >
              <ArrowLeft size={19} />
            </button>
            <GeospaceLogo />
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-bold text-white">
              Pertemuan 2
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
            Pertemuan 2
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-[24px] font-extrabold text-[#14263d] sm:text-[28px]">
            Mengkonstruk dan Mengurai Bangun Ruang
          </h1>
          <p className="mt-1 text-[12px] text-[#718096]">
            Eksplorasi interaktif berbasis Inquiry Scaffolding
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex h-[30px] w-[30px] items-center justify-center rounded-full text-[10px] font-bold ${
                  step === 1
                    ? "bg-[#18aaa6] text-white"
                    : "bg-[#e5eeee] text-[#718096]"
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div className="h-[2px] w-[20px] bg-[#e5eeee] sm:w-[40px]" />
              )}
            </div>
          ))}
        </div>

        {/* TAHAPAN */}
        <div className="space-y-4">
          <TahapOrientasi
            jawaban={jawabanOrientasi}
            setJawaban={setJawabanOrientasi}
            bentukBangunan={bentukBangunan}
            setBentukBangunan={setBentukBangunan}
          />

          <TahapHipotesis
            jumlahKubus={jumlahKubus}
            setJumlahKubus={setJumlahKubus}
            dugaan={dugaan}
            setDugaan={setDugaan}
          />

          <TahapKonstruksi
            dataKonstruksi={dataKonstruksi}
            setDataKonstruksi={setDataKonstruksi}
          />

          <TahapRefleksi
            refleksi={refleksi}
            setRefleksi={setRefleksi}
            masukan={masukan}
            setMasukan={setMasukan}
          />

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onNavigatePrev}
              className="flex h-[42px] items-center gap-2 rounded-[10px] border border-[#dce7e7] bg-white px-6 text-[12px] font-bold text-[#718096] transition-all hover:bg-[#f7fafb]"
            >
              <ArrowLeft size={18} />
              Kembali
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex h-[42px] flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#18aaa6] px-6 text-[12px] font-bold text-white shadow-[0_4px_12px_rgba(24,170,166,0.25)] transition-all hover:bg-[#108f8b] disabled:opacity-60"
            >
              {isSubmitting ? (
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
                  Menyimpan...
                </>
              ) : showSuccess ? (
                <>
                  <CheckCircle2 size={18} />
                  Berhasil!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Kirim Jawaban
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onNavigateNext}
              className="flex h-[42px] items-center gap-2 rounded-[10px] bg-[#18aaa6] px-6 text-[12px] font-bold text-white shadow-[0_4px_12px_rgba(24,170,166,0.25)] transition-all hover:bg-[#108f8b]"
            >
              Lanjut
              <ArrowRight size={18} />
            </button>
          </div>
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
    </div>
  );
}
