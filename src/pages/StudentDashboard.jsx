import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import ClubEventsPage from "./student/ClubEventsPage";
import ClubDetailsPage from "./student/ClubDetailsPage";
import RequestsPage from "./student/RequestsPage";

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar role="student" />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
