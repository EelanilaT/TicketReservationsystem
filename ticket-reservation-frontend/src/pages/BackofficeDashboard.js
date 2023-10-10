import React from 'react';
import { Link } from 'react-router-dom';

const dashboardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh', // Adjust this to control the vertical alignment
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const buttonStyle = {
  marginTop: '20px',
  marginBottom: '20px',
};

function BackofficeDashboard() {
  return (
    <div style={dashboardStyle}>
      <h1>Welcome to the Backoffice Dashboard</h1>
      <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
          <Link to="/ticket-booking" className="btn btn-primary mr-2">
            Ticket Booking Management
          </Link>
        </div>
        <div style={buttonStyle}>
          <Link to="/train-management" className="btn btn-primary mr-2">
            Train Management
          </Link>
        </div>
        <div style={buttonStyle}>
          <Link to="/traveler-management" className="btn btn-primary">
            Traveler Management
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BackofficeDashboard;
