import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TravelerForm() {
  let navigate = useNavigate();
  const [traveler, setTraveler] = useState({
    NIC: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTraveler({ ...traveler, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7254/traveler', traveler)
      .then((response) => {
        console.log('Traveler profile created/updated:', response.data);
        navigate('/TravelerManagement');
      })
      .catch((error) => {
        console.error('Error creating/updating traveler profile:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Traveler Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="NIC">NIC:</label>
          <input
            type="text"
            className="form-control"
            id="NIC"
            name="NIC"
            value={traveler.NIC}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={traveler.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={traveler.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={traveler.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TravelerForm;
