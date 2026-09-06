// src/components/GeoExploreMeeting1.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Grid3X3,
  Eye,
  Calculator,
  Sparkles,
  CheckCircle2,
  Pencil,
  Save,
  Send,
  Target,
  Lightbulb,
  MessageCircle,
  FileText,
  ClipboardList,
  School,
  Users,
  BookOpen,
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
            Mengenal konsep bangun ruang di sekitar kita
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <img
          src="/images/pertemuan1/1.png"
          alt="Gambar Bangun Ruang"
          className="w-[400px] h-auto object-contain rounded-lg"
        />
      </div>
      {/* Content */}
      <div className="space-y-4">
        {/* Definisi Bangun Ruang */}
        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#d4eeee]">
          <h4 className="text-[13px] font-extrabold text-[#14263d]">
            Apa itu bangun ruang?
          </h4>
          <p className="mt-1 text-[12px] text-[#4a6a6a] leading-relaxed">
            <span className="font-bold text-[#18aaa6]">Bangun ruang</span>{" "}
            adalah bangun yang memiliki ruang atau volume dan dibatasi oleh
            sisi-sisi atau biasa disebut dengan bangun 3D.
          </p>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-[#718096]">
            <School size={16} className="text-[#18aaa6]" />
            <span>Apakah bangun ruang ada di sekitar kita?</span>
          </div>
        </div>

        {/* Pertanyaan */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Apakah ruang kelas yang saat ini kalian gunakan untuk belajar
            termasuk bangun ruang?
          </label>
          <textarea
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[80px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
          />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 2 - PERUMUSAN HIPOTESIS
// =====================================================

const TahapHipotesis = ({
  bentukRuang,
  setBentukRuang,
  alasan,
  setAlasan,
  jumlahSisi,
  setJumlahSisi,
  jumlahRusukSudut,
  setJumlahRusukSudut,
}) => {
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
            Buat dugaan awal tentang bentuk ruang kelas
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Pilihan Bentuk */}
        <div>
          <p className="text-[13px] font-bold text-[#14263d] mb-3">
            ❓ Jika ruang kelas kalian bangun ruang, bangun ruang yang manakah
            ruang kelas kalian?
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setBentukRuang("KUBUS")}
              className={`rounded-[12px] border-2 p-4 text-center transition-all ${
                bentukRuang === "KUBUS"
                  ? "border-[#18aaa6] bg-[#f0fafa] shadow-[0_0_0_4px_rgba(24,170,166,0.1)]"
                  : "border-[#dce7e7] hover:border-[#18aaa6] hover:bg-[#f7fcfc]"
              }`}
            >
              <img
                src="/images/pertemuan1/2.png"
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
              onClick={() => setBentukRuang("BALOK")}
              className={`rounded-[12px] border-2 p-4 text-center transition-all ${
                bentukRuang === "BALOK"
                  ? "border-[#ff5d4d] bg-[#fff5f3] shadow-[0_0_0_4px_rgba(255,93,77,0.1)]"
                  : "border-[#dce7e7] hover:border-[#ff5d4d] hover:bg-[#fff8f7]"
              }`}
            >
              <img
                src="/images/pertemuan1/3.png"
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

        {/* Alasan */}
        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            ❓ Kenapa kalian memilih ruang kelasmu berbentuk seperti bangun
            ruang yang kalian pilih diatas?
          </label>
          <textarea
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff5d4d] focus:ring-2 focus:ring-[#ff5d4d]/10"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Jumlah Sisi */}
          <div>
            <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
              ❓ Ada berapa sisi yang membatasi ruang kelas kalian?
            </label>
            <input
              type="text"
              value={jumlahSisi}
              onChange={(e) => setJumlahSisi(e.target.value)}
              placeholder="Contoh: 6"
              className="w-full rounded-[10px] border border-[#dce7e7] bg-white px-4 py-2.5 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff5d4d] focus:ring-2 focus:ring-[#ff5d4d]/10"
            />
          </div>
          {/* Jumlah Rusuk & Titik Sudut */}
          <div>
            <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
              ❓ Berapa garis dan titik sudut di ruang kelas?
            </label>
            <input
              type="text"
              value={jumlahRusukSudut}
              onChange={(e) => setJumlahRusukSudut(e.target.value)}
              placeholder="Contoh: 12 rusuk, 8 titik"
              className="w-full rounded-[10px] border border-[#dce7e7] bg-white px-4 py-2.5 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#ff5d4d] focus:ring-2 focus:ring-[#ff5d4d]/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 3 - PENGUMPULAN DATA & EKSPLORASI
// =====================================================

const TahapEksplorasi = ({ dataEksplorasi, setDataEksplorasi }) => {
  const handleChange = (field, value) => {
    setDataEksplorasi((prev) => ({ ...prev, [field]: value }));
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
              Pengumpulan Data & Eksplorasi
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Cari benda lain yang berbeda dengan ruang kelas
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <img
          src="/images/pertemuan1/4.png"
          alt="Gambar Bangun Ruang"
          className="w-[500px] h-auto object-contain rounded-lg"
        />
      </div>
      {/* Content */}
      <div>
        <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7] mb-4">
          <p className="text-[12px] font-bold text-[#14263d] flex items-center gap-2">
            <Lightbulb size={18} className="text-[#397ed0]" />
            Perintah!
          </p>
          <p className="text-[11px] text-[#4a6a8a] mt-1">
            Carilah benda atau bangunan yang memiliki bentuk berbeda dengan
            ruang kelas kalian (kubus/balok), kemudian uraikanlah benda tersebut
            untuk melengkapi data berikut!
          </p>
        </div>

        {/* Tabel Eksplorasi */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f0f6ff]">
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                  No
                </th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                  Pernyataan
                </th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">
                  Jawaban
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  1.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Nama
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.nama || ""}
                    onChange={(e) => handleChange("nama", e.target.value)}
                    placeholder="Contoh: Rubik / Kulkas"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  2.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Bentuk
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.bentuk || ""}
                    onChange={(e) => handleChange("bentuk", e.target.value)}
                    placeholder="Contoh: Balok"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  3.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Ciri sisinya
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.ciriSisi || ""}
                    onChange={(e) => handleChange("ciriSisi", e.target.value)}
                    placeholder="Contoh: 6 sisi berbentuk persegi"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  4.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Jumlah rusuk
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.jumlahRusuk || ""}
                    onChange={(e) =>
                      handleChange("jumlahRusuk", e.target.value)
                    }
                    placeholder="Contoh: 12"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  5.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Jumlah titik sudut dan bentuknya
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.titikSudut || ""}
                    onChange={(e) => handleChange("titikSudut", e.target.value)}
                    placeholder="Contoh: 8 titik sudut siku-siku"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">
                  6.
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">
                  Diagonalnya
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input
                    type="text"
                    value={dataEksplorasi.diagonal || ""}
                    onChange={(e) => handleChange("diagonal", e.target.value)}
                    placeholder="Contoh: Diagonal sisi 12, diagonal ruang 4"
                    className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-3 py-1.5 text-[11px] text-[#26364b] outline-none transition-all focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SIFAT BANGUN RUANG - KUBUS & BALOK (Informasi)
// =====================================================

const SifatBangunRuang = () => {
  return (
    <section className="rounded-[16px] border border-[#e5eeee] bg-gradient-to-br from-white to-[#f8fbfb] p-6">
      <h3 className="text-[15px] font-extrabold text-[#14263d] mb-4 flex items-center gap-2">
        <BookOpen size={20} className="text-[#18aaa6]" />
        Sifat Bangun Ruang
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* KUBUS */}
        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#d4eeee]">
          <h4 className="text-[14px] font-extrabold text-[#18aaa6] flex items-center gap-2">
            <Box size={18} />
            KUBUS
          </h4>

          {/* Gambar Kubus */}
          <div className="flex justify-center my-2">
            <img
              src="/images/pertemuan1/5.png"
              alt="Sifat-sifat Kubus"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>

          <p className="text-[10px] text-[#4a6a6a] mt-1 leading-relaxed">
            Bangun ruang yang dibatasi oleh dua bidang persegi yang sejajar dan
            kongruen serta bidang tegak yang menghubungkan bidang tersebut
            berupa persegi juga.
          </p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#18aaa6]" />
              <span>6 sisi kongruen</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#18aaa6]" />
              <span>12 rusuk sama panjang</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#18aaa6]" />
              <span>8 titik sudut siku-siku</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 text-[9px] text-[#718096]">
            <div className="bg-white rounded p-1.5 text-center border border-[#d4eeee]">
              <span className="font-bold text-[#18aaa6]">12</span>
              <br />
              Diagonal Sisi
            </div>
            <div className="bg-white rounded p-1.5 text-center border border-[#d4eeee]">
              <span className="font-bold text-[#18aaa6]">4</span>
              <br />
              Diagonal Ruang
            </div>
            <div className="bg-white rounded p-1.5 text-center border border-[#d4eeee]">
              <span className="font-bold text-[#18aaa6]">6</span>
              <br />
              Bidang Diagonal
            </div>
          </div>
        </div>

        {/* BALOK */}
        <div className="rounded-[12px] bg-[#fff5f3] p-4 border border-[#ffd9c9]">
          <h4 className="text-[14px] font-extrabold text-[#ff5d4d] flex items-center gap-2">
            <Box size={18} />
            BALOK
          </h4>

          {/* Gambar Balok */}
          <div className="flex justify-center my-2">
            <img
              src="/images/pertemuan1/6.png"
              alt="Sifat-sifat Balok"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

          <p className="text-[10px] text-[#6a4a4a] mt-1 leading-relaxed">
            Prisma yang dibatasi oleh dua bidang persegi panjang yang sejajar
            dan kongruen, serta bidang-bidang tegak yang menghubungkan bidang
            persegi panjang.
          </p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#ff5d4d]" />
              <span>6 sisi (3 pasang)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#ff5d4d]" />
              <span>12 rusuk (3 kelompok)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#14263d]">
              <CheckCircle2 size={14} className="text-[#ff5d4d]" />
              <span>8 titik sudut</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 text-[9px] text-[#718096]">
            <div className="bg-white rounded p-1.5 text-center border border-[#ffd9c9]">
              <span className="font-bold text-[#ff5d4d]">12</span>
              <br />
              Diagonal Sisi
            </div>
            <div className="bg-white rounded p-1.5 text-center border border-[#ffd9c9]">
              <span className="font-bold text-[#ff5d4d]">4</span>
              <br />
              Diagonal Ruang
            </div>
            <div className="bg-white rounded p-1.5 text-center border border-[#ffd9c9]">
              <span className="font-bold text-[#ff5d4d]">6</span>
              <br />
              Bidang Diagonal
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

export default function GeoExploreMeeting1({
  onBack,
  onNavigateNext,
  onNavigatePrev,
  meetingId = 1,
}) {
  // State untuk jawaban Tahap 1
  const [jawabanOrientasi, setJawabanOrientasi] = useState("");

  // State untuk Tahap 2
  const [bentukRuang, setBentukRuang] = useState("");
  const [alasan, setAlasan] = useState("");
  const [jumlahSisi, setJumlahSisi] = useState("");
  const [jumlahRusukSudut, setJumlahRusukSudut] = useState("");

  // State untuk Tahap 3
  const [dataEksplorasi, setDataEksplorasi] = useState({
    nama: "",
    bentuk: "",
    ciriSisi: "",
    jumlahRusuk: "",
    titikSudut: "",
    diagonal: "",
  });

  // State untuk Tahap 4
  const [refleksi, setRefleksi] = useState("");
  const [masukan, setMasukan] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk Popup
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [popupType, setPopupType] = useState("confirm"); // "confirm" | "success" | "error"
  const [popupMessage, setPopupMessage] = useState("");

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
          .eq("pertemuan", 1);

        if (error || !data || data.length === 0) return;

        const eksplorasiMap = {};

        data.forEach((item) => {
          if (item.tahap === "orientasi_zpd") {
            setJawabanOrientasi(item.jawaban || "");
          } else if (item.tahap === "hipotesis_bentuk") {
            setBentukRuang(item.jawaban || "");
          } else if (item.tahap === "hipotesis_alasan") {
            setAlasan(item.jawaban || "");
          } else if (item.tahap === "hipotesis_sisi") {
            setJumlahSisi(item.jawaban || "");
          } else if (item.tahap === "hipotesis_rusuk_sudut") {
            setJumlahRusukSudut(item.jawaban || "");
          } else if (item.tahap === "refleksi") {
            setRefleksi(item.jawaban || "");
          } else if (item.tahap === "masukan") {
            setMasukan(item.jawaban || "");
          } else if (item.tahap === "eksplorasi") {
            if (item.pertanyaan === "Nama benda") eksplorasiMap.nama = item.jawaban;
            if (item.pertanyaan === "Bentuk benda") eksplorasiMap.bentuk = item.jawaban;
            if (item.pertanyaan === "Ciri sisinya") eksplorasiMap.ciriSisi = item.jawaban;
            if (item.pertanyaan === "Jumlah rusuk") eksplorasiMap.jumlahRusuk = item.jawaban;
            if (item.pertanyaan === "Jumlah titik sudut dan bentuknya") eksplorasiMap.titikSudut = item.jawaban;
            if (item.pertanyaan === "Diagonalnya") eksplorasiMap.diagonal = item.jawaban;
          }
        });

        if (Object.keys(eksplorasiMap).length > 0) {
          setDataEksplorasi((prev) => ({ ...prev, ...eksplorasiMap }));
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
    // Cek apakah ada jawaban yang diisi
    const hasAnswers = 
      jawabanOrientasi.trim() ||
      bentukRuang ||
      alasan.trim() ||
      jumlahSisi.trim() ||
      jumlahRusukSudut.trim() ||
      Object.values(dataEksplorasi).some(v => v?.trim()) ||
      refleksi.trim() ||
      masukan.trim();

    if (!hasAnswers) {
      setPopupType("error");
      setPopupMessage("Silakan isi minimal 1 jawaban terlebih dahulu!");
      setShowSubmitPopup(true);
      return;
    }

    // Tampilkan popup konfirmasi
    setPopupType("confirm");
    setPopupMessage("Apakah Anda yakin ingin mengirimkan jawaban untuk Pertemuan 1?");
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

      // Simpan jawaban ke student_answers
      const rowsToInsert = [];

      // Tahap 1 - Orientasi
      if (jawabanOrientasi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "orientasi_zpd",
          pertanyaan: "Apakah ruang kelas termasuk bangun ruang?",
          jawaban: jawabanOrientasi.trim(),
        });
      }

      // Tahap 2 - Hipotesis
      if (bentukRuang) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "hipotesis_bentuk",
          pertanyaan: "Bentuk ruang kelas",
          jawaban: bentukRuang,
        });
      }
      if (alasan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "hipotesis_alasan",
          pertanyaan: "Alasan memilih bentuk",
          jawaban: alasan.trim(),
        });
      }
      if (jumlahSisi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "hipotesis_sisi",
          pertanyaan: "Jumlah sisi ruang kelas",
          jawaban: jumlahSisi.trim(),
        });
      }
      if (jumlahRusukSudut.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "hipotesis_rusuk_sudut",
          pertanyaan: "Jumlah rusuk dan titik sudut",
          jawaban: jumlahRusukSudut.trim(),
        });
      }

      // Tahap 3 - Eksplorasi
      const eksplorasiFields = [
        { key: "nama", label: "Nama benda" },
        { key: "bentuk", label: "Bentuk benda" },
        { key: "ciriSisi", label: "Ciri sisinya" },
        { key: "jumlahRusuk", label: "Jumlah rusuk" },
        { key: "titikSudut", label: "Jumlah titik sudut dan bentuknya" },
        { key: "diagonal", label: "Diagonalnya" },
      ];

      eksplorasiFields.forEach(({ key, label }) => {
        if (dataEksplorasi[key]?.trim()) {
          rowsToInsert.push({
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 1,
            tahap: "eksplorasi",
            pertanyaan: label,
            jawaban: dataEksplorasi[key].trim(),
          });
        }
      });

      // Tahap 4 - Refleksi
      if (refleksi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
          tahap: "refleksi",
          pertanyaan: "Apakah dugaan awal sudah benar?",
          jawaban: refleksi.trim(),
        });
      }
      if (masukan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 1,
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

      // Cek apakah sudah ada jawaban sebelumnya untuk geoexplore pertemuan 1
      const { data: existingAnswers } = await supabase
        .from("student_answers")
        .select("id")
        .eq("user_id", userId)
        .eq("module_type", "geoexplore")
        .eq("pertemuan", 1);

      if (existingAnswers && existingAnswers.length > 0) {
        // Hapus hanya jawaban geoexplore pertemuan 1
        await supabase
          .from("student_answers")
          .delete()
          .eq("user_id", userId)
          .eq("module_type", "geoexplore")
          .eq("pertemuan", 1);
      }

      // Insert jawaban baru
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
        .eq("pertemuan", 1);

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
          .eq("pertemuan", 1);
      } else {
        await supabase.from("progress").insert([
          {
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 1,
            status: "completed",
            progress_percentage: 100,
            completed_at: new Date().toISOString(),
          },
        ]);
      }

      // Tampilkan popup sukses
      setPopupType("success");
      setPopupMessage("Jawaban Anda berhasil dikirim untuk Pertemuan 1!");
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
                Pertemuan 1
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
              Pertemuan 1
            </span>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-6 text-center">
            <h1 className="text-[24px] font-extrabold text-[#14263d] sm:text-[28px]">
              Unsur dan Sifat Bangun Ruang
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

            <TahapHipotesis
              bentukRuang={bentukRuang}
              setBentukRuang={setBentukRuang}
              alasan={alasan}
              setAlasan={setAlasan}
              jumlahSisi={jumlahSisi}
              setJumlahSisi={setJumlahSisi}
              jumlahRusukSudut={jumlahRusukSudut}
              setJumlahRusukSudut={setJumlahRusukSudut}
            />

            {/* Sifat Bangun Ruang (Informasi) */}
            <SifatBangunRuang />

            <TahapEksplorasi
              dataEksplorasi={dataEksplorasi}
              setDataEksplorasi={setDataEksplorasi}
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