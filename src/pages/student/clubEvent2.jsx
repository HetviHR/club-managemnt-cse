import React from "react";
import { Users, Calendar } from "lucide-react";


const EventClub1 = () => {
  const statsData = [
    {
      icon: <Users size={40} />,
      number: "156",
      label: "Members",
      bgColor: "rgba(196, 229, 255, 0.5)",
    },
    {
      icon: <Calendar size={40} />,
      number: "2",
      label: "Events",
      bgColor: "rgba(69, 123, 158, 0.5)",
    },
    {
      icon: <Users size={40} />,
      number: "3",
      label: "Faculty",
      bgColor: "rgba(174, 204, 224, 0.63)",
    },
  ];

  const facultyData = [
    {
      name: "Amit Thakkar",
      role: "Convener",
      department: "CSPIT CSE",
      avatar: '/images/logo.png', 
    },
    {
      name: "Abhishek Patel",
      role: "Faculty Coordinator",
      department: "CSPIT CSE",
      avatar: '/images/logo.png',
    },
    {
      name: "Harshul Yagnik",
      role: "Faculty Coordinator",
      department: "CSPIT CSE",
      avatar: '/images/logo.png',
    },
  ];

  // Styles
  const containerStyle = {
    width: "1440px",
    minHeight: "2500px",
    backgroundColor: "white",
    fontFamily: "Inter, Helvetica, sans-serif",
    margin: "0 auto",
    paddingBottom: "100px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "30px 0 0 43px",
    gap: "20px",
  };

  const titleBadgeContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const titleStyle = {
    background:
      "linear-gradient(90deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "500",
    fontSize: "60px",
    margin: 0,
  };

  const badgeStyle = {
    width: "177px",
    height: "49px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "17px",
    border: "none",
  };

  const badgeTextStyle = {
    fontWeight: "bold",
    color: "white",
    fontSize: "25px",
  };

  const heroImageStyle = {
    width: "1340px",
    height: "387px",
    margin: "20px 0 0 43px",
    borderRadius: "93px",
    objectFit: "cover",
  };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    marginTop: "40px",
  };

  const statCardStyle = (bgColor) => ({
    width: "300px",
    height: "200px",
    backgroundColor: bgColor,
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  });

  const aboutTitleStyle = {
    fontWeight: "bold",
    color: "black",
    fontSize: "40px",
    lineHeight: "normal",
    margin: "40px 0 0 55px",
  };

  const aboutTextStyle = {
    width: "1327px",
    fontWeight: "normal",
    color: "black",
    fontSize: "40px",
    lineHeight: "normal",
    margin: "20px 0 0 55px",
  };

  const facultyTitleStyle = {
    fontWeight: "bold",
    color: "black",
    fontSize: "60px",
    lineHeight: "normal",
    textAlign: "center",
    margin: "60px 0 40px 0",
  };

  const facultyContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "78px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const facultyCardStyle = {
    width: "350px",
    height: "409px",
    backgroundColor: "rgba(227, 233, 248, 0.32)",
    borderRadius: "55px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
  };

  const facultyAvatarStyle = {
    width: "140px",
    height: "140px",
    borderRadius: "70px",
    marginBottom: "20px",
    objectFit: "cover",
  };

  const facultyNameStyle = {
    fontWeight: "600",
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "10px",
  };

  const facultyRoleStyle = {
    fontWeight: "600",
    fontSize: "24px",
    background:
      "linear-gradient(180deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "5px",
  };

  const facultyDeptStyle = {
    fontWeight: "500",
    fontSize: "22px",
    color: "black",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={{ width: "129px", height: "108px" }}>
          <img
            src="/images/techgenius_logo.png"
            alt="Club Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={titleBadgeContainer}>
          <h1 style={titleStyle}>Techgenius Club</h1>
          <div style={badgeStyle}>
            <span style={badgeTextStyle}>Technology</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div style={heroImageStyle}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            borderRadius: "93px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/aiml.png"
            alt="Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Stats */}
      <section style={statsContainerStyle}>
        {statsData.map((stat, index) => (
          <div key={index} style={statCardStyle(stat.bgColor)}>
            <div>{stat.icon}</div>
            <div
              style={{ fontWeight: "bold", fontSize: "36px", marginTop: "15px" }}
            >
              {stat.number}
            </div>
            <div style={{ fontSize: "24px", marginTop: "5px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* About */}
      <h2 style={aboutTitleStyle}>About this club</h2>
      <p style={aboutTextStyle}>
        The Computer Science Society is dedicated to fostering a collaborative
        environment where students can explore the latest in technology,
        participate in coding competitions, attend tech talks, and work on
        innovative projects. We organize hackathons, workshops on emerging
        technologies, and networking events with industry professionals.
      </p>

      {/* Faculty */}
      <h2 style={facultyTitleStyle}>Faculty Coordinators</h2>
      <section style={facultyContainerStyle}>
        {facultyData.map((faculty, index) => (
          <div key={index} style={facultyCardStyle}>
            <img
              src={faculty.avatar}
              alt={faculty.name}
              style={facultyAvatarStyle}
            />
            <h3 style={facultyNameStyle}>{faculty.name}</h3>
            <div style={facultyRoleStyle}>{faculty.role}</div>
            <div style={facultyDeptStyle}>{faculty.department}</div>
          </div>
        ))}
      </section>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "60px",
        }}
      >
        <button
          style={{
            background: "linear-gradient(90deg, #3998D8, #1E5072)",
            color: "white",
            border: "none",
            padding: "20px 50px",
            minWidth: "250px",
            borderRadius: "20px",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          Join Club
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#007BFF",
            border: "2px solid #007BFF",
            padding: "20px 50px",
            minWidth: "250px",
            borderRadius: "20px",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          Contact Coordinator
        </button>
      </div>
    </div>
  );
};

export default EventClub1;
