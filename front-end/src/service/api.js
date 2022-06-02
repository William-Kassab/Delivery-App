import axios from 'axios';

export const authLogin = async (login) => {
  try {
    const result = await axios.post('http://localhost:3001/login', login);
    return result;
  } catch (e) {
    console.error(e);
    return 'invalid Login';
  }
};

export const createUser = async (register) => {
  try {
    const result = await axios.post('http://localhost:3001/register', register);
    return result;
  } catch (e) {
    console.error(e);
    return 'invalid Login';
  }
};
