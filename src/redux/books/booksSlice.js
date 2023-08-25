import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books',
  );
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookData) => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books',
    bookData,
  );
  return response.data;
});

export const removeBookFromApi = createAsyncThunk(
  'books/removeBookFromApi',
  async (itemId) => {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSvbCcjl2BEaoMuEt5BN/books/${itemId}`,
    );
    return itemId;
  },
);

const initialState = {};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { itemId, ...bookData } = action.payload;
      state[itemId] = [bookData];
    },
    removeBook: (state, action) => {
      delete state[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload
    );
    builder.addCase(addBookToApi.fulfilled, (state, action) => {
      const { itemId, ...bookData } = action.payload;
      state[itemId] = [bookData];
    });
    builder.addCase(removeBookFromApi.fulfilled, (state, action) => {
      delete state[action.payload];
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
