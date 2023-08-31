import axios from 'axios';

// Create an instance of Axios with the base URL for your Laravel API
const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your Laravel API endpoint
});

// Define the registerUser function that sends a POST request to the registration endpoint
const registerUser = async (userData) => {
  try {
    // Send a POST request to the '/register' endpoint with the user data
    const response = await api.post('/register', userData);
    return response.data; // Return the response data (usually contains success message)
  } catch (error) {
    throw new Error(error.response.data.message); // Throw an error with the error message from the API
  }
};

// Export the functions you want to use in your components
export default {
  registerUser,
};


