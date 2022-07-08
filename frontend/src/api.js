import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

// secured routes
const checkResponseCode = (error) => {
  console.log(error);
  const status = error?.response.status;

  if (status) {
    (status === 401 || status === 403) && logout();
  }
};

// queries category list
export const getCategories = async () => {
  try {
    return await apiClient.get('/category');
  } catch (exception) {
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

// queries consultants list within a especific category
export const getConsultantsWithinCategory = async (categoryName) => {
  try {
    return await apiClient.get(`/category/${categoryName}`);
  } catch (exception) {
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

// create open appointments
export const setOpenAppointments = async (openAppointmentsList) => {
  try {
    return await apiClient.post('/appointment', openAppointmentsList);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

// get existing appointments
export const getAppointmentsForConsultant = async (consultantId) => {
  try {
    return await apiClient.get(`/appointment/${consultantId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

export const deleteOneAppointmentById = async (appointmentId) => {
  try {
    return await apiClient.delete(`/appointment/${appointmentId}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      message: exception.response.data,
    };
  }
};

export const getAppointmentsForConsultantsByDate = async (date) => {
  try {
    return await apiClient.get(`/appointment/date/${date}`);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      message: exception.response.data,
    };
  }
};
