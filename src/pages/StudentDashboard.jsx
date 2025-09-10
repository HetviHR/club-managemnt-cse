import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import ClubEventsPage from "./student/ClubEventsPage";
import ClubDetailsPage from "./student/ClubDetailsPage";
import RequestsPage from "./student/RequestsPage";

const drawerWidth = 240; // Sidebar width

const StudentDashboard = () => {
  return (
    <>
      {/* Navbar at top */}
      <Navbar />

      {/* Sidebar and content below navbar */}
      <Box sx={{ display: "flex" }}>
        {/* Sidebar (left side) */}
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            borderRight: "1px solid #ddd",
          }}
        >
          <Sidebar role="student" />
        </Box>

        {/* Main content (right side) */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="events" replace />} />
            <Route path="events" element={<ClubEventsPage />} />
            <Route path="club" element={<ClubDetailsPage />} />
            <Route path="requests" element={<RequestsPage />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default StudentDashboard;
