import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import HODDashboard from "./pages/HODDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route opens SignUp page first */}
        <Route path="/" element={<SignUp />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboards with role-based protection */}
        <Route
          path="/student/*"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/faculty/*"
          element={
            <ProtectedRoute role="faculty">
              <FacultyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hod/*"
          element={
            <ProtectedRoute role="hod">
              <HODDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch all route for unknown URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
