import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentBoard from "./StudentBoard";
import ClubDetailsPage from "./student/ClubDetailsPage";
import RequestsPage from "./student/RequestsPage";
import ClubEvent from "./student/ClubEventsPage";
import EventClub from "./student/ClubEventsPage";
const StudentDashboard = () => {
  return (
    <>
      {/* Navbar at top */}
      <Navbar />

      {/* Sidebar and content below navbar */}
     
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<StudentBoard />} />
            <Route path="club" element={<ClubDetailsPage />} />
            <Route path="events" element={<EventClub />}/>
            <Route path="requests" element={<RequestsPage />} />
          </Routes>
       
    </>
  );
};

export default StudentDashboard;
