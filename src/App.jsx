import React, { useState } from "react";

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import NaviGuide from "./components/NaviGuide";
import GeoMission from "./components/GeoMission";
import GeoMap from "./components/GeoMap";
import GeoExplore from "./components/GeoExplore";
import GeoChallenge from "./components/GeoChallenge";
import GeoChallengeDetail from "./components/GeoChallengeDetail";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDetailPage from "./components/StudentDetailPage";
import ErrorBoundary from './components/ErrorBoundary';

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);
  const [userKelas, setUserKelas] = useState("");
  const [userRole, setUserRole] = useState("student");
  const [selectedPertemuan, setSelectedPertemuan] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedStudentName, setSelectedStudentName] = useState("");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLoginSuccess = (name, id, kelas, role = "student") => {
    setUserName(name);
    setUserId(id);
    setUserKelas(kelas || "");
    setUserRole(role || "student");

    // Jika role teacher, arahkan ke teacher dashboard
    if (role === "teacher") {
      setCurrentPage("teacher-dashboard");
    } else {
      setCurrentPage("dashboard");
    }
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("geospace_user");
    setUserName("");
    setUserId(null);
    setUserKelas("");
    setUserRole("student");
    setSelectedPertemuan(null);
    setCurrentPage("login");
  };
  const handleViewStudentDetail = (studentId, studentName) => {
    setSelectedStudentId(studentId);
    setSelectedStudentName(studentName);
    setCurrentPage("student-detail");
  };
  // =====================================================
  // RENDER PAGE
  // =====================================================

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <LoginPage
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={() => setCurrentPage("register")}
          />
        );

      case "register":
        return (
          <RegisterPage
            onRegisterSuccess={handleLoginSuccess}
            onBackToLogin={() => setCurrentPage("login")}
          />
        );

      case "teacher-dashboard":
        return (
          <TeacherDashboard onLogout={handleLogout} 
          teacherName={userName}             
          onViewStudentDetail={handleViewStudentDetail}/>
        );
      case "student-detail":
        return (
          <StudentDetailPage
            studentId={selectedStudentId}
            studentName={selectedStudentName}
            onBack={() => setCurrentPage("teacher-dashboard")}
          />
        );
      case "dashboard":
        return (
          <Dashboard
            userName={userName}
            userId={userId}
            userKelas={userKelas}
            onLogout={handleLogout}
            onNavigate={navigateTo}
          />
        );

      // =================================================
      // NAVIGUIDE
      // =================================================

      case "naviguide":
        return (
          <NaviGuide
            onNavigate={(page) => {
              setCurrentPage(page);
            }}
          />
        );

      // =================================================
      // GEOMISSION
      // =================================================

      case "geomission":
        return (
          <GeoMission
            onBackToDashboard={() => setCurrentPage("dashboard")}
            onNavigateNext={() => setCurrentPage("geomap")}
            onNavigatePrev={() => setCurrentPage("naviguide")}
          />
        );

      // =================================================
      // GEOMAP
      // =================================================

      case "geomap":
        return (
          <GeoMap
            onBackToDashboard={() => setCurrentPage("dashboard")}
            onNavigateNext={() => setCurrentPage("geoexplore")}
            onNavigatePrev={() => setCurrentPage("geomission")}
          />
        );

      // =================================================
      // GEOEXPLORE
      // =================================================

      case "geoexplore":
        return (
          <GeoExplore
            onBackToDashboard={() => setCurrentPage("dashboard")}
            onNavigatePrev={() => setCurrentPage("geomap")}
            onNavigateNext={() => setCurrentPage("geochallenge")}
            onSelectMeeting={(meetingId) => {
              console.log("Pertemuan dipilih:", meetingId);

              /*
               * Untuk sementara tombol
               * "Mulai Eksplorasi" belum membuka
               * halaman detail.
               *
               * Nanti bisa diarahkan seperti:
               *
               * setSelectedPertemuan(meetingId);
               * setCurrentPage("geoexplore-detail");
               */
            }}
          />
        );

      // =================================================
      // GEOCHALLENGE
      // =================================================

      case "geochallenge":
        return (
          <GeoChallenge
            onBackToDashboard={() => setCurrentPage("dashboard")}
            onNavigate={(page) => {
              setCurrentPage(page);
            }}
            onOpenDetail={(pertemuan) => {
              setSelectedPertemuan(pertemuan);
              setCurrentPage("geochallengedetail");
            }}
          />
        );

      // =================================================
      // GEOCHALLENGE DETAIL
      // =================================================

      case "geochallengedetail":
        return (
          <GeoChallengeDetail
            onBack={() => setCurrentPage("geochallenge")}
            onNavigate={() => setCurrentPage("geochallenge")}
            meeting={selectedPertemuan || 1}
            pertemuan={selectedPertemuan || 1}
          />
        );

      // =================================================
      // DEFAULT
      // =================================================

      default:
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }
  };

  // =====================================================
  // APP
  // =====================================================

  return <>{renderPage()}</>;
}

export default App;
