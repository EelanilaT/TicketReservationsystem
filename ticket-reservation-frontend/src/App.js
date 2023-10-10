import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BackofficeDashboard from './pages/BackofficeDashboard';
import TravelAgentDashboard from './pages/TravelAgentDashboard';
import TravelerManagement from './pages/TravelerManagement';
import TicketBookingManagement from './pages/TicketBookingManagement';
import TrainManagement from './pages/TrainManagement';
import TrainForm from './components/TrainForm';
import TravelerForm from './components/TravelerForm';
import TicketBookingForm from './components/TicketBookingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<BackofficeDashboard />} />
          <Route path="/backoffice" element={<BackofficeDashboard />} />
          <Route path="/travel-agent" element={<TravelAgentDashboard />} />
          <Route path="/traveler-management" element={<TravelerManagement />} />
          <Route path="/ticket-booking" element={<TicketBookingManagement/>} />
          <Route path="/train-management" element={<TrainManagement />} />
          <Route path="/train-form" element={<TrainForm />} />
          <Route path="/traveler-form" element={<TravelerForm />} />
          <Route path="/ticket-booking" element={<TicketBookingForm />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
