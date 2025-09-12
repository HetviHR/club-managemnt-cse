import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentBoard from "./StudentBoard";
import ClubDetailsPage from "./student/ClubDetailsPage";
import EventClub from "./student/ClubEventsPage";
import EventClub1 from "./student/ClubEvent2";
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
            <Route path="aimlclub" element={<EventClub />}/>
            <Route path="tech" element={<EventClub1 />}/>

          </Routes>
       
    </>
  );
};

export default StudentDashboard;