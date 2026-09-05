// src/components/GeoExploreMeeting4.jsx
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Calculator,
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
  Gift,
  Ruler,
  Sigma,
  Table,
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
  jawaban1,
  setJawaban1,
  pilihanBagian,
  setPilihanBagian,
  jawaban2,
  setJawaban2,
  jawaban3,
  setJawaban3,
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
            Mengenal konsep luas permukaan bangun ruang
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* AYO MENGAMATI */}
        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#d4eeee]">
          <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
            <Gift size={18} className="text-[#18aaa6]" />
            AYO MENGAMATI
          </h4>
          <p className="mt-1 text-[12px] text-[#4a6a6a] leading-relaxed">
            Kardus akan digunakan untuk mengirim kado sehingga perlu dihias
            dengan dilapisi kertas kado. Menurut kalian berapa banyak kertas
            kado yang dibutuhkan untuk menutup seluruh bagian luar kardus?
          </p>
        </div>

        {/* Gambar Kardus */}
        <div className="flex justify-center my-4">
          <img
            src="/images/pertemuan4/1.png"
            alt="Kardus Kado"
            className="w-[300px] h-auto object-contain rounded-lg border border-[#e5eeee]"
          />
        </div>

        {/* Pertanyaan 1 - Pilihan Bagian */}
        <div>
          <p className="text-[13px] font-bold text-[#14263d] mb-3">
            ❓ Bagian mana saja dari kardus yang perlu untuk ditutup dengan kertas kado?
          </p>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-[10px] border border-[#dce7e7] hover:border-[#18aaa6] cursor-pointer transition-all">
              <input
                type="radio"
                name="bagian"
                value="atas"
                checked={pilihanBagian === "atas"}
                onChange={(e) => setPilihanBagian(e.target.value)}
                className="accent-[#18aaa6]"
              />
              <span className="text-[12px] text-[#26364b]">Bagian atas saja</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-[10px] border border-[#dce7e7] hover:border-[#18aaa6] cursor-pointer transition-all">
              <input
                type="radio"
                name="bagian"
                value="depan"
                checked={pilihanBagian === "depan"}
                onChange={(e) => setPilihanBagian(e.target.value)}
                className="accent-[#18aaa6]"
              />
              <span className="text-[12px] text-[#26364b]">Bagian depan saja</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-[10px] border border-[#dce7e7] hover:border-[#18aaa6] cursor-pointer transition-all">
              <input
                type="radio"
                name="bagian"
                value="semua"
                checked={pilihanBagian === "semua"}
                onChange={(e) => setPilihanBagian(e.target.value)}
                className="accent-[#18aaa6]"
              />
              <span className="text-[12px] text-[#26364b]">Semua bagian luar kardus</span>
            </label>
          </div>
        </div>

        {/* Pertanyaan 2 */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Apakah cukup jika kita hanya menutup bagian atas dan depan kardus?
          </label>
          <textarea
            value={jawaban2}
            onChange={(e) => setJawaban2(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
          />
        </div>

        {/* Pertanyaan 3 */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Jadi, apa yang perlu kita ketahui agar dapat menentukan banyak kertas kado yang dibutuhkan?
          </label>
          <textarea
            value={jawaban3}
            onChange={(e) => setJawaban3(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#18aaa6] focus:ring-2 focus:ring-[#18aaa6]/10"
          />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// BANTUAN - JARING-JARING
// =====================================================

const BantuanJaringJaring = ({
  jawabanBantuan1,
  setJawabanBantuan1,
  pilihanBantuan,
  setPilihanBantuan,
}) => {
  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-gradient-to-br from-white to-[#f5f9ff] p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      <h3 className="text-[15px] font-extrabold text-[#14263d] mb-3 flex items-center gap-2">
        <BookOpen size={20} className="text-[#397ed0]" />
        BANTUAN
      </h3>
      <div className="rounded-[12px] bg-white p-4 border border-[#d4e4f7] mb-4">
        <p className="text-[12px] text-[#4a6a8a] leading-relaxed">
          Agar seluruh kardus tertutup, kita perlu mengetahui{" "}
          <span className="font-bold text-[#397ed0]">luas setiap bagian kardus</span>{" "}
          dengan membuka kardus menjadi tampilan{" "}
          <span className="font-bold text-[#397ed0]">jaring-jaring</span>. Coba
          sekarang perhatikan gambar dari jaring-jaring yang telah dibuka!
        </p>
      </div>

      <div className="mt-4">
        {/* Layout dengan display inline-flex */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          {/* Sisi Kiri - Gambar */}
          <div style={{ width: "30%", flexShrink: 0 }}>
            <img
              src="/images/pertemuan4/2.png"
              alt="Jaring-jaring Kubus"
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                border: "1px solid #d4e4f7",
              }}
            />
          </div>

          {/* Sisi Kanan - Pertanyaan */}
          <div style={{ width: "70%", flexShrink: 0 }}>
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#14263d",
                  marginBottom: "8px",
                }}
              >
                ❓ Apa yang terjadi pada kardus setelah dibuka? Ada berapa bagian/sisi yang terlihat setelah kardus dibuka?
              </label>
              <textarea
                value={jawabanBantuan1}
                onChange={(e) => setJawabanBantuan1(e.target.value)}
                placeholder="Ketik jawaban disini..."
                style={{
                  minHeight: "60px",
                  width: "100%",
                  resize: "none",
                  borderRadius: "10px",
                  border: "1px solid #dce7e7",
                  background: "white",
                  padding: "12px 16px",
                  fontSize: "12px",
                  color: "#26364b",
                  outline: "none",
                  transition: "all 0.2s",
                }}
              />
            </div>

            {/* Pertanyaan 2 - Ya/Tidak */}
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#14263d",
                  marginBottom: "12px",
                }}
              >
                ❓ Menurut kalian apakah semua bagian yang terlihat tersebut merupakan bagian dari permukaan kardus?
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #dce7e7",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <input
                    type="radio"
                    name="bantuan"
                    value="ya"
                    checked={pilihanBantuan === "ya"}
                    onChange={(e) => setPilihanBantuan(e.target.value)}
                    style={{ accentColor: "#397ed0" }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#2ea03c",
                    }}
                  >
                    Ya
                  </span>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #dce7e7",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <input
                    type="radio"
                    name="bantuan"
                    value="tidak"
                    checked={pilihanBantuan === "tidak"}
                    onChange={(e) => setPilihanBantuan(e.target.value)}
                    style={{ accentColor: "#397ed0" }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#ff5d4d",
                    }}
                  >
                    Tidak
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
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
            Buat dugaan tentang luas permukaan
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Informasi */}
        <div className="rounded-[12px] bg-[#fff5f3] p-4 border border-[#ffd9c9]">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {/* Sisi Kiri - Teks */}
            <div style={{ flex: 1 }}>
              <p className="text-[11px] text-[#6a4a4a] leading-relaxed">
                <span className="font-bold text-[#ff5d4d]">Luas permukaan bangun ruang</span>{" "}
                adalah{" "}
                <span className="font-bold">
                  jumlah luas seluruh sisi yang terdapat pada bagian luar bangun ruang
                </span>{" "}
                tersebut. Sehingga untuk mengetahui luas permukaan bangun ruang
                dengan lebih mudah, kita dapat membuka bangun tersebut menjadi{" "}
                <span className="font-bold text-[#ff5d4d]">jaring-jaring</span>.
              </p>
            </div>

            {/* Sisi Kanan - Gambar */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/pertemuan4/3.png"
                alt="Jaring-jaring"
                style={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Menulis Dugaan */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Tuliskan dugaan kalian jika ingin mengetahui banyaknya kertas kado yang dibutuhkan maka apa yang harus dilakukan terhadap seluruh permukaan kardus tersebut?
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
// TAHAP 3 - PENGUMPULAN DATA (KUBUS)
// =====================================================

const TahapKubus = ({
  rumusSisi,
  setRumusSisi,
  luasSisi,
  setLuasSisi,
  luasPermukaan,
  setLuasPermukaan,
  jawabanKertas,
  setJawabanKertas,
  tabelKubus,
  setTabelKubus,
}) => {
  const handleTabelChange = (index, field, value) => {
    const newData = [...tabelKubus];
    newData[index] = { ...newData[index], [field]: value };
    setTabelKubus(newData);
  };

  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-white p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#397ed0] text-white shadow-[0_4px_10px_rgba(57,126,208,0.2)]">
          <Calculator size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#397ed0] px-3 py-1 text-[10px] font-bold text-white">
              Tahap 3
            </span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">
              Pengumpulan Data - Kubus
            </h3>
          </div>
          <p className="text-[11px] text-[#718096]">
            Menentukan rumus luas permukaan kubus
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Gambar Jaring-jaring Kubus */}
        <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
          <p className="text-[12px] font-bold text-[#14263d] flex items-center gap-2 mb-3">
            <Grid3X3 size={18} className="text-[#397ed0]" />
            Perhatikan jaring-jaring bangun ruang kubus berikut!
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Sisi Kiri - Gambar */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/pertemuan4/4.png"
                alt="Jaring-jaring Kubus dengan sisi"
                style={{ width: "250px", height: "auto", objectFit: "contain" }}
              />
            </div>

            {/* Sisi Kanan - Pernyataan */}
            <div style={{ flex: 1 }}>
              <p className="text-[11px] text-[#4a6a8a] leading-relaxed">
                Jaring-jaring kubus terdiri dari 6 sisi berbentuk persegi dengan panjang sisi ={" "}
                <span className="font-bold text-[#397ed0]">s</span>. Sehingga
                untuk mengetahui luas permukaan kubus kita harus mencari luas
                permukaan 1 sisi kubus terlebih dahulu.
              </p>
            </div>
          </div>
        </div>

        {/* Rumus 1 sisi */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Apa rumus untuk mengukur luas permukaan 1 sisi kubus?
          </label>
          <input
            type="text"
            value={rumusSisi}
            onChange={(e) => setRumusSisi(e.target.value)}
            placeholder="Contoh: s × s atau s²"
            className="w-full rounded-[10px] border border-[#dce7e7] bg-white px-4 py-2.5 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
          />
        </div>

        {/* Informasi Rumus */}
        <div className="rounded-[12px] bg-[#e8f5e8] p-4 border border-[#b5e6c0]">
          <p className="text-[11px] text-[#2d6a2d] leading-relaxed">
            <span className="font-bold">Benar sekali!</span>
            <br />
            Luas permukaan satu sisi kubus = <span className="font-bold">s × s</span>. Sehingga untuk luas
            keseluruhan luas permukaan kubus dikalikan dengan <span className="font-bold">6</span> jumlah sisinya.
          </p>
        </div>

        {/* Rumus Luas Permukaan Kubus */}
        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#b9e5e3] text-center">
          <p className="text-[13px] font-bold text-[#14263d]">RUMUS LUAS PERMUKAAN KUBUS</p>
          <p className="text-[18px] font-extrabold text-[#18aaa6] mt-1">L = 6 × s × s</p>
          <p className="text-[16px] font-bold text-[#18aaa6]">L = 6 × s²</p>
        </div>

        {/* AYO MEMBUKTIKAN! */}
        <div className="rounded-[12px] bg-[#fff8e7] p-4 border border-[#f0dca7]">
          <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
            <Target size={18} className="text-[#ffb51b]" />
            AYO MEMBUKTIKAN!
          </h4>
          <p className="text-[11px] text-[#6a5a2a] mt-1">
            Jika telah diketahui panjang rusuk dari kubus 15 Cm maka berapa Cm total yang dibutuhkan untuk kertas kado sehingga kardus dapat terbungkus sempurna?
          </p>
          <div className="flex justify-center my-2">
            <img
              src="/images/pertemuan4/6.png"
              alt="Kubus 15 cm"
              className="w-[150px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Perhitungan */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
            <p className="text-[11px] font-bold text-[#14263d]">1. Hitung luas satu sisi!</p>
            <input
              type="text"
              value={luasSisi}
              onChange={(e) => setLuasSisi(e.target.value)}
              placeholder="Luas = ..."
              className="mt-2 w-full rounded-[8px] border border-[#dce7e7] bg-white px-3 py-2 text-[12px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
            />
          </div>
          <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
            <p className="text-[11px] font-bold text-[#14263d]">2. Hitung luas permukaan kubus!</p>
            <input
              type="text"
              value={luasPermukaan}
              onChange={(e) => setLuasPermukaan(e.target.value)}
              placeholder="Luas permukaan = ..."
              className="mt-2 w-full rounded-[8px] border border-[#dce7e7] bg-white px-3 py-2 text-[12px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
            />
          </div>
        </div>

        {/* Pertanyaan Kertas Kado */}
        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Sehingga jumlah kertas kado yang dibutuhkan untuk membungkus kardus sebanyak...
          </label>
          <input
            type="text"
            value={jawabanKertas}
            onChange={(e) => setJawabanKertas(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="w-full rounded-[10px] border border-[#dce7e7] bg-white px-4 py-2.5 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
          />
        </div>

        {/* Tabel Kubus */}
        <div>
          <p className="text-[12px] font-bold text-[#14263d] mb-2 flex items-center gap-2">
            <Table size={18} className="text-[#397ed0]" />
            Lengkapi tabel berikut!
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#f0f6ff]">
                  <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">No</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">Rusuk</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">Luas 1 sisi</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">Banyak sisi</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-bold text-[#14263d]">Luas seluruh permukaan</th>
                </tr>
              </thead>
              <tbody>
                {tabelKubus.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] text-[#718096]">{index + 1}</td>
                    <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-medium text-[#14263d]">{row.rusuk}</td>
                    <td className="border border-[#d4e4f7] px-4 py-2">
                      <input
                        type="text"
                        value={row.luasSisi}
                        onChange={(e) => handleTabelChange(index, "luasSisi", e.target.value)}
                        placeholder="..."
                        className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                      />
                    </td>
                    <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-medium text-[#14263d]">6</td>
                    <td className="border border-[#d4e4f7] px-4 py-2">
                      <input
                        type="text"
                        value={row.luasPermukaan}
                        onChange={(e) => handleTabelChange(index, "luasPermukaan", e.target.value)}
                        placeholder="..."
                        className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 3B - PENGUMPULAN DATA (BALOK) - WITH UPLOAD
// =====================================================

const TahapBalok = ({
  jawabanSisiBalok,
  setJawabanSisiBalok,
  tabelBalok,
  setTabelBalok,
  luasPermukaanBalok,
  setLuasPermukaanBalok,
  gambarJaringBalok,
  setGambarJaringBalok,
}) => {
  const handleTabelChange = (field, value) => {
    setTabelBalok((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran gambar maksimal 5 MB");
        e.target.value = "";
        return;
      }
      const validTypes = ["image/png", "image/jpeg", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Format gambar tidak didukung. Gunakan PNG, JPG, GIF, atau WEBP.");
        e.target.value = "";
        return;
      }
      setGambarJaringBalok(file);
    }
  };

  return (
    <section className="rounded-[16px] border border-[#c8dbf6] bg-white p-6 shadow-[0_2px_12px_rgba(57,126,208,0.06)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#397ed0] text-white shadow-[0_4px_10px_rgba(57,126,208,0.2)]">
          <Box size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#397ed0] px-3 py-1 text-[10px] font-bold text-white">Tahap 3B</span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">Pengumpulan Data - Balok</h3>
          </div>
          <p className="text-[11px] text-[#718096]">Menentukan rumus luas permukaan balok</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[12px] bg-[#f5f9ff] p-4 border border-[#d4e4f7]">
          <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
            <Ruler size={18} className="text-[#397ed0]" />
            Mari identifikasi luas permukaan balok!
          </h4>

          <div className="mt-3 bg-white rounded-lg p-4 border border-[#d4e4f7]">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold text-[#14263d] bg-[#f0f6ff] px-3 py-1 rounded-full">Prism</span>
              <span className="text-[11px] font-bold text-[#397ed0] bg-[#e8f0fe] px-3 py-1 rounded-full border border-[#397ed0]">Unfold</span>
              <span className="text-[11px] font-bold text-[#14263d] bg-[#f0f6ff] px-3 py-1 rounded-full">Fold</span>
              <span className="text-[11px] font-bold text-[#ff5d4d] bg-[#fff0ed] px-3 py-1 rounded-full border border-[#ff5d4d]">Sides: 4</span>
            </div>
            <p className="text-[10px] text-[#718096] text-center mt-2">Sesuaikan sides menjadi 4 untuk menjadi balok!</p>

            <div className="mt-3 p-3 bg-[#e8f4f8] rounded-lg border border-[#b9e5e3] text-center">
              <p className="text-[11px] font-medium text-[#14263d]">🔗 Eksplorasi jaring-jaring balok secara interaktif:</p>
              <a
                href="https://www.geogebra.org/m/sgx8keqx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-[12px] font-bold text-[#397ed0] hover:text-[#1a5a8a] underline transition-colors break-all"
              >
                https://www.geogebra.org/m/sgx8keqx
              </a>
              <p className="text-[9px] text-[#718096] mt-1">Buka link untuk melihat dan memanipulasi jaring-jaring balok secara 3D</p>
            </div>
          </div>

          <div className="flex justify-center my-3">
            <img
              src="/images/pertemuan4/5.png"
              alt="Jaring-jaring Balok"
              className="w-[400px] h-auto object-contain rounded-lg border border-[#d4e4f7]"
            />
          </div>

          <div className="mt-3 p-3 bg-[#fff8e7] rounded-lg border border-[#f0dca7]">
            <p className="text-[11px] font-bold text-[#14263d] flex items-center gap-2">
              <span className="text-[#ffb51b]">📎</span>
              Bagaimana bentuk jaring-jaring balok?
            </p>
            <p className="text-[10px] text-[#6a5a2a] mt-1">Tempelkan hasil jaring-jaring balok pada kotak disamping!</p>
            <div className="mt-2 border-2 border-dashed border-[#ffb51b]/50 rounded-lg p-4 bg-white/50 min-h-[80px] flex items-center justify-center">
              {gambarJaringBalok ? (
                <div className="flex items-center gap-3 w-full">
                  <span className="text-[10px] text-[#18aaa6] truncate flex-1">
                    ✅ {typeof gambarJaringBalok === "string" ? "Gambar tersimpan" : gambarJaringBalok.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGambarJaringBalok(null)}
                    className="text-[10px] text-red-500 hover:text-red-700"
                  >
                    ✕ Hapus
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-[10px] text-[#a1acb7]">📷 Tempelkan gambar jaring-jaring balok disini</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="uploadJaringBalok"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="uploadJaringBalok" className="ml-2 text-[10px] font-bold text-[#397ed0] hover:underline cursor-pointer">
                    Upload Gambar
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">
            ❓ Ada berapa sisi permukaan balok? Apakah semuanya memiliki besar yang sama?
          </label>
          <textarea
            value={jawabanSisiBalok}
            onChange={(e) => setJawabanSisiBalok(e.target.value)}
            placeholder="Ketik jawaban disini..."
            className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
          />
        </div>

        <div className="rounded-[12px] bg-[#fff8e7] p-4 border border-[#f0dca7]">
          <p className="text-[12px] font-bold text-[#14263d]">Menentukan Rumus Luas Permukaan Balok</p>
          <p className="text-[11px] text-[#6a5a2a] mt-1">
            Dikarenakan bentuk dari permukaan balok tidak saling sama besar maka untuk itu mari kita bedah dari bentuk jaring-jaringnya!
          </p>
          <div className="flex justify-center my-3">
            <img src="/images/pertemuan4/6.png" alt="Diagram Balok" className="w-[350px] h-auto object-contain" />
          </div>
          <p className="text-[11px] text-[#6a5a2a]">
            <span className="font-bold text-[#ffb51b]">CLUE!</span> Setiap sisi yang berhadapan memiliki besar yang sama, sekarang coba kalian jodohkan mana saja sisi yang sama besar.
          </p>
        </div>

        <div>
          <p className="text-[12px] font-bold text-[#14263d] mb-2 flex items-center gap-2">
            <Table size={18} className="text-[#397ed0]" />
            Lengkap tabel pasangan sisi balok dibawah ini!
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#f0f6ff]">
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Pasangan sisi</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Nomor</th>
                  <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Rumus Luas Permukaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Atas dan bawah</td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input type="text" value={tabelBalok.atasBawah || ""} onChange={(e) => handleTabelChange("atasBawah", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input type="text" value={tabelBalok.rumusAtasBawah || ""} onChange={(e) => handleTabelChange("rumusAtasBawah", e.target.value)} placeholder="p × l" className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Depan dan belakang</td>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] text-[#718096]">1 dan 5</td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input type="text" value={tabelBalok.rumusDepanBelakang || ""} onChange={(e) => handleTabelChange("rumusDepanBelakang", e.target.value)} placeholder="p × t" className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Kanan dan kiri</td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input type="text" value={tabelBalok.kananKiri || ""} onChange={(e) => handleTabelChange("kananKiri", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                  </td>
                  <td className="border border-[#d4e4f7] px-4 py-2">
                    <input type="text" value={tabelBalok.rumusKananKiri || ""} onChange={(e) => handleTabelChange("rumusKananKiri", e.target.value)} placeholder="l × t" className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[12px] bg-[#f0fafa] p-4 border border-[#b9e5e3] text-center">
          <p className="text-[13px] font-bold text-[#14263d]">RUMUS LUAS PERMUKAAN BALOK</p>
          <p className="text-[18px] font-extrabold text-[#18aaa6] mt-1">L = 2(pl + pt + lt)</p>
          <p className="text-[12px] text-[#4a6a6a] mt-1">dimana p = panjang, l = lebar, t = tinggi</p>
        </div>

        <div className="rounded-[12px] bg-[#fff8e7] p-4 border border-[#f0dca7]">
          <h4 className="text-[13px] font-extrabold text-[#14263d] flex items-center gap-2">
            <Target size={18} className="text-[#ffb51b]" />
            AYO MEMBUKTIKAN!
          </h4>
          <p className="text-[11px] text-[#6a5a2a] mt-1">Hitunglah luas permukaan lemari jika diketahui rusuknya 10 Cm, 12 Cm dan 30 Cm!</p>
          <div className="flex justify-center my-2">
            <img src="/images/pertemuan4/7.png" alt="Lemari" className="w-[150px] h-auto object-contain" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f0f6ff]">
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Sisi</th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Luas 1 sisi</th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Banyak sisi</th>
                <th className="border border-[#d4e4f7] px-4 py-2 text-left text-[11px] font-bold text-[#14263d]">Luas seluruh permukaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Atas dan Bawah</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.luasAtasBawah || ""} onChange={(e) => handleTabelChange("luasAtasBawah", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-medium text-[#14263d]">2</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.totalAtasBawah || ""} onChange={(e) => handleTabelChange("totalAtasBawah", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Depan dan Belakang</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.luasDepanBelakang || ""} onChange={(e) => handleTabelChange("luasDepanBelakang", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-medium text-[#14263d]">2</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.totalDepanBelakang || ""} onChange={(e) => handleTabelChange("totalDepanBelakang", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
              </tr>
              <tr>
                <td className="border border-[#d4e4f7] px-4 py-2 text-[11px] font-medium text-[#14263d]">Kanan dan Kiri</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.luasKananKiri || ""} onChange={(e) => handleTabelChange("luasKananKiri", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
                <td className="border border-[#d4e4f7] px-4 py-2 text-center text-[11px] font-medium text-[#14263d]">2</td>
                <td className="border border-[#d4e4f7] px-4 py-2">
                  <input type="text" value={tabelBalok.totalKananKiri || ""} onChange={(e) => handleTabelChange("totalKananKiri", e.target.value)} placeholder="..." className="w-full rounded-[6px] border border-[#dce7e7] bg-white px-2 py-1 text-[11px] text-[#26364b] outline-none focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-[#14263d] mb-2">Total luas permukaan balok</label>
          <input
            type="text"
            value={luasPermukaanBalok}
            onChange={(e) => setLuasPermukaanBalok(e.target.value)}
            placeholder="..."
            className="w-full rounded-[10px] border border-[#dce7e7] bg-white px-4 py-2.5 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#397ed0] focus:ring-2 focus:ring-[#397ed0]/10"
          />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TAHAP 4 - PENGUJIAN HIPOTESIS & REFLEKSI
// =====================================================

const TahapRefleksi = ({
  refleksi1,
  setRefleksi1,
  refleksi2,
  setRefleksi2,
  refleksi3,
  setRefleksi3,
  masukan,
  setMasukan,
}) => {
  return (
    <section className="rounded-[16px] border border-[#b5e6c0] bg-white p-6 shadow-[0_2px_12px_rgba(46,160,60,0.06)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#2ea03c] text-white shadow-[0_4px_10px_rgba(46,160,60,0.2)]">
          <CheckCircle2 size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#2ea03c] px-3 py-1 text-[10px] font-bold text-white">Tahap 4</span>
            <h3 className="text-[15px] font-extrabold text-[#14263d]">Pengujian Hipotesis & Refleksi</h3>
          </div>
          <p className="text-[11px] text-[#718096]">Evaluasi dugaan awal dan berikan masukan</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            ❓ Apakah cara yang kalian tulis pada hipotesis untuk menentukan jumlah kertas kado yang membungkus kardus sudah sesuai dengan yang telah ditemukan?
          </label>
          <textarea value={refleksi1} onChange={(e) => setRefleksi1(e.target.value)} placeholder="Ketik jawaban disini..." className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10" />
        </div>

        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            ❓ Apakah cara yang digunakan untuk mengetahui kertas yang digunakan membungkus kardus berbentuk kubus dan balok sama?
          </label>
          <textarea value={refleksi2} onChange={(e) => setRefleksi2(e.target.value)} placeholder="Ketik jawaban disini..." className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10" />
        </div>

        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            ❓ Apakah jika menggunakan rumus juga sama untuk rumus balok dan kubus?
          </label>
          <textarea value={refleksi3} onChange={(e) => setRefleksi3(e.target.value)} placeholder="Ketik jawaban disini..." className="min-h-[60px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10" />
        </div>

        <div>
          <label className="block text-[12px] font-bold text-[#14263d] mb-1.5">
            💬 Tuliskan masukan dan saran untuk perbaikan kelompokmu dari teman dan guru berdasarkan hasil presentasi!
          </label>
          <textarea value={masukan} onChange={(e) => setMasukan(e.target.value)} placeholder="Ketik jawaban disini..." className="min-h-[80px] w-full resize-none rounded-[10px] border border-[#dce7e7] bg-white px-4 py-3 text-[12px] text-[#26364b] outline-none transition-all placeholder:text-[#a1acb7] focus:border-[#2ea03c] focus:ring-2 focus:ring-[#2ea03c]/10" />
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function GeoExploreMeeting4({
  onBack,
  onNavigateNext,
  onNavigatePrev,
}) {
  // State untuk Tahap 1
  const [jawabanOrientasi1, setJawabanOrientasi1] = useState("");
  const [pilihanBagian, setPilihanBagian] = useState("");
  const [jawabanOrientasi2, setJawabanOrientasi2] = useState("");
  const [jawabanOrientasi3, setJawabanOrientasi3] = useState("");

  // State untuk Bantuan
  const [jawabanBantuan1, setJawabanBantuan1] = useState("");
  const [pilihanBantuan, setPilihanBantuan] = useState("");

  // State untuk Tahap 2
  const [dugaan, setDugaan] = useState("");

  // State untuk Tahap 3 - Kubus
  const [rumusSisi, setRumusSisi] = useState("");
  const [luasSisi, setLuasSisi] = useState("");
  const [luasPermukaan, setLuasPermukaan] = useState("");
  const [jawabanKertas, setJawabanKertas] = useState("");
  const [tabelKubus, setTabelKubus] = useState([
    { rusuk: "12 Cm", luasSisi: "", luasPermukaan: "" },
    { rusuk: "5 Cm", luasSisi: "", luasPermukaan: "" },
    { rusuk: "7 Cm", luasSisi: "", luasPermukaan: "" },
  ]);

  // State untuk Tahap 3 - Balok
  const [jawabanSisiBalok, setJawabanSisiBalok] = useState("");
  const [tabelBalok, setTabelBalok] = useState({
    atasBawah: "",
    rumusAtasBawah: "",
    luasAtasBawah: "",
    totalAtasBawah: "",
    rumusDepanBelakang: "",
    luasDepanBelakang: "",
    totalDepanBelakang: "",
    kananKiri: "",
    rumusKananKiri: "",
    luasKananKiri: "",
    totalKananKiri: "",
  });
  const [luasPermukaanBalok, setLuasPermukaanBalok] = useState("");

  // State untuk Gambar Jaring-jaring Balok
  const [gambarJaringBalok, setGambarJaringBalok] = useState(null);

  // State untuk Tahap 4
  const [refleksi1, setRefleksi1] = useState("");
  const [refleksi2, setRefleksi2] = useState("");
  const [refleksi3, setRefleksi3] = useState("");
  const [masukan, setMasukan] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // =====================================================
  // UPLOAD IMAGE FILE
  // =====================================================

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
          .eq("pertemuan", 4);

        if (error || !data || data.length === 0) return;

        const balokMap = {};

        data.forEach((item) => {
          if (item.tahap === "orientasi_zpd") setJawabanOrientasi1(item.jawaban || "");
          else if (item.tahap === "orientasi_pilihan") setPilihanBagian(item.jawaban || "");
          else if (item.tahap === "orientasi_cukup") setJawabanOrientasi2(item.jawaban || "");
          else if (item.tahap === "orientasi_kesimpulan") setJawabanOrientasi3(item.jawaban || "");
          else if (item.tahap === "bantuan_jaring") setJawabanBantuan1(item.jawaban || "");
          else if (item.tahap === "bantuan_semua") setPilihanBantuan(item.jawaban || "");
          else if (item.tahap === "hipotesis") setDugaan(item.jawaban || "");
          else if (item.tahap === "kubus_rumus_sisi") setRumusSisi(item.jawaban || "");
          else if (item.tahap === "kubus_luas_sisi") setLuasSisi(item.jawaban || "");
          else if (item.tahap === "kubus_luas_permukaan") setLuasPermukaan(item.jawaban || "");
          else if (item.tahap === "kubus_kertas_kado") setJawabanKertas(item.jawaban || "");
          else if (item.tahap === "balok_sisi") setJawabanSisiBalok(item.jawaban || "");
          else if (item.tahap === "balok_total") setLuasPermukaanBalok(item.jawaban || "");
          else if (item.tahap === "refleksi_hipotesis") setRefleksi1(item.jawaban || "");
          else if (item.tahap === "refleksi_kubus_balok") setRefleksi2(item.jawaban || "");
          else if (item.tahap === "refleksi_rumus") setRefleksi3(item.jawaban || "");
          else if (item.tahap === "masukan") setMasukan(item.jawaban || "");
          else if (item.tahap === "gambar_balok") setGambarJaringBalok(item.jawaban || null);
          else if (item.tahap === "balok_tabel") {
            if (item.pertanyaan === "Atas dan bawah - nomor") balokMap.atasBawah = item.jawaban;
            if (item.pertanyaan === "Atas dan bawah - rumus") balokMap.rumusAtasBawah = item.jawaban;
            if (item.pertanyaan === "Atas dan bawah - luas 1 sisi") balokMap.luasAtasBawah = item.jawaban;
            if (item.pertanyaan === "Atas dan bawah - total") balokMap.totalAtasBawah = item.jawaban;
            if (item.pertanyaan === "Depan dan belakang - rumus") balokMap.rumusDepanBelakang = item.jawaban;
            if (item.pertanyaan === "Depan dan belakang - luas 1 sisi") balokMap.luasDepanBelakang = item.jawaban;
            if (item.pertanyaan === "Depan dan belakang - total") balokMap.totalDepanBelakang = item.jawaban;
            if (item.pertanyaan === "Kanan dan kiri - nomor") balokMap.kananKiri = item.jawaban;
            if (item.pertanyaan === "Kanan dan kiri - rumus") balokMap.rumusKananKiri = item.jawaban;
            if (item.pertanyaan === "Kanan dan kiri - luas 1 sisi") balokMap.luasKananKiri = item.jawaban;
            if (item.pertanyaan === "Kanan dan kiri - total") balokMap.totalKananKiri = item.jawaban;
          }
        });

        if (Object.keys(balokMap).length > 0) setTabelBalok((prev) => ({ ...prev, ...balokMap }));
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
      if (jawabanOrientasi1.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "orientasi_zpd",
          pertanyaan: "Apa yang perlu diketahui untuk menentukan banyak kertas kado?",
          jawaban: jawabanOrientasi1.trim(),
        });
      }
      if (pilihanBagian) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "orientasi_pilihan",
          pertanyaan: "Bagian mana yang perlu ditutup kertas kado?",
          jawaban: pilihanBagian,
        });
      }
      if (jawabanOrientasi2.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "orientasi_cukup",
          pertanyaan: "Apakah cukup menutup bagian atas dan depan?",
          jawaban: jawabanOrientasi2.trim(),
        });
      }
      if (jawabanOrientasi3.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "orientasi_kesimpulan",
          pertanyaan: "Apa yang perlu diketahui untuk menentukan banyak kertas kado?",
          jawaban: jawabanOrientasi3.trim(),
        });
      }

      // Bantuan
      if (jawabanBantuan1.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "bantuan_jaring",
          pertanyaan: "Apa yang terjadi setelah kardus dibuka?",
          jawaban: jawabanBantuan1.trim(),
        });
      }
      if (pilihanBantuan) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "bantuan_semua",
          pertanyaan: "Apakah semua bagian terlihat adalah permukaan kardus?",
          jawaban: pilihanBantuan,
        });
      }

      // Tahap 2 - Hipotesis
      if (dugaan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "hipotesis",
          pertanyaan: "Dugaan untuk menentukan banyak kertas kado",
          jawaban: dugaan.trim(),
        });
      }

      // Tahap 3 - Kubus
      if (rumusSisi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "kubus_rumus_sisi",
          pertanyaan: "Rumus luas 1 sisi kubus",
          jawaban: rumusSisi.trim(),
        });
      }
      if (luasSisi.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "kubus_luas_sisi",
          pertanyaan: "Luas 1 sisi kubus (15 cm)",
          jawaban: luasSisi.trim(),
        });
      }
      if (luasPermukaan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "kubus_luas_permukaan",
          pertanyaan: "Luas permukaan kubus (15 cm)",
          jawaban: luasPermukaan.trim(),
        });
      }
      if (jawabanKertas.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "kubus_kertas_kado",
          pertanyaan: "Jumlah kertas kado yang dibutuhkan",
          jawaban: jawabanKertas.trim(),
        });
      }
      // Tabel Kubus
      tabelKubus.forEach((row, index) => {
        if (row.luasSisi.trim()) {
          rowsToInsert.push({
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 4,
            tahap: "kubus_tabel",
            pertanyaan: `Tabel Kubus ${index + 1} - Luas 1 sisi (${row.rusuk})`,
            jawaban: row.luasSisi.trim(),
          });
        }
        if (row.luasPermukaan.trim()) {
          rowsToInsert.push({
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 4,
            tahap: "kubus_tabel",
            pertanyaan: `Tabel Kubus ${index + 1} - Luas permukaan (${row.rusuk})`,
            jawaban: row.luasPermukaan.trim(),
          });
        }
      });

      // Tahap 3 - Balok
      if (jawabanSisiBalok.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "balok_sisi",
          pertanyaan: "Berapa sisi balok dan apakah sama besar?",
          jawaban: jawabanSisiBalok.trim(),
        });
      }
      // Tabel Balok
      const balokFields = [
        { key: "atasBawah", label: "Atas dan bawah - nomor" },
        { key: "rumusAtasBawah", label: "Atas dan bawah - rumus" },
        { key: "luasAtasBawah", label: "Atas dan bawah - luas 1 sisi" },
        { key: "totalAtasBawah", label: "Atas dan bawah - total" },
        { key: "rumusDepanBelakang", label: "Depan dan belakang - rumus" },
        { key: "luasDepanBelakang", label: "Depan dan belakang - luas 1 sisi" },
        { key: "totalDepanBelakang", label: "Depan dan belakang - total" },
        { key: "kananKiri", label: "Kanan dan kiri - nomor" },
        { key: "rumusKananKiri", label: "Kanan dan kiri - rumus" },
        { key: "luasKananKiri", label: "Kanan dan kiri - luas 1 sisi" },
        { key: "totalKananKiri", label: "Kanan dan kiri - total" },
      ];
      balokFields.forEach(({ key, label }) => {
        if (tabelBalok[key]?.trim()) {
          rowsToInsert.push({
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 4,
            tahap: "balok_tabel",
            pertanyaan: label,
            jawaban: tabelBalok[key].trim(),
          });
        }
      });
      if (luasPermukaanBalok.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "balok_total",
          pertanyaan: "Total luas permukaan balok",
          jawaban: luasPermukaanBalok.trim(),
        });
      }

      // Upload Gambar Jaring-jaring Balok
      let gambarBalokUrl = "";
      try {
        console.log("📤 Uploading gambar jaring-jaring balok...");
        gambarBalokUrl = await uploadImageFile(gambarJaringBalok, `${userId}_p4_balok_jaring`);
        console.log("✅ Gambar balok uploaded:", gambarBalokUrl);
      } catch (err) {
        console.error("Error uploading gambar balok:", err);
      }

      if (gambarBalokUrl || gambarJaringBalok?.name) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "gambar_balok",
          pertanyaan: "Gambar Jaring-jaring Balok",
          jawaban: gambarBalokUrl || gambarJaringBalok.name,
        });
      }

      // Tahap 4 - Refleksi
      if (refleksi1.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "refleksi_hipotesis",
          pertanyaan: "Apakah hipotesis sesuai dengan temuan?",
          jawaban: refleksi1.trim(),
        });
      }
      if (refleksi2.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "refleksi_kubus_balok",
          pertanyaan: "Apakah cara kubus dan balok sama?",
          jawaban: refleksi2.trim(),
        });
      }
      if (refleksi3.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
          tahap: "refleksi_rumus",
          pertanyaan: "Apakah rumus kubus dan balok sama?",
          jawaban: refleksi3.trim(),
        });
      }
      if (masukan.trim()) {
        rowsToInsert.push({
          user_id: userId,
          module_type: "geoexplore",
          pertemuan: 4,
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
        .eq("pertemuan", 4);

      if (existingAnswers && existingAnswers.length > 0) {
        const confirmOverwrite = window.confirm(
          "Anda sudah mengirimkan jawaban untuk Pertemuan 4.\n\nApakah Anda ingin mengganti dengan jawaban baru?"
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
          .eq("pertemuan", 4);
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
        .eq("pertemuan", 4);

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
          .eq("pertemuan", 4);
      } else {
        await supabase.from("progress").insert([
          {
            user_id: userId,
            module_type: "geoexplore",
            pertemuan: 4,
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
              Pertemuan 4
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
            Pertemuan 4
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-[24px] font-extrabold text-[#14263d] sm:text-[28px]">
            Rumus Luas Permukaan Bangun Ruang
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
            jawaban1={jawabanOrientasi1}
            setJawaban1={setJawabanOrientasi1}
            pilihanBagian={pilihanBagian}
            setPilihanBagian={setPilihanBagian}
            jawaban2={jawabanOrientasi2}
            setJawaban2={setJawabanOrientasi2}
            jawaban3={jawabanOrientasi3}
            setJawaban3={setJawabanOrientasi3}
          />

          <BantuanJaringJaring
            jawabanBantuan1={jawabanBantuan1}
            setJawabanBantuan1={setJawabanBantuan1}
            pilihanBantuan={pilihanBantuan}
            setPilihanBantuan={setPilihanBantuan}
          />

          <TahapHipotesis dugaan={dugaan} setDugaan={setDugaan} />

          <TahapKubus
            rumusSisi={rumusSisi}
            setRumusSisi={setRumusSisi}
            luasSisi={luasSisi}
            setLuasSisi={setLuasSisi}
            luasPermukaan={luasPermukaan}
            setLuasPermukaan={setLuasPermukaan}
            jawabanKertas={jawabanKertas}
            setJawabanKertas={setJawabanKertas}
            tabelKubus={tabelKubus}
            setTabelKubus={setTabelKubus}
          />

          <TahapBalok
            jawabanSisiBalok={jawabanSisiBalok}
            setJawabanSisiBalok={setJawabanSisiBalok}
            tabelBalok={tabelBalok}
            setTabelBalok={setTabelBalok}
            luasPermukaanBalok={luasPermukaanBalok}
            setLuasPermukaanBalok={setLuasPermukaanBalok}
            gambarJaringBalok={gambarJaringBalok}
            setGambarJaringBalok={setGambarJaringBalok}
          />

          <TahapRefleksi
            refleksi1={refleksi1}
            setRefleksi1={setRefleksi1}
            refleksi2={refleksi2}
            setRefleksi2={setRefleksi2}
            refleksi3={refleksi3}
            setRefleksi3={setRefleksi3}
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
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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