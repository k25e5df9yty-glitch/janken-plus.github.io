import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { increment } from './features/counter/counterSlice';

export { increment };

const store = configureStore({
  reducer: { counter: counterReducer }
});

export default store;
