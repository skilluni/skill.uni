import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Pages — Public
import HomePage from "@/pages/public/HomePage";
import AboutPage from "@/pages/public/AboutPage";

// Pages — Auth
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import AuthCallbackPage from "@/pages/auth/AuthCallbackPage";

// Pages — Dashboard
import DashboardPage from "@/pages/dashboard/DashboardPage";
import RoadmapPage from "@/pages/dashboard/RoadmapPage";
import LecturesPage from "@/pages/dashboard/LecturesPage";
import QuizzesPage from "@/pages/dashboard/QuizzesPage";
import LeaderboardPage from "@/pages/dashboard/LeaderboardPage";
import ExamsPage from "@/pages/dashboard/ExamsPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";

// 404
import NotFoundPage from "@/pages/public/NotFoundPage";

export default function App() {
  // Hide default cursor when custom cursor is active
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = "auto"; };
  }, []);

  return (
    <>
      <CustomCursor />
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />

        {/* Protected Dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard"   element={<DashboardPage />} />
          <Route path="/roadmap"     element={<RoadmapPage />} />
          <Route path="/lectures"    element={<LecturesPage />} />
          <Route path="/lectures/:id" element={<LecturesPage />} />
          <Route path="/quizzes"     element={<QuizzesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/exams"       element={<ExamsPage />} />
          <Route path="/profile"     element={<ProfilePage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}