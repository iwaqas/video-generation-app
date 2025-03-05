// filepath: /video-generation-app/video-generation-app/web/src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // Replace with your API base URL

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Additional service functions can be added here as needed.