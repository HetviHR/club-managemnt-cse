import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const StudentBoard = () => {
  const navigate = useNavigate(); // React Router hook

  const handleExplore = () => {
    navigate('/student/club'); // replace with your route
  };
  return (
    <div>
      <div style={{
        textAlign: 'center',
        padding: '50px 20px',
        backgroundColor: '#ffffff', // plain white background
        minHeight: '500px'
      }}>
        <h2 style={{
  fontSize: '100px',
  margin: '50px 300px 50px 300px',
  background: 'linear-gradient(90deg, #3998D8, #1E5072)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>
  Welcome to Computer Science Club Portal
</h2>


        <p style={{
          fontSize: '18px',
          color: '#666666', // dark gray for text
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          Discover amazing clubs, connect with students, and join exciting events. 
          Start your university experience here.
        </p>

        {/* Buttons */}
        <div>
          <button onClick={handleExplore}
          style={{
            background: 'linear-gradient(90deg, #3998D8, #1E5072)', // blue gradient
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '10px',
            margin: '10px',
            cursor: 'pointer'
          }}>
            Explore Clubs
          </button>

          <button style={{
            backgroundColor: 'white',
            color: '#3998D8', // blue text
            border: '2px solid #3998D8', // add border to match color
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '10px',
            margin: '10px',
            cursor: 'pointer'
          }}>
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;
