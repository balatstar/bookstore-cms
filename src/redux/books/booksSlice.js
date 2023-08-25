import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookData) => {
  try {
    const response = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books',
      bookData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const removeBookFromApi = createAsyncThunk(
  'books/removeBookFromApi',
  async (item_id) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books/${item_id}`
      );
      return item_id;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { item_id, ...bookData } = action.payload;
      state[item_id] = [bookData];
    },
    removeBook: (state, action) => {
      delete state[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addBookToApi.fulfilled, (state, action) => {
      const { item_id, ...bookData } = action.payload;
      state[item_id] = [bookData];
    });
    builder.addCase(removeBookFromApi.fulfilled, (state, action) => {
      delete state[action.payload];
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
