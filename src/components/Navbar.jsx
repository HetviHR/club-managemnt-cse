import React from 'react';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/signup';
  };

  return (
    <div style={{
      background: 'linear-gradient(90deg, #3998D8, #1E5072)',
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: '0', fontSize: '24px' }}>
        CSE Clubs
      </h1>
      
      <button 
        onClick={handleLogout}
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
