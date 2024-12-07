import axios from 'axios';

export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const loadUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  setAuthToken(token);
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`);
  return { user: response.data, token };
};
