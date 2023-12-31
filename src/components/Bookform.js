import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi, fetchBooks } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const generateItemId = () => uuidv4();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      item_id: generateItemId(),
      title,
      author,
      category: 'Fiction',
    };

    // Dispatch
    try {
      await dispatch(addBookToApi(bookData));
      setTitle(''); // Clear the title field
      setAuthor(''); // Clear the author field
      dispatch(fetchBooks());
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Error adding book. Please try again later.');
    }
  };

  return (
    <form className="createbook" onSubmit={handleSubmit}>
      <h2>Add new book</h2>
      <div className="formAddBook">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" id="createbook">
          Add Book
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </form>
  );
}

export default BookForm;
