// services/platformService.js
import api from './api';

export const postPlatformData = async (payload) => {
  try {
    const res = await api.post('/platforms', payload);
    console.log(' Platform saved:', res.data);
    return res.data;
  } catch (error) {
    console.error(' Error saving platform:', error);
    throw error;
  }
};
