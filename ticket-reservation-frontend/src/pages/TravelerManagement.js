import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TravelerManagement() {
  const [travelers, setTravelers] = useState([]);
  const [editingTraveler, setEditingTraveler] = useState(null);

  useEffect(() => {
    // Fetch traveler data from your API when the component mounts
    axios
      .get('http://localhost:7254/travelers')
      .then((response) => {
        setTravelers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching traveler profiles:', error);
      });
  }, []);

  const handleEdit = (traveler) => {
    // Set the editingTraveler state to the selected traveler for editing
    setEditingTraveler(traveler);
  };

  const handleUpdate = () => {
    // Send a PUT request to update the selected traveler profile
    axios
      .put(
        `http://localhost:7254/traveler/${editingTraveler._id}`,
        editingTraveler
      )
      .then(() => {
        // Update the state with the updated traveler profile
        setTravelers((prevTravelers) =>
          prevTravelers.map((traveler) =>
            traveler._id === editingTraveler._id ? editingTraveler : traveler
          )
        );
        setEditingTraveler(null); // Clear the editing state
      })
      .catch((error) => {
        console.error('Error updating traveler profile:', error);
      });
  };

  const handleDelete = (travelerId) => {
    // Send a DELETE request to delete the selected traveler profile
    axios
      .delete(`http://localhost:7254/traveler/${travelerId}`)
      .then(() => {
        // Remove the deleted traveler profile from the state
        setTravelers((prevTravelers) =>
          prevTravelers.filter((traveler) => traveler._id !== travelerId)
        );
      })
      .catch((error) => {
        console.error('Error deleting traveler profile:', error);
      });
  };

  const renderTable = () => {
    if (travelers.length === 0) {
      return <p>No traveler profiles available.</p>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>NIC</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {travelers.map((traveler) => (
            <tr key={traveler._id}>
              <td>{traveler.NIC}</td>
              <td>{traveler.name}</td>
              <td>{traveler.email}</td>
              <td>{traveler.phone}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(traveler)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(traveler._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Traveler Management</h2>
      <Link to="/traveler-form" className="btn btn-success mb-4">
        Add New Traveler
      </Link>
      {renderTable()}
      {editingTraveler && (
        <div className="mt-4">
          <h3>Edit Traveler Profile</h3>
          {/* Render a form for editing the selected traveler */}
          {/* You can use a similar form as in the TravelerForm component */}
          <form onSubmit={handleUpdate}>
            {/* Form fields for editing */}
          </form>
        </div>
      )}
    </div>
  );
}

export default TravelerManagement;
