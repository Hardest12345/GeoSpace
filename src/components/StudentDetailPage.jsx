// src/components/StudentDetailPage.jsx
import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, User, School, BookOpen, Target, Trophy, 
  FileText, Clock, CheckCircle, XCircle, BarChart3,
  GraduationCap, LogOut, ChevronDown, ChevronRight,
  Search, Filter, Image as ImageIcon
} from "lucide-react";
import { supabase } from "../lib/supabase";

// =====================================================
// HELPER - GET IMAGE URL
// =====================================================

const getImageUrl = (url) => {
  if (!url) return null;
  
  // Jika sudah URL lengkap
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  
  // Jika hanya nama file (tanpa path), bangun URL lengkap
  if (!url.includes("/") && !url.includes("http")) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://eppmupowuxkurxglwhas.supabase.co";
    return `${supabaseUrl}/storage/v1/object/public/student-uploads/${url}`;
  }
  
  // Jika ada path tapi bukan URL lengkap
  if (url.includes("student-uploads") && !url.startsWith("http")) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://eppmupowuxkurxglwhas.supabase.co";
    return `${supabaseUrl}/storage/v1/object/public/${url}`;
  }
  
  return url;
};

// =====================================================
// COMPONENT RENDER IMAGE
// =====================================================

const RenderImage = ({ url, alt }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = getImageUrl(url);
  
  if (!imageUrl || imageError) {
    return (
      <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-lg px-3 py-2">
        <ImageIcon className="w-4 h-4" />
        <span>{url || "Tidak ada gambar"}</span>
      </div>
    );
  }
  
  return (
    <div className="mt-2">
      <img
        src={imageUrl}
        alt={alt || "Gambar jawaban siswa"}
        className="max-w-[200px] max-h-[200px] w-auto h-auto object-contain rounded-lg border border-slate-200 shadow-sm"
        onError={(e) => {
          console.error("❌ Image failed to load:", imageUrl);
          setImageError(true);
          e.target.style.display = 'none';
        }}
        loading="lazy"
      />
      <a 
        href={imageUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[10px] text-[#2E9A92] hover:underline mt-1 inline-block"
      >
        🔗 Buka gambar
      </a>
    </div>
  );
};

// =====================================================
// MAIN COMPONENT
// =====================================================

const StudentDetailPage = ({ studentId, studentName, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [studentData, setStudentData] = useState(null);
  const [progressData, setProgressData] = useState([]);
  const [answersData, setAnswersData] = useState([]);
  const [activeModuleTab, setActiveModuleTab] = useState("geoexplore");
  const [filteredAnswers, setFilteredAnswers] = useState([]);
  const [selectedPertemuan, setSelectedPertemuan] = useState("all");
  const [selectedTahap, setSelectedTahap] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedAnswers, setExpandedAnswers] = useState({});

  // =====================================================
  // FETCH DATA SISWA
  // =====================================================

  useEffect(() => {
    const fetchStudentDetail = async () => {
      setIsLoading(true);
      try {
        // 1. Fetch data siswa
        const { data: student, error: studentErr } = await supabase
          .from('users')
          .select('*')
          .eq('id', studentId)
          .single();

        if (studentErr) throw studentErr;
        setStudentData(student);

        // 2. Fetch progress
        const { data: progress, error: progressErr } = await supabase
          .from('progress')
          .select('*')
          .eq('user_id', studentId)
          .order('module_type', { ascending: true })
          .order('pertemuan', { ascending: true });

        if (progressErr) throw progressErr;
        setProgressData(progress || []);

        // 3. Fetch semua jawaban
        const { data: answers, error: answersErr } = await supabase
          .from('student_answers')
          .select('*')
          .eq('user_id', studentId)
          .order('pertemuan', { ascending: true })
          .order('created_at', { ascending: true });

        if (answersErr) throw answersErr;
        setAnswersData(answers || []);
        setFilteredAnswers(answers || []);

      } catch (err) {
        console.error("Error fetching student detail:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (studentId) {
      fetchStudentDetail();
    }
  }, [studentId]);

  // =====================================================
  // FILTER JAWABAN
  // =====================================================

useEffect(() => {
  let filtered = [...answersData];

  // Filter by module tab - gunakan module_type
  if (activeModuleTab !== "all") {
    filtered = filtered.filter((a) => (a.module_type || "geoexplore") === activeModuleTab);
  }

  // Filter by pertemuan
  if (selectedPertemuan !== "all") {
    filtered = filtered.filter((a) => a.pertemuan === parseInt(selectedPertemuan));
  }

  // Filter by tahap
  if (selectedTahap !== "all") {
    filtered = filtered.filter(a => a.tahap === selectedTahap);
  }

  // Filter by search
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(a => 
      a.pertanyaan?.toLowerCase().includes(term) ||
      a.jawaban?.toLowerCase().includes(term) ||
      a.tahap?.toLowerCase().includes(term)
    );
  }

  setFilteredAnswers(filtered);
}, [answersData, activeModuleTab, selectedPertemuan, selectedTahap, searchTerm]);
  // =====================================================
  // TOGGLE EXPAND ANSWER
  // =====================================================

  const toggleExpand = (id) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // =====================================================
  // GET UNIQUE PERTEMUAN & TAHAP
  // =====================================================

  const uniquePertemuan = [...new Set(answersData.map(a => a.pertemuan))].sort((a, b) => a - b);
  const uniqueTahap = [...new Set(answersData.map(a => a.tahap))].filter(Boolean);

  // =====================================================
  // RENDER
  // =====================================================

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#2E9A92] border-t-transparent"></div>
          <p className="mt-4 text-slate-500">Memuat data siswa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-[#2E9A92] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Kembali</span>
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#2E9A92]" />
              <span className="text-lg font-bold text-slate-800">
                Detail Siswa
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Student Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#2E9A92]/10 flex items-center justify-center">
                <User className="w-7 h-7 text-[#2E9A92]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">{studentData?.nama}</h1>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <School className="w-4 h-4" />
                    Kelas {studentData?.kelas}
                  </span>
                  {studentData?.sekolah && (
                    <span className="text-sm text-slate-400">• {studentData.sekolah}</span>
                  )}
                  <span className="text-sm text-slate-400">•</span>
                  <span className="text-sm text-slate-500">
                    Terakhir aktif: {studentData?.last_login 
                      ? new Date(studentData.last_login).toLocaleDateString('id-ID')
                      : 'Belum pernah'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#2E9A92]">
                  {progressData.length}
                </p>
                <p className="text-xs text-slate-500">Modul</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF6B5C]">
                  {answersData.length}
                </p>
                <p className="text-xs text-slate-500">Jawaban</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          {progressData.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">
                  {prog.module_type === 'geomission' && '📚 GeoMission'}
                  {prog.module_type === 'geomap' && '🗺️ GeoMap'}
                  {prog.module_type === 'geoexplore' && '🔬 GeoExplore'}
                  {prog.module_type === 'geochallenge' && '🏆 GeoChallenge'}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  prog.status === 'completed' ? 'bg-green-100 text-green-700' :
                  prog.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {prog.status === 'completed' && '✅ Selesai'}
                  {prog.status === 'in_progress' && '🔄 Sedang'}
                  {prog.status === 'not_started' && '⏳ Belum'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-[#2E9A92] rounded-full h-2 transition-all"
                    style={{ width: `${prog.progress_percentage || 0}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {prog.progress_percentage || 0}%
                </span>
              </div>
              {prog.pertemuan > 0 && (
                <p className="text-xs text-slate-400 mt-1">
                  Pertemuan {prog.pertemuan}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Jawaban Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Module Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => {
                setActiveModuleTab("geoexplore");
                setSelectedPertemuan("all");
                setSelectedTahap("all");
              }}
              className={`px-5 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeModuleTab === "geoexplore"
                  ? "border-[#2E9A92] text-[#2E9A92] bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              🔬 GeoExplore
            </button>
            <button
              onClick={() => {
                setActiveModuleTab("geochallenge");
                setSelectedPertemuan("all");
                setSelectedTahap("all");
              }}
              className={`px-5 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeModuleTab === "geochallenge"
                  ? "border-[#FF6B5C] text-[#FF6B5C] bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              🏆 GeoChallenge
            </button>
            <button
              onClick={() => {
                setActiveModuleTab("all");
                setSelectedPertemuan("all");
                setSelectedTahap("all");
              }}
              className={`px-5 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                activeModuleTab === "all"
                  ? "border-slate-800 text-slate-800 bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              📑 Semua Modul
            </button>
          </div>

          {/* Header Filter */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2E9A92]" />
                <h2 className="text-lg font-bold text-slate-800">
                  Semua Jawaban Uraian
                </h2>
                <span className="text-sm text-slate-400">
                  ({answersData.length} jawaban)
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {/* Filter Pertemuan */}
                <select
                  value={selectedPertemuan}
                  onChange={(e) => setSelectedPertemuan(e.target.value)}
                  className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E9A92]"
                >
                  <option value="all">Semua Pertemuan</option>
                  {uniquePertemuan.map(p => (
                    <option key={p} value={p}>Pertemuan {p}</option>
                  ))}
                </select>

                {/* Filter Tahap */}
                {uniqueTahap.length > 0 && (
                  <select
                    value={selectedTahap}
                    onChange={(e) => setSelectedTahap(e.target.value)}
                    className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E9A92]"
                  >
                    <option value="all">Semua Tahap</option>
                    {uniqueTahap.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                )}

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari jawaban..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9A92] w-full sm:w-48"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* List Jawaban */}
          <div className="divide-y divide-slate-100">
            {filteredAnswers.length === 0 ? (
              <div className="p-8 text-center">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">
                  {answersData.length === 0 
                    ? "Belum ada jawaban uraian yang dikirim"
                    : "Tidak ada jawaban yang sesuai dengan filter"
                  }
                </p>
              </div>
            ) : (
          filteredAnswers.map((answer, index) => {
          // Cek apakah ini jawaban gambar (tahap "gambar")
          const isImageAnswer = answer.tahap === "gambar";
          
          return (
            <div key={answer.id || index} className="p-4 hover:bg-slate-50/50 transition">
              {/* Header Jawaban */}
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(answer.id || index)}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {(answer.module_type || "geoexplore") === "geoexplore" ? "🔬 GeoExplore" : "🏆 GeoChallenge"}
                  </span>
                  <span className="text-sm font-semibold text-[#2E9A92]">
                    Pertemuan {answer.pertemuan || '?'}
                  </span>
                  {answer.tahap && (
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      answer.tahap === "gambar" ? "bg-purple-100 text-purple-700" :
                      answer.tahap === "orientasi_zpd" ? "bg-blue-100 text-blue-700" :
                      answer.tahap === "hipotesis" ? "bg-orange-100 text-orange-700" :
                      answer.tahap === "refleksi" ? "bg-green-100 text-green-700" :
                      answer.tahap === "masukan" ? "bg-pink-100 text-pink-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {answer.tahap === "gambar" && "🖼️ Gambar"}
                      {answer.tahap === "orientasi_zpd" && "📖 Orientasi"}
                      {answer.tahap === "hipotesis" && "🎯 Hipotesis"}
                      {answer.tahap === "refleksi" && "🤔 Refleksi"}
                      {answer.tahap === "masukan" && "💬 Masukan"}
                      {answer.tahap === "visualisasi" && "👁️ Visualisasi"}
                      {!["gambar","orientasi_zpd","hipotesis","refleksi","masukan","visualisasi"].includes(answer.tahap) && answer.tahap}
                    </span>
                  )}
                  <span className="text-sm text-slate-700 truncate max-w-xs">
                    {answer.pertanyaan || 'Pertanyaan'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {answer.created_at 
                      ? new Date(answer.created_at).toLocaleDateString('id-ID')
                      : ''
                    }
                  </span>
                  {expandedAnswers[answer.id || index] ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Jawaban (Expandable) */}
              {expandedAnswers[answer.id || index] && (
                <div className="mt-3 ml-4 pl-4 border-l-2 border-[#2E9A92]/30">
                  <div className={`p-4 rounded-lg border ${
                    isImageAnswer ? 'bg-purple-50 border-purple-200' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {/* Jika jawaban adalah gambar */}
                    {isImageAnswer ? (
                      <RenderImage url={answer.jawaban} alt={answer.pertanyaan} />
                    ) : (
                      // Jika jawaban adalah teks biasa
                      <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {answer.jawaban || (
                          <span className="text-slate-400 italic">Tidak dijawab</span>
                        )}
                      </p>
                    )}
                    {answer.updated_at && answer.updated_at !== answer.created_at && (
                      <p className="text-xs text-slate-400 mt-2">
                        Terakhir diperbarui: {new Date(answer.updated_at).toLocaleString('id-ID')}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDetailPage;