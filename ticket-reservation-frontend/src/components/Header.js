import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" style={{ marginLeft: '20px' }} href="/">METRO.COM</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/traveler-form">Travelers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ticket-booking">Ticket Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/train-form">Train</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
