import { configureStore } from '@reduxjs/toolkit';
import getDataReducer from './components/organisms/newsSlice';


export default configureStore({
  reducer: {
    news: getDataReducer,
  }
});
