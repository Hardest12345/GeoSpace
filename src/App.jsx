import React, { useState } from "react";

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import NaviGuide from "./components/NaviGuide";
import GeoMission from "./components/GeoMission";
import GeoMap from "./components/GeoMap";
import GeoExplore from "./components/GeoExplore";
import GeoChallenge from "./components/GeoChallenge";
import GeoChallengeDetail from "./components/GeoChallengeDetail";

import "./App.css";

function App() {
  // =====================================================
  // STATE
  // =====================================================

  const [currentPage, setCurrentPage] = useState("login");
  const [userName, setUserName] = useState("");
  const [selectedPertemuan, setSelectedPertemuan] = useState(null);

  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setCurrentPage("dashboard");
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    setUserName("");
    setSelectedPertemuan(null);
    setCurrentPage("login");
  };

  // =====================================================
  // RENDER PAGE
  // =====================================================

  const renderPage = () => {
    switch (currentPage) {
      // =================================================
      // LOGIN
      // =================================================

      case "login":
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;

      // =================================================
      // DASHBOARD
      // =================================================

      case "dashboard":
        return (
          <Dashboard
            userName={userName}
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
