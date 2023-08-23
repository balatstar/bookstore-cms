import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksState = useSelector(state => state.books);

  const handleDelete = (bookId) => {
    dispatch(removeBook({ item_id: bookId }));
  };

  return (
    <div className="book-list">
      {booksState.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title} by {book.author}</h3>
          <button onClick={() => handleDelete(book.item_id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
