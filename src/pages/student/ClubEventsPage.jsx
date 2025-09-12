import React from 'react';
import { Users, Calendar } from "lucide-react";

const EventClub = () => {
  const statsData = [
    {
    icon: <Users size={40} />,   // real icon
    number: '156',
    label: 'Members',
    bgColor: 'rgba(196, 229, 255, 0.5)',
  },
  {
    icon: <Calendar size={40} />,
    number: '2',
    label: 'Events',
    bgColor: 'rgba(69, 123, 158, 0.5)',
  },
    {
      icon: '',
      number: '',
      label: '',
      bgColor: 'rgba(174, 204, 224, 0.63)',
    },
  ];

  const facultyData = [
    {
      name: 'Amit Thakkar',
      role: 'Convener',
      department: 'CSPIT CSE',
      isConvener: true,
    },
    {
      name: 'Abhishek Patel',
      role: 'Faculty Coordinator',
      department: 'CSPIT CSE',
      isConvener: false,
    },
    {
      name: 'Harshul Yagnik',
      role: 'Faculty Coordinator',
      department: 'CSPIT CSE',
      isConvener: false,
    },
  ];

  const containerStyle = {
    position: 'relative',
    width: '1440px',
    height: '2312px',
    backgroundColor: 'white',
    fontFamily: 'Inter, Helvetica, sans-serif',
    margin: '0 auto',
  };

  const headerStyle = {
    position: 'absolute',
    width: '295px',
    height: '130px',
    top: '30px',
    left: '172px',
  };

  const titleStyle = {
    position: 'absolute',
    width: '295px',
    height: '91px',
    top: '0',
    left: '0',
    background: 'linear-gradient(90deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontWeight: '500',
    fontSize: '60px',
    lineHeight: 'normal',
    margin: '0',
  };

  const badgeStyle = {
    position: 'absolute',
    width: '177px',
    height: '49px',
    top: '81px',
    left: '0',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '17px',
    border: 'none',
  };

  const badgeTextStyle = {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '25px',
    lineHeight: '30px',
  };

  const logoStyle = {
    position: 'absolute',
    width: '129px',
    height: '108px',
    top: '38px',
    left: '43px',
  };

  const heroImageStyle = {
    position: 'absolute',
    width: '1340px',
    height: '387px',
    top: '174px',
    left: '43px',
    borderRadius: '93px',
    objectFit: 'cover',
  };

  const statsContainerStyle = {
    position: 'absolute',
    top: '607px',
    left: '43px',
    display: 'flex',
    gap: '111px',
  };

  const statCardStyle = (bgColor) => ({
    width: '369px',
    height: '209px',
    backgroundColor: bgColor,
    borderRadius: '50px',
    border: 'none',
    position: 'relative',
  });

  const statIconStyle = {
    position: 'absolute',
    width: '69px',
    height: '59px',
    top: '30px',
    left: '138px',
    fontSize: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const statNumberStyle = {
    position: 'absolute',
    height: '48px',
    top: '104px',
    left: '140px',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '40px',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
  };

  const statLabelStyle = {
    position: 'absolute',
    height: '36px',
    top: '152px',
    left: '106px',
    fontWeight: 'normal',
    color: 'black',
    fontSize: '30px',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
  };

  const aboutTitleStyle = {
    position: 'absolute',
    height: '48px',
    top: '879px',
    left: '43px',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '40px',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    margin: '0',
  };

  const aboutTextStyle = {
    position: 'absolute',
    width: '1327px',
    height: '288px',
    top: '940px',
    left: '55px',
    fontWeight: 'normal',
    color: 'black',
    fontSize: '40px',
    lineHeight: 'normal',
    margin: '0',
  };

  const facultyTitleStyle = {
    position: 'absolute',
    height: '73px',
    top: '1302px',
    left: '398px',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '60px',
    lineHeight: 'normal',
    margin: '0',
  };

  const facultyContainerStyle = {
    position: 'absolute',
    top: '1397px',
    left: '55px',
    display: 'flex',
    gap: '78px',
  };

  const facultyCardStyle = (index) => ({
    width: index === 0 ? '377px' : index === 1 ? '355px' : '341px',
    height: '409px',
    backgroundColor: 'rgba(227, 233, 248, 0.32)',
    borderRadius: '55px',
    border: 'none',
    position: 'relative',
  });

  const facultyAvatarStyle = (index) => ({
    position: 'absolute',
    width: index === 0 ? '153px' : '140px',
    height: '140px',
    top: index === 0 ? '36px' : index === 1 ? '25px' : '27px',
    left: index === 0 ? '112px' : index === 1 ? '91px' : '93px',
    borderRadius: '76.6px/70px',
    backgroundColor: '#d9d9d9',
  });

  const facultyNameStyle = (index) => ({
    position: 'absolute',
    width: '264px',
    height: '47px',
    top: index === 0 ? '205px' : index === 1 ? '194px' : '183px',
    left: index === 0 ? '69px' : index === 1 ? '58px' : '29px',
    fontWeight: '600',
    color: 'black',
    fontSize: '35px',
    lineHeight: 'normal',
    margin: '0',
  });
  const convenerRoleStyle = {
    position: 'absolute',
    width: '154px',
    height: '72px',
    top: '268px',
    left: '119px',
    background: 'linear-gradient(180deg, rgba(57,152,216,1) 0%, rgba(30,80,114,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontWeight: '600',
    fontSize: '30px',
    lineHeight: 'normal',
    margin: '0',
  };

  const facultyDeptStyle = (index) => ({
    position: 'absolute',
    height: '72px',
    top: index === 0 ? '312px' : '300px',
    left: index === 0 ? '104px' : '82px',
    fontWeight: '600',
    color: 'black',
    fontSize: '30px',
    lineHeight: 'normal',
    margin: '0',
  });

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>AIML Club</h1>
        <div style={badgeStyle}>
          <span style={badgeTextStyle}>Technology</span>
        </div>
      </header>

     <div style={logoStyle}>
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' // ensures image fits nicely
  }}>
    <img 
      src="/images/logo.png"   // <-- replace with your image path or URL
      alt="Club Logo" 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover' // keeps aspect ratio while filling box
      }} 
    />
  </div>
</div>


 <div style={heroImageStyle}>
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '93px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' // important for rounded corners
  }}>
    <img 
      src="/images/aiml.png"   // <-- replace with your actual image path or URL
      alt="Hero" 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover' // makes image nicely fill area
      }} 
    />
  </div>
</div>


      <section style={statsContainerStyle}>
        {statsData.map((stat, index) => (
          <div key={index} style={statCardStyle(stat.bgColor)}>
            {stat.icon && (
              <div style={statIconStyle}>
                {stat.icon}
              </div>
            )}
            {stat.number && (
              <div style={statNumberStyle}>
                {stat.number}
              </div>
            )}
            {stat.label && (
              <div style={statLabelStyle}>
                {stat.label}
              </div>
            )}
          </div>
        ))}
      </section>

      <h2 style={aboutTitleStyle}>About this club</h2>

      <p style={aboutTextStyle}>
        The Computer Science Society is dedicated to fostering a collaborative
        environment where students can explore the latest in technology,
        participate in coding competitions, attend tech talks,<br />
        and work on innovative projects. We organize hackathons, <br />
        workshops on emerging technologies, and networking events with industry
        professionals.
      </p>

      <h2 style={facultyTitleStyle}>Faculty Cordinator</h2>

      <section style={facultyContainerStyle}>
        {facultyData.map((faculty, index) => (
          <div key={index} style={facultyCardStyle(index)}>
            <div style={facultyAvatarStyle(index)} />
            
            <h3 style={facultyNameStyle(index)}>
              {faculty.name}
            </h3>

              <div style={convenerRoleStyle}>
                {faculty.role}
              </div>

            <div style={facultyDeptStyle(index)}>
              {faculty.department}
            </div>
          </div>
        ))}
        
      </section>
     <div style={{ 
  position: "absolute",
  top: "1850px",   // adjust as needed
  left: "43px",    // align with content
  display: "flex",
  gap: "40px"      // ✅ space between two buttons
}}>
  <button style={{ 
    background:'linear-gradient(90deg, #3998D8, #1E5072)', 
    color: "white", 
    border: "none", 
    padding: "20px 50px",  // ✅ bigger padding
    minWidth: "600px",     // ✅ fixed wider button
    borderRadius: "20px", 
    fontSize: "28px",
    cursor: "pointer"
  }}>
    Join Club
  </button>
  <button style={{ 
    backgroundColor: "white", 
    color: "#007BFF", 
    border: "2px solid  'linear-gradient(90deg, #3998D8, #1E5072)', ", 
    padding: "20px 50px",  
    minWidth: "600px",     
    borderRadius: "20px", 
    fontSize: "28px",
    cursor: "pointer"
  }}>
    Contact Coordinator
  </button>
</div>


    </div>
    
  );
};
export default EventClub;