import axios from 'axios';

const API_URL = 'https://localhost:7254/'; 

export const createTicketBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTicketBooking = async (bookingId, bookingData) => {
  try {
    const response = await axios.put(`${API_URL}/bookings/${bookingId}`, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const cancelTicketBooking = async (bookingId) => {
  try {
    const response = await axios.delete(`${API_URL}/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
