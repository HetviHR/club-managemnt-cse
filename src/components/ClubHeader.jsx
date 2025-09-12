import React from "react";
import "./ClubHeader.css";

export default function ClubHeader({ club }) {
  return (
    <div className="club-header">
      <img
        src={club.banner}
        alt={club.name}
        className="club-banner"
      />
      <div className="club-info">
        <h1>{club.name}</h1>
        <p>{club.description}</p>
      </div>
    </div>
  );
}
