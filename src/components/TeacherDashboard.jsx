// src/components/TeacherDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Users,
  UserPlus,
  Search,
  X,
  CheckCircle,
  AlertCircle,
  BarChart3,
  LogOut,
  Eye,
  Trash2,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const TeacherDashboard = ({ onLogout, teacherName, onViewStudentDetail }) => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form tambah siswa
  const [newStudent, setNewStudent] = useState({
    nama: "",
    kelas: "",
    sekolah: "",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // =====================================================
  // FETCH DATA SISWA
  // =====================================================

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("users")
        .select("id, nama, kelas, sekolah, last_login, is_active, created_at")
        .eq("role", "student")
        .order("kelas", { ascending: true })
        .order("nama", { ascending: true });

      if (error) throw error;

      const formattedData = (data || []).map((student) => ({
        ...student,
        avg_progress: 0,
        completed_modules: 0,
        total_modules: 0,
      }));

      setStudents(formattedData);
      setFilteredStudents(formattedData);

      await fetchAllProgress(formattedData);
    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // =====================================================
  // FETCH PROGRESS UNTUK SEMUA SISWA
  // =====================================================

  const fetchAllProgress = async (studentList) => {
    try {
      for (const student of studentList) {
        const { data: progressData, error } = await supabase
          .from("progress")
          .select("*")
          .eq("user_id", student.id);

        if (!error && progressData) {
          const totalProgress = progressData.reduce((acc, curr) => {
            return acc + (curr.progress_percentage || 0);
          }, 0);

          const avgProgress =
            progressData.length > 0
              ? Math.round(totalProgress / progressData.length)
              : 0;

          const completedModules = progressData.filter(
            (p) => p.status === "completed",
          ).length;

          student.avg_progress = avgProgress;
          student.completed_modules = completedModules;
          student.total_modules = progressData.length;
        }
      }

      setStudents([...studentList]);
      setFilteredStudents([...studentList]);
    } catch (err) {
      console.error("Error fetching progress:", err);
    }
  };

  // =====================================================
  // TAMBAH SISWA
  // =====================================================

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { nama, kelas, sekolah } = newStudent;

    if (!nama.trim()) {
      setFormError("Masukkan nama siswa");
      return;
    }
    if (!kelas.trim()) {
      setFormError("Masukkan kelas siswa");
      return;
    }

    setIsLoading(true);
    setFormError("");
    setFormSuccess("");

    try {
      const teacherData = JSON.parse(localStorage.getItem("geospace_user"));

      const { data: existing, error: checkError } = await supabase
        .from("users")
        .select("id")
        .eq("role", "student")
        .ilike("nama", nama.trim())
        .eq("kelas", kelas.trim().toUpperCase())
        .maybeSingle();

      if (checkError) {
        console.error("Check error:", checkError);
      }

      if (existing) {
        const { error: updateError } = await supabase
          .from("users")
          .update({ is_active: true, updated_at: new Date().toISOString() })
          .eq("id", existing.id);

        if (updateError) throw updateError;

        setFormSuccess(
          `Siswa "${nama}" sudah terdaftar dan diaktifkan kembali!`,
        );
      } else {
        const { error } = await supabase
          .from("users")
          .insert([
            {
              nama: nama.trim(),
              role: "student",
              kelas: kelas.trim().toUpperCase(),
              sekolah: sekolah.trim() || null,
              created_by: teacherData?.id || null,
              is_active: true,
            },
          ]);

        if (error) throw error;

        setFormSuccess(`Siswa "${nama}" berhasil didaftarkan!`);
      }

      setNewStudent({ nama: "", kelas: "", sekolah: "" });
      await fetchStudents();

      setTimeout(() => {
        setShowAddModal(false);
        setFormSuccess("");
      }, 2000);
    } catch (err) {
      console.error("Error adding student:", err);
      setFormError(err.message || "Gagal mendaftarkan siswa");
    } finally {
      setIsLoading(false);
    }
  };

  // =====================================================
  // HAPUS SISWA
  // =====================================================

  const handleDeleteStudent = async (studentId, studentNama) => {
    if (
      !window.confirm(
        `Apakah Anda yakin ingin menghapus siswa "${studentNama}"?`,
      )
    ) {
      return;
    }

    setIsLoading(true);
    try {
      await supabase.from("progress").delete().eq("user_id", studentId);
      await supabase.from("student_answers").delete().eq("user_id", studentId);
      await supabase.from("activity_logs").delete().eq("user_id", studentId);

      const { error } = await supabase
        .from("users")
        .delete()
        .eq("id", studentId);

      if (error) throw error;

      await fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
      alert(err.message || "Gagal menghapus siswa");
    } finally {
      setIsLoading(false);
    }
  };

  // =====================================================
  // SEARCH
  // =====================================================

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) =>
          student.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.kelas?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredStudents(filtered);
    }
  }, [searchTerm, students]);

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    fetchStudents();
  }, []);
const [showImagePreview, setShowImagePreview] = useState(null);

  // =====================================================
  // RENDER
  // =====================================================
{showImagePreview && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Preview Gambar</h3>
        <button
          onClick={() => setShowImagePreview(null)}
          className="text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <img
        src={getImageUrl(showImagePreview)}
        alt="Preview"
        className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
        onError={(e) => {
          e.target.alt = "Gambar tidak dapat dimuat";
          e.target.className = "text-red-500 p-4";
        }}
      />
    </div>
  </div>
)}
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/Geospace.png"
              alt="GeoSpace Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xs font-semibold text-[#2E9A92] bg-[#2E9A92]/10 px-2 py-1 rounded">
              Guru
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-600">
              👋 Halo, {teacherName || "Guru"}
            </span>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Siswa</p>
                <p className="text-2xl font-bold text-slate-800">
                  {students.length}
                </p>
              </div>
              <Users className="w-10 h-10 text-[#2E9A92] opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Rata-rata Progress</p>
                <p className="text-2xl font-bold text-slate-800">
                  {students.length > 0
                    ? Math.round(
                        students.reduce(
                          (acc, s) => acc + (s.avg_progress || 0),
                          0,
                        ) / students.length,
                      )
                    : 0}
                  %
                </p>
              </div>
              <BarChart3 className="w-10 h-10 text-[#FF6B5C] opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Selesai Modul</p>
                <p className="text-2xl font-bold text-slate-800">
                  {students.reduce(
                    (acc, s) => acc + (s.completed_modules || 0),
                    0,
                  )}
                </p>
              </div>
              <BarChart3 className="w-10 h-10 text-yellow-400 opacity-20" />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Daftar Siswa</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari siswa atau kelas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9A92] w-full sm:w-64"
              />
            </div>

            <button
              onClick={() => {
                setShowAddModal(true);
                setFormError("");
                setFormSuccess("");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#2E9A92] text-white rounded-lg hover:bg-[#247F78] transition text-sm font-medium"
            >
              <UserPlus className="w-4 h-4" />
              <span>Tambah Siswa</span>
            </button>
          </div>
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#2E9A92] border-t-transparent"></div>
              <p className="mt-2 text-sm text-slate-500">Memuat data...</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="p-8 text-center">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">
                {searchTerm
                  ? "Tidak ada siswa yang ditemukan"
                  : "Belum ada siswa terdaftar"}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowAddModal(true)}
                  className="mt-2 text-[#2E9A92] hover:underline text-sm"
                >
                  Tambah siswa sekarang
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      No
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Nama Siswa
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Kelas
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Progress
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Modul Selesai
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Terakhir Aktif
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-600">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr
                      key={student.id}
                      className="border-b border-slate-100 hover:bg-slate-50/50 transition"
                    >
                      <td className="px-4 py-3 text-slate-500">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {student.nama}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-1 bg-[#2E9A92]/10 text-[#2E9A92] rounded text-xs font-medium">
                          {student.kelas}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-slate-200 rounded-full h-1.5">
                            <div
                              className="bg-[#2E9A92] rounded-full h-1.5 transition-all"
                              style={{ width: `${student.avg_progress || 0}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-600">
                            {Math.round(student.avg_progress || 0)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="font-medium text-slate-700">
                          {student.completed_modules || 0}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500">
                        {student.last_login
                          ? new Date(student.last_login).toLocaleDateString(
                              "id-ID",
                            )
                          : "Belum pernah"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              if (onViewStudentDetail) {
                                onViewStudentDetail(student.id, student.nama);
                              }
                            }}
                            className="text-[#2E9A92] hover:text-[#247F78] transition text-xs font-medium"
                            title="Lihat Detail"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteStudent(student.id, student.nama)
                            }
                            className="text-red-500 hover:text-red-700 transition text-xs font-medium"
                            title="Hapus Siswa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* MODAL TAMBAH SISWA */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">Tambah Siswa</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="mb-4 p-3 bg-red-50 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{formError}</p>
              </div>
            )}

            {formSuccess && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-green-600">{formSuccess}</p>
              </div>
            )}

            <form onSubmit={handleAddStudent}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newStudent.nama}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, nama: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9A92]"
                    placeholder="Contoh: Budi Santoso"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Kelas <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newStudent.kelas}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        kelas: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9A92]"
                    placeholder="Contoh: 5A"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Sekolah (Opsional)
                  </label>
                  <input
                    type="text"
                    value={newStudent.sekolah}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, sekolah: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9A92]"
                    placeholder="Contoh: SDN 01 Jakarta"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-[#2E9A92] text-white rounded-lg hover:bg-[#247F78] transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Menyimpan..." : "Daftarkan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
