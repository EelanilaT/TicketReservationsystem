import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainManagement() {
  const [trains, setTrains] = useState([]);
  const [editingTrain, setEditingTrain] = useState(null);
  const [newTrain, setNewTrain] = useState({
    trainNumber: '',
    departureStation: '',
    arrivalStation: '',
    departureTime: '',
    arrivalTime: '',
  });

  useEffect(() => {
    // Fetch train schedule data from your API when the component mounts
    axios
      .get('http://localhost:7254/trains')
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train schedules:', error);
      });
  }, []);

  const handleEdit = (train) => {
    // Set the editingTrain state to the selected train for editing
    setEditingTrain(train);
  };

  const handleUpdate = () => {
    // Send a PUT request to update the selected train schedule
    axios
      .put(`http://localhost:7254/train/${editingTrain._id}`, editingTrain)
      .then(() => {
        // Update the state with the updated train schedule
        setTrains((prevTrains) =>
          prevTrains.map((train) =>
            train._id === editingTrain._id ? editingTrain : train
          )
        );
        setEditingTrain(null); // Clear the editing state
      })
      .catch((error) => {
        console.error('Error updating train schedule:', error);
      });
  };

  const handleDelete = (trainId) => {
    // Send a DELETE request to delete the selected train schedule
    axios
      .delete(`http://localhost:7254/train/${trainId}`)
      .then(() => {
        // Remove the deleted train schedule from the state
        setTrains((prevTrains) =>
          prevTrains.filter((train) => train._id !== trainId)
        );
      })
      .catch((error) => {
        console.error('Error deleting train schedule:', error);
      });
  };

  const handleCreate = () => {
    // Send a POST request to create a new train schedule
    axios
      .post('http://localhost:7254/train', newTrain)
      .then((response) => {
        // Add the new train schedule to the state
        setTrains([...trains, response.data]);
        setNewTrain({
          trainNumber: '',
          departureStation: '',
          arrivalStation: '',
          departureTime: '',
          arrivalTime: '',
        });
      })
      .catch((error) => {
        console.error('Error creating train schedule:', error);
      });
  };

  const renderForm = () => {
    if (editingTrain) {
      return (
        <div>
          <h3>Edit Train</h3>
          <form onSubmit={handleUpdate}>
            {/* Form fields for editing */}
            {/* You can use similar form fields as in the create form */}
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="mb-4">Train Management</h2>
          <form onSubmit={handleCreate}>
            {/* Create form fields */}
            {/* ... */}
          </form>
        </div>
      );
    }
  };

  return (
    <div className="container mt-4">
      {renderForm()}
      <table className="table">
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Station</th>
            <th>Arrival Station</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train._id}>
              <td>{train.trainNumber}</td>
              <td>{train.departureStation}</td>
              <td>{train.arrivalStation}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(train)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(train._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainManagement;
