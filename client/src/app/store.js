import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../slices/ProjectSlice';
import authReducer from '../slices/authSlice';

const store = configureStore({
  reducer: {
      projects: projectReducer,
      auth: authReducer
  }
});

export default store;
