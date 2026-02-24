import axios from '../utils/axios';

export const addFeedback = (data: { category: string; content: string }) => {
  return axios.post('/api/fb/feedbacks', data);
};
