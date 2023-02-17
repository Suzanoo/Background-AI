import { configureStore } from '@reduxjs/toolkit';

import imagesReducer from '../features/images/imageSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});
