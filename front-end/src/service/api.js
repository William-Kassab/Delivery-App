import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const authLogin = async (login) => {
  try {
    const result = await api.post('/login', login);
    return result;
  } catch (e) {
    console.error(e);
    return 'invalid Login';
  }
};

export const createUser = async (register) => {
  try {
    const result = await api.post('/register', register);
    return result;
  } catch (e) {
    console.error(e);
    return 'invalid Register';
  }
};

export const getProducts = async (token) => {
  try {
    const result = await api.get('/products', { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'invalid token';
  }
};

export const createSale = async (body, token) => {
  try {
    const result = await api.post('/orders', body, { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export const createUserByAdmin = async (body, token) => {
  try {
    const result = await api.post('/admin', body, { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'invalid Register';
  }
};

export const getUsers = async (token) => {
  try {
    const result = await api.get('/admin', { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'invalid token';
  }
};

export const getSales = async (token) => {
  try {
    const result = await api.get('/orders', { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export const getSaleDetails = async (token, id) => {
  try {
    const result = await api.get(`/orders/${id}`, { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export const deleteUserByAdmin = async (token, id) => {
  try {
    const result = await api.delete(`/admin/${id}`,
      { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export const updateSaleStatusById = async (token, id, status) => {
  try {
    const result = await api.patch(`/orders/${id}`,
      { saleStatus: status },
      { headers: { Authorization: token } });
    return result;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};
