import axios from 'axios';

const API_URL = 'https://localhost:7254/'; 

export const createTraveler = async (travelerData) => {
  try {
    const response = await axios.post(`${API_URL}/travelers`, travelerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTraveler = async (NIC, travelerData) => {
  try {
    const response = await axios.put(`${API_URL}/travelers/${NIC}`, travelerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTraveler = async (NIC) => {
  try {
    const response = await axios.delete(`${API_URL}/travelers/${NIC}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
