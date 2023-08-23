import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const generateItemId = () => uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: generateItemId(), title, author, category: '',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="createbook" onSubmit={handleSubmit}>
      <h2>Add new book</h2>
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
        Submit
      </button>
    </form>
  );
}

export default BookForm;
