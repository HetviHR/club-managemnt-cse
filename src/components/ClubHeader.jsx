import React from "react";

export default function ClubHeader({ club }) {
  if (!club) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-6">
      <img
        src={club.banner || "/default-banner.png"}
        alt="Club Banner"
        className="w-32 h-32 object-cover rounded-xl"
      />
      <div>
        <h2 className="text-2xl font-bold">{club.name}</h2>
        <p className="text-gray-600">{club.description}</p>
      </div>
    </div>
  );
}
