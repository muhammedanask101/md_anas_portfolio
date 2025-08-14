import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../slices/ProjectSlice';
import authReducer from '../slices/authSlice';
import contactReducer from '../slices/contactSlice';

const store = configureStore({
  reducer: {
      projects: projectReducer,
      auth: authReducer,
      contacts: contactReducer
  }
});

export default store;
