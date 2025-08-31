import React from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const commonMenu = [
    { text: "Profile", path: `/${role}/profile` },
  ];

  const menus = {
    student: [
      { text: "Club Events", path: "/student/events" },
      { text: "Club Details", path: "/student/club" },
      { text: "Requests", path: "/student/requests" },
      ...commonMenu,
    ],
    faculty: [
      { text: "Students", path: "/faculty/students" },
      { text: "Add Events", path: "/faculty/events/create" },
      { text: "Requests", path: "/faculty/requests" },
      ...commonMenu,
    ],
    hod: [
      { text: "Clubs Overview", path: "/hod/clubs" },
      { text: "Faculty Assignment", path: "/hod/faculty" },
      { text: "Participation Monitoring", path: "/hod/monitoring" },
      ...commonMenu,
    ],
  };

  const listItems = menus[role] || [];

  return (
    <Drawer variant="permanent" anchor="left">
      <List sx={{ width: 240 }}>
        {listItems.map(({ text, path }) => (
          <ListItemButton key={text} onClick={() => navigate(path)}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
