// src/components/GeoExploreMeeting3.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Eye,
  Sparkles,
  CheckCircle2,
  Send,
  Target,
  Lightbulb,
  MessageCircle,
  ClipboardList,
  School,
  BookOpen,
  Grid3X3,
  Play,
  Image,
  LayoutGrid,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import SubmitPopup from "./SubmitPopup";

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

const TahapOrientasi = ({ jawaban, setJawaban }) => {
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
            Mengenal konsep visualisasi spasial
          </p>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#d4eeee] mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#18aaa6] text-white">
            <Play size={20} />
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#14263d]">
              Putarlah video berikut!
            </p>
            <p className="text-[10px] text-[#718096]">
              Video tentang visualisasi spasial bangun ruang
            </p>
          </div>
        </div>
        <div className="mt-3 rounded-lg overflow-hidden border-2 border-[#18aaa6]/50">
          <video
            src="/videos/VIDEO_GEOEXPLORE.mp4"
            controls
            className="w-full aspect-video object-cover"
            poster="/images/pertemuan3/thumbnail.jpg" // opsional: tambahkan thumbnail
          >
            <p className="text-[11px] text-[#718096] text-center p-4">
              Browser Anda tidak mendukung pemutaran video.
            </p>
          </video>
        </div>
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
            Menurut kalian mengapa gambar pada video bisa terlihat berbeda-beda
            meskipun dengan objek yang digambar sama?
          </p>
          <textarea
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="mt-2 min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
          />
        </div>

        {/* Informasi Visualisasi Spasial */}
        <div className="rounded-[12px] bg-gradient-to-r from-[#e8f4f8] to-[#f0fafa] p-4 border border-[#b9e5e3] flex items-center gap-4">
          <div className="rounded-[12px] bg-gradient-to-r from-[#e8f4f8] to-[#f0fafa] p-4 border border-[#b9e5e3]">
            <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
              <Eye size={18} className="text-[#18aaa6]" />
              Tahukah kalian mengenai visualisasi spasial?
            </h4>

            {/* Gambar di tengah */}
            <div className="flex justify-center my-3">
              <img
                src="/images/pertemuan3/1.png"
                alt="Visualisasi Spasial"
                className="w-full max-w-[300px] h-auto object-contain rounded-lg"
              />
            </div>

            <p className="mt-2 text-[11px] text-[#4a6a6a] leading-relaxed">
              Seorang arsitek sebelum membangun sebuah bangunan akan merancang
              bangunannya agar menghasilkan bangunan dengan bentuk yang di
              inginkan. Arsitek akan menggambar dari berbagai arah agar dapat
              dipahami dan direalisasikan. Untuk melakukan perancangan ini
              seorang arsitek harus memiliki{" "}
              <span className="font-bold text-[#18aaa6]">
                kemampuan visualisasi spasial
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// PENGERTIAN VISUALISASI SPASIAL
// =====================================================

const PengertianVisualisasi = () => {
  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-gradient-to-br from-white to-[#f5f9ff] p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      <h3 className="text-[15px] font-extrabold text-[#14263d] mb-3 flex items-center gap-2">
        <BookOpen size={20} className="text-[#397ed0]" />
        Visualisasi Spasial
      </h3>
      <div className="rounded-[12px] bg-white p-4 border border-[#d4e4f7]">
        <p className="text-[12px] text-[#4a6a8a] leading-relaxed">
          Visualisasi spasial dibutuhkan untuk membantu memahami suatu objek
          tiga dimensi yang digambar pada sebuah bidang.
          <span className="font-bold text-[#397ed0]">
            {" "}
            Visualisasi spasial
          </span>{" "}
          didefinisikan sebagai kemampuan yang melibatkan daya imajinasi dan
          daya ruang tinggi.
        </p>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 2 - PERUMUSAN HIPOTESIS
// =====================================================

const TahapHipotesis = ({ dugaan, setDugaan }) => {
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
            Buat dugaan tentang visualisasi spasial
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <label className="block text-[13px] font-bold text-[#14263d] mb-2">
          ❓ Apakah satu tampilan saja cukup untuk mengetahui suatu bentuk
          bangun ruang?
        </label>
        <textarea
          value={dugaan}
          onChange={(e) => setDugaan(e.target.value)}
          placeholder="Ketik jawaban disini..."
          className="min-h-[80px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff5d4d] focus:ring-2 focus:ring-[#ff5d4d]/10"
        />
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 3 - PENGUMPULAN DATA
// =====================================================

const TahapPengumpulanData = ({
  dataVisualisasi,
  setDataVisualisasi,
  gambar1,
  setGambar1,
  gambar2,
  setGambar2,
  gambar3,
  setGambar3,
}) => {
  const handleChange = (field, value) => {
    setDataVisualisasi((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-white p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#397ed0] text-white shadow-[0_4px_10px_rgba(57,126,208,0.2)]">
          <ClipboardList size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#397ed0] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 3
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Pengumpulan Data
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Visualisasi spasial dari berbagai arah
          </p>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <img
          src="/images/pertemuan3/2.png"
          alt="Sifat-sifat Kubus"
          className="w-full max-w-[280px] h-auto object-contain rounded-lg"
        />
      </div>
      {/* Content */}
      <div className="space-y-4">
        {/* Contoh Dadu */}
        <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
          <h4 className="text-[12px] font-bold text-[#14263d] flex items-center gap-2">
            <Eye size={18} className="text-[#397ed0]" />
            Perhatikan contoh gambar dibawah ini!
          </h4>
          <p className="text-[11px] text-[#4a6a8a] mt-1">
            Sebuah dadu bertuliskan huruf S pada sisi atas dan bawah, huruf E
            pada sisi depan dan belakang, dan huruf O pada sisi kanan dan kiri.
          </p>
          <p className="text-[11px] text-[#4a6a8a] mt-1">
            Sehingga, tampilan dadu akan berbeda setiap kita melihat sisi atau
            arah yang berbeda.
          </p>
        </div>

        {/* Tabel Dadu */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f0f6ff]">
                <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">
                  Depan
                </th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">
                  Samping
                </th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">
                  Atas
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[24px] font-extrabold text-[#397ed0]">
                  <div className="flex justify-center my-3">
                    <img
                      src="/images/pertemuan3/3.png"
                      alt="Sifat-sifat Kubus"
                      className="w-full max-w-[100px] h-auto object-contain rounded-lg"
                    />
                  </div>
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[24px] font-extrabold text-[#ff5d4d]">
                  <div className="flex justify-center my-3">
                    <img
                      src="/images/pertemuan3/4.png"
                      alt="Sifat-sifat Kubus"
                      className="w-full max-w-[100px] h-auto object-contain rounded-lg"
                    />
                  </div>
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[24px] font-extrabold text-[#18aaa6]">
                  <div className="flex justify-center my-3">
                    <img
                      src="/images/pertemuan3/5.png"
                      alt="Sifat-sifat Kubus"
                      className="w-full max-w-[100px] h-auto object-contain rounded-lg"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Informasi */}
        <div className="rounded-[12px] bg-[#e8f4f8] p-4 border border-[#b9e5e3]">
          <p className="text-[11px] text-[#4a6a6a] leading-relaxed">
            <span className="font-bold">Bangun ruang</span> terlihat berbeda
            dari arah yang berbeda. Sebaliknya dengan mengetahui tampak bangun
            ruang dari berbagai arah, kalian dapat menentukan bangun ruang yang
            dimaksud.
          </p>
        </div>

        {/* Contoh Tampak */}
        <div className="rounded-[12px] bg-white p-4 border border-[#d4e4f7]">
          <h4 className="text-[12px] font-bold text-[#14263d] mb-3 text-center">
            CONTOH
          </h4>
          <div className="flex justify-center my-3">
            <img
              src="/images/pertemuan3/6.png"
              alt="Sifat-sifat Kubus"
              className="w-full max-w-[300px] h-auto object-contain rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center my-3">
                  <img
                    src="/images/pertemuan3/7.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[250px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center my-3">
                  <img
                    src="/images/pertemuan3/8.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[100px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center items-center my-3 min-h-[180px]">
                  <img
                    src="/images/pertemuan3/9.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[400px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* contoh 2 */}
          <div className="flex justify-center my-3">
            <img
              src="/images/pertemuan3/10.png"
              alt="Sifat-sifat Kubus"
              className="w-full max-w-[300px] h-auto object-contain rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center my-3">
                  <img
                    src="/images/pertemuan3/11.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[230px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center my-3">
                  <img
                    src="/images/pertemuan3/12.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[98px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#f0f6ff] rounded-lg p-3 border border-[#d4e4f7]">
                <div className="flex justify-center items-center my-3 min-h-[180px]">
                  <img
                    src="/images/pertemuan3/13.png"
                    alt="Sifat-sifat Kubus"
                    className="w-full max-w-[400px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
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

        {/* Perintah Penyelidikan */}
        <div className="rounded-[12px] bg-[#f0f6ff] p-4 border border-[#d4e4f7]">
          <p className="text-[12px] font-bold text-[#14263d] flex items-center gap-2">
            <Target size={18} className="text-[#397ed0]" />
            PENYELIDIKAN TIM!
          </p>
          <ul className="mt-2 space-y-1 text-[11px] text-[#4a6a8a] list-disc list-inside">
            <li>Buatlah minimal 3 susunan beberapa kubus</li>
            <li>Minimal terdiri atas 2 susun kubus keatas</li>
            <li>Jumlah susunan kesamping kanan atau kiri minimal 2 kubus</li>
            <li>
              Usahakan antar kubus memiliki warna berbeda untuk memudahkan
              analisis
            </li>
            <li>Gunakan Isometric Drawing Tool pada lembar selanjutnya</li>
            <li>
              Tangkap gambar dari bangun yang disusun dengan visualisasi spasial
              tampak depan, samping dan atas dan kumpulkan pada box
            </li>
          </ul>
        </div>

        {/* KUMPULKAN HASIL PENYELIDIKAN */}
        <div>
          <h4 className="text-[13px] font-bold text-[#14263d] mb-3 flex items-center gap-2">
            <Image size={18} className="text-[#397ed0]" />
            KUMPULKAN HASIL PENYELIDIKANMU DISINI
          </h4>

          {/* GAMBAR 1 */}
          <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7] mb-4">
            <p className="text-[12px] font-bold text-[#14263d] mb-3">
              GAMBAR 1
            </p>
            <p className="text-[10px] text-[#718096] mb-2">
              Tempelkan gambar hasil susunan bangun pertama!
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="border-2 border-dashed border-[#397ed0]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#397ed0]">DEPAN</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar1({
                      ...gambar1,
                      depan: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar1.depan && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar1.depan === "string"
                      ? "Gambar tersimpan"
                      : gambar1.depan.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#ff5d4d]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#ff5d4d]">SAMPING</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar1({
                      ...gambar1,
                      samping: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar1.samping && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar1.samping === "string"
                      ? "Gambar tersimpan"
                      : gambar1.samping.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#18aaa6]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#18aaa6]">ATAS</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar1({
                      ...gambar1,
                      atas: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar1.atas && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar1.atas === "string"
                      ? "Gambar tersimpan"
                      : gambar1.atas.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* GAMBAR 2 */}
          <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7] mb-4">
            <p className="text-[12px] font-bold text-[#14263d] mb-3">
              GAMBAR 2
            </p>
            <p className="text-[10px] text-[#718096] mb-2">
              Tempelkan gambar hasil susunan bangun kedua!
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="border-2 border-dashed border-[#397ed0]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#397ed0]">DEPAN</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar2({
                      ...gambar2,
                      depan: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar2.depan && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar2.depan === "string"
                      ? "Gambar tersimpan"
                      : gambar2.depan.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#ff5d4d]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#ff5d4d]">SAMPING</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar2({
                      ...gambar2,
                      samping: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar2.samping && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar2.samping === "string"
                      ? "Gambar tersimpan"
                      : gambar2.samping.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#18aaa6]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#18aaa6]">ATAS</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar2({
                      ...gambar2,
                      atas: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar2.atas && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar2.atas === "string"
                      ? "Gambar tersimpan"
                      : gambar2.atas.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* GAMBAR 3 */}
          <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
            <p className="text-[12px] font-bold text-[#14263d] mb-3">
              GAMBAR 3
            </p>
            <p className="text-[10px] text-[#718096] mb-2">
              Tempelkan gambar hasil susunan bangun ketiga!
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="border-2 border-dashed border-[#397ed0]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#397ed0]">DEPAN</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar3({
                      ...gambar3,
                      depan: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar3.depan && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar3.depan === "string"
                      ? "Gambar tersimpan"
                      : gambar3.depan.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#ff5d4d]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#ff5d4d]">SAMPING</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar3({
                      ...gambar3,
                      samping: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar3.samping && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar3.samping === "string"
                      ? "Gambar tersimpan"
                      : gambar3.samping.name}
                  </p>
                )}
              </div>
              <div className="border-2 border-dashed border-[#18aaa6]/50 rounded-lg p-2 text-center">
                <p className="text-[9px] font-bold text-[#18aaa6]">ATAS</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setGambar3({
                      ...gambar3,
                      atas: e.target.files[0] || null,
                    })
                  }
                  className="w-full text-[9px] mt-1"
                />
                {gambar3.atas && (
                  <p className="text-[8px] text-[#18aaa6] mt-1 truncate">
                    ✓{" "}
                    {typeof gambar3.atas === "string"
                      ? "Gambar tersimpan"
                      : gambar3.atas.name}
                  </p>
                )}
              </div>
            </div>
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

export default function GeoExploreMeeting3({
  onBack,
  onNavigateNext,
  onNavigatePrev,
}) {
  // State untuk Tahap 1
  const [jawabanOrientasi, setJawabanOrientasi] = useState("");

  // State untuk Tahap 2
  const [dugaan, setDugaan] = useState("");

  // State untuk Tahap 3 - Data Visualisasi
  const [dataVisualisasi, setDataVisualisasi] = useState({
    depan: "",
    samping: "",
    atas: "",
  });

  // State untuk Gambar (File / URL string)
  const [gambar1, setGambar1] = useState({
    depan: null,
    samping: null,
    atas: null,
  });
  const [gambar2, setGambar2] = useState({
    depan: null,
    samping: null,
    atas: null,
  });
  const [gambar3, setGambar3] = useState({
    depan: null,
    samping: null,
    atas: null,
  });

  // src/components/GeoExploreMeeting3.jsx - Perbaiki fungsi uploadImageFile

  // Metode alternatif menggunakan fetch langsung

  // src/components/GeoExploreMeeting3.jsx - Fungsi upload alternatif

  // src/components/GeoExploreMeeting3.jsx - Perbaiki fungsi upload

  const uploadImageFile = async (file, prefix) => {
    if (!file) return "";
    if (typeof file === "string") {
      // Jika sudah URL lengkap, return
      if (file.startsWith("http://") || file.startsWith("https://")) {
        return file;
      }
      return "";
    }

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${prefix}_${Date.now()}.${fileExt}`;

      console.log(`📤 Uploading: ${fileName}`);

      const { data, error } = await supabase.storage
        .from("student-uploads")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: true,
          contentType: file.type || "image/png",
        });

      if (error) {
        console.error("❌ Upload error:", error);
        return file.name;
      }

      console.log("✅ Upload success:", data);

      // =====================================================
      // CARA YANG BENAR UNTUK MENDAPATKAN PUBLIC URL
      // =====================================================

      // Method 1: Menggunakan getPublicUrl (REKOMENDASI)
      const { data: publicUrlData } = supabase.storage
        .from("student-uploads")
        .getPublicUrl(fileName);

      const publicUrl = publicUrlData.publicUrl;

      console.log("🔗 Public URL:", publicUrl);

      // Method 2: Manual (jika method 1 gagal)
      // const manualUrl = `${supabase.supabaseUrl}/storage/v1/object/public/student-uploads/${fileName}`;

      return publicUrl;
    } catch (err) {
      console.error("❌ Upload exception:", err);
      return file.name;
    }
  };
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
        if (!savedData) {
          console.log("No user session found");
          return;
        }

        const sessionData = JSON.parse(savedData);
        const userId = sessionData.id;

        if (!userId) {
          console.log("No userId found");
          return;
        }

        console.log("Fetching answers for userId:", userId);

        const { data, error } = await supabase
          .from("student_answers")
          .select("*")
          .eq("user_id", userId)
          .eq("module_type", "geoexplore")
          .eq("pertemuan", 3);

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        console.log("Fetched data:", data);
        // ... rest of code
      } catch (e) {
        console.error("Error loading existing answers:", e);
      }
    };

    fetchExistingAnswers();
  }, []);

  // ===================================================
  // SUBMIT JAWABAN
  // ===================================================
// State untuk Popup
const [showSubmitPopup, setShowSubmitPopup] = useState(false);
const [popupType, setPopupType] = useState("confirm"); // "confirm" | "success" | "error"
const [popupMessage, setPopupMessage] = useState("");
  // ===================================================
// SUBMIT JAWABAN
// ===================================================

const handleSubmit = async () => {
  // Cek apakah ada jawaban yang diisi
  const hasAnswers = 
    jawabanOrientasi.trim() ||
    dugaan.trim() ||
    Object.values(dataVisualisasi).some(v => v?.trim()) ||
    refleksi.trim() ||
    masukan.trim() ||
    Object.values(gambar1).some(v => v) ||
    Object.values(gambar2).some(v => v) ||
    Object.values(gambar3).some(v => v);

  if (!hasAnswers) {
    setPopupType("error");
    setPopupMessage("Silakan isi minimal 1 jawaban atau upload 1 gambar terlebih dahulu!");
    setShowSubmitPopup(true);
    return;
  }

  // Tampilkan popup konfirmasi
  setPopupType("confirm");
  setPopupMessage("Apakah Anda yakin ingin mengirimkan jawaban untuk Pertemuan 3?");
  setShowSubmitPopup(true);
};

// Fungsi eksekusi submit setelah konfirmasi
const executeSubmit = async () => {
  setShowSubmitPopup(false);
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
      setPopupType("error");
      setPopupMessage("Silakan login terlebih dahulu!");
      setShowSubmitPopup(true);
      setIsSubmitting(false);
      return;
    }

    const rowsToInsert = [];

    // Tahap 1 - Orientasi
    if (jawabanOrientasi.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geoexplore",
        pertemuan: 3,
        tahap: "orientasi_zpd",
        pertanyaan:
          "Mengapa gambar pada video bisa terlihat berbeda meskipun objek sama?",
        jawaban: jawabanOrientasi.trim(),
      });
    }

    // Tahap 2 - Hipotesis
    if (dugaan.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geoexplore",
        pertemuan: 3,
        tahap: "hipotesis",
        pertanyaan:
          "Apakah satu tampilan cukup untuk mengetahui bentuk bangun ruang?",
        jawaban: dugaan.trim(),
      });
    }

    // Tahap 3 - Data Visualisasi
    const visualisasiFields = [
      { key: "depan", label: "Tampak Depan" },
      { key: "samping", label: "Tampak Samping" },
      { key: "atas", label: "Tampak Atas" },
    ];

    visualisasiFields.forEach(({ key, label }) => {
      if (dataVisualisasi[key]?.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 3,
          tahap: "visualisasi",
          pertanyaan: label,
          jawaban: dataVisualisasi[key].trim(),
        });
      }
    });

    // Upload gambar ke bucket jika ada
    let g1DepanUrl = "", g1SampingUrl = "", g1AtasUrl = "";
    let g2DepanUrl = "", g2SampingUrl = "", g2AtasUrl = "";
    let g3DepanUrl = "", g3SampingUrl = "", g3AtasUrl = "";

    try {
      console.log("📤 Uploading Gambar 1...");
      g1DepanUrl = await uploadImageFile(gambar1.depan, `${userId}_p3_g1_depan`);
      g1SampingUrl = await uploadImageFile(gambar1.samping, `${userId}_p3_g1_samping`);
      g1AtasUrl = await uploadImageFile(gambar1.atas, `${userId}_p3_g1_atas`);
      console.log("✅ Gambar 1 uploaded");
    } catch (err) {
      console.error("Error uploading Gambar 1:", err);
    }

    try {
      console.log("📤 Uploading Gambar 2...");
      g2DepanUrl = await uploadImageFile(gambar2.depan, `${userId}_p3_g2_depan`);
      g2SampingUrl = await uploadImageFile(gambar2.samping, `${userId}_p3_g2_samping`);
      g2AtasUrl = await uploadImageFile(gambar2.atas, `${userId}_p3_g2_atas`);
      console.log("✅ Gambar 2 uploaded");
    } catch (err) {
      console.error("Error uploading Gambar 2:", err);
    }

    try {
      console.log("📤 Uploading Gambar 3...");
      g3DepanUrl = await uploadImageFile(gambar3.depan, `${userId}_p3_g3_depan`);
      g3SampingUrl = await uploadImageFile(gambar3.samping, `${userId}_p3_g3_samping`);
      g3AtasUrl = await uploadImageFile(gambar3.atas, `${userId}_p3_g3_atas`);
      console.log("✅ Gambar 3 uploaded");
    } catch (err) {
      console.error("Error uploading Gambar 3:", err);
    }

    console.log("🔗 URLs:", {
      g1DepanUrl, g1SampingUrl, g1AtasUrl,
      g2DepanUrl, g2SampingUrl, g2AtasUrl,
      g3DepanUrl, g3SampingUrl, g3AtasUrl
    });

    // Gambar (simpan URL / nama file sebagai jawaban)
    const gambarData = [
      { name: "Gambar 1 - Depan", value: g1DepanUrl || gambar1.depan?.name || "" },
      { name: "Gambar 1 - Samping", value: g1SampingUrl || gambar1.samping?.name || "" },
      { name: "Gambar 1 - Atas", value: g1AtasUrl || gambar1.atas?.name || "" },
      { name: "Gambar 2 - Depan", value: g2DepanUrl || gambar2.depan?.name || "" },
      { name: "Gambar 2 - Samping", value: g2SampingUrl || gambar2.samping?.name || "" },
      { name: "Gambar 2 - Atas", value: g2AtasUrl || gambar2.atas?.name || "" },
      { name: "Gambar 3 - Depan", value: g3DepanUrl || gambar3.depan?.name || "" },
      { name: "Gambar 3 - Samping", value: g3SampingUrl || gambar3.samping?.name || "" },
      { name: "Gambar 3 - Atas", value: g3AtasUrl || gambar3.atas?.name || "" },
    ];

    gambarData.forEach(({ name, value }) => {
      if (value) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 3,
          tahap: "gambar",
          pertanyaan: name,
          jawaban: value,
        });
      }
    });

    // Tahap 4 - Refleksi
    if (refleksi.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geoexplore",
        pertemuan: 3,
        tahap: "refleksi",
        pertanyaan: "Apakah dugaan awal sudah benar?",
        jawaban: refleksi.trim(),
      });
    }
    if (masukan.trim()) {
      rowsToInsert.push({
        user_id: userId,
        module_type: "geoexplore",
        pertemuan: 3,
        tahap: "masukan",
        pertanyaan: "Masukan dan saran untuk perbaikan",
        jawaban: masukan.trim(),
      });
    }

    if (rowsToInsert.length === 0) {
      setPopupType("error");
      setPopupMessage("Silakan isi minimal 1 jawaban terlebih dahulu!");
      setShowSubmitPopup(true);
      setIsSubmitting(false);
      return;
    }

    // Cek dan hapus jawaban lama jika ada
    const { data: existingAnswers } = await supabase
      .from("student_answers")
      .select("id, tahap, jawaban")
      .eq("user_id", userId)
      .eq("module_type", "geoexplore")
      .eq("pertemuan", 3);

    if (existingAnswers && existingAnswers.length > 0) {
      // Hapus file gambar lama dari Supabase Storage jika ada
      const imageFilesToDelete = existingAnswers
        .filter((item) => item.tahap === "gambar" && item.jawaban)
        .map((item) => {
          const parts = item.jawaban.split("/student-uploads/");
          return parts.length > 1 ? parts[1] : null;
        })
        .filter(Boolean);

      if (imageFilesToDelete.length > 0) {
        try {
          console.log("🗑️ Menghapus gambar lama dari storage:", imageFilesToDelete);
          await supabase.storage
            .from("student-uploads")
            .remove(imageFilesToDelete);
        } catch (storageErr) {
          console.error("Gagal menghapus gambar lama dari storage:", storageErr);
        }
      }

      await supabase
        .from("student_answers")
        .delete()
        .eq("user_id", userId)
        .eq("module_type", "geoexplore")
        .eq("pertemuan", 3);
    }

    const { error: insertError } = await supabase
      .from("student_answers")
      .insert(rowsToInsert);

    if (insertError) {
      console.error("Error saving answers:", insertError);
      setPopupType("error");
      setPopupMessage("Gagal menyimpan jawaban: " + insertError.message);
      setShowSubmitPopup(true);
      setIsSubmitting(false);
      return;
    }

    // Update progress
    const { data: existingProgress } = await supabase
      .from("progress")
      .select("id")
      .eq("user_id", userId)
      .eq("module_type", "geoexplore")
      .eq("pertemuan", 3);

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
        .eq("pertemuan", 3);
    } else {
      await supabase.from("progress").insert([
        {
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 3,
          status: "completed",
          progress_percentage: 100,
          completed_at: new Date().toISOString(),
        },
      ]);
    }

    // Tampilkan popup sukses
    setPopupType("success");
    setPopupMessage("Jawaban Anda berhasil dikirim untuk Pertemuan 3!");
    setShowSubmitPopup(true);
    
    setTimeout(() => {
      setShowSubmitPopup(false);
      if (onNavigateNext) onNavigateNext();
    }, 2000);

  } catch (err) {
    console.error("Error submitting:", err);
    setPopupType("error");
    setPopupMessage("Terjadi kesalahan: " + err.message);
    setShowSubmitPopup(true);
  } finally {
    setIsSubmitting(false);
  }
};

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
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
              Pertemuan 3
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
            Pertemuan 3
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-[24px] font-extrabold text-[#14263d] sm:text-[28px]">
            Visualisasi Spasial
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
          />

          <PengertianVisualisasi />

          <TahapHipotesis dugaan={dugaan} setDugaan={setDugaan} />

          <TahapPengumpulanData
            dataVisualisasi={dataVisualisasi}
            setDataVisualisasi={setDataVisualisasi}
            gambar1={gambar1}
            setGambar1={setGambar1}
            gambar2={gambar2}
            setGambar2={setGambar2}
            gambar3={gambar3}
            setGambar3={setGambar3}
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
    {/* SUBMIT POPUP */}
<SubmitPopup
  isOpen={showSubmitPopup}
  onClose={() => {
    if (popupType === "success") {
      if (onNavigateNext) onNavigateNext();
    }
    setShowSubmitPopup(false);
  }}
  onConfirm={executeSubmit}
  title={
    popupType === "confirm" ? "Kirim Jawaban?" :
    popupType === "success" ? "Berhasil!" :
    "Gagal!"
  }
  message={popupMessage}
  confirmText="Ya, Kirim"
  cancelText="Batal"
  isLoading={isSubmitting}
  type={popupType}
/>
    </>
  );
}
