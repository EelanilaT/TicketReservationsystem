import axios from 'axios';

const API_URL = 'https://localhost:7254/'; 

export const createTrain = async (trainData) => {
  try {
    const response = await axios.post(`${API_URL}/trains`, trainData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTrain = async (trainId, trainData) => {
  try {
    const response = await axios.put(`${API_URL}/trains/${trainId}`, trainData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const cancelTrain = async (trainId) => {
  try {
    const response = await axios.delete(`${API_URL}/trains/${trainId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
