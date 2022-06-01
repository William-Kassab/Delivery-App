import axios from 'axios';

export const authLogin = async (login) => {
  try {
    const result = await axios.post('localhost:3001/login', login);
    console.log(result);
  } catch (e) {
    console.error(e);
    return 'error';
  }
};

export const createUser = async (register) => {
  try {
    const result = await axios.post('localhost:3001/register', register);
    console.log(result);
  } catch (e) {
    console.error(e);
    return 'error';
  }
};
