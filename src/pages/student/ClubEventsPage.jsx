import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const ClubEventsPage = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Club Events
      </Typography>
      {/* TODO: Fetch and render club event cards/lists */}
      <Typography>List of events will be here.</Typography>
    </Paper>
  );
};

export default ClubEventsPage;
