import React, { useState } from 'react';
import axios from 'axios';

function TrainForm() {
  const [train, setTrain] = useState({
    trainNumber: '',
    departureStation: '',
    arrivalStation: '',
    departureTime: '',
    arrivalTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrain({ ...train, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7254/train', train)
      .then((response) => {
        console.log('Train schedule created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating train schedule:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create New Train</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="trainNumber">Train Number:</label>
          <input
            type="text"
            className="form-control"
            id="trainNumber"
            name="trainNumber"
            value={train.trainNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureStation">Departure Station:</label>
          <input
            type="text"
            className="form-control"
            id="departureStation"
            name="departureStation"
            value={train.departureStation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalStation">Arrival Station:</label>
          <input
            type="text"
            className="form-control"
            id="arrivalStation"
            name="arrivalStation"
            value={train.arrivalStation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureTime">Departure Time:</label>
          <input
            type="time"
            className="form-control"
            id="departureTime"
            name="departureTime"
            value={train.departureTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalTime">Arrival Time:</label>
          <input
            type="time"
            className="form-control"
            id="arrivalTime"
            name="arrivalTime"
            value={train.arrivalTime}
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

export default TrainForm;
