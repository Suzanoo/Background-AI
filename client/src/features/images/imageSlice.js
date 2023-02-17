import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import imageService from './imageService';

// Initial state
// Actiona
// Reducer
// Slice

// ACTION:
// Fetch actions from localStorage and cast to JSON format
const images = JSON.parse(localStorage.getItem('images'));

// Initial state
const initialState = {
  images: images ? images : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Generate images
export const generateImages = createAsyncThunk(
  'images/gen',
  async (data, thunkAPI) => {
    try {
      return await imageService.generateImage(data);
    } catch (err) {
      const message =
        err.message ||
        (err.response && err.response.data && err.response.data.message) ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// REDUCER:
export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    reset: (state) => {},
  },
  // Payload lifecycle
  extraReducers: (builder) => {
    builder
      .addCase(generateImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(generateImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.images = null;
      });
  },
});

export const { reset } = imagesSlice.actions;
export default imagesSlice.reducer;
