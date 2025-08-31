function ClubCard() {
  // Replace with actual props-data later
  const club = { name: "AIML Club", description: "AI and ML enthusiasts group" };
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h2>{club.name}</h2>
      <p>{club.description}</p>
      {/* Add members, faculty info, etc. */}
    </div>
  );
}
export default ClubCard;
