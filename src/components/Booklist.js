import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state.books);

  const handleDelete = (itemId) => {
    dispatch(removeBookFromApi(itemId));
  };

  return (
    <div className="book-list">
      {Object.keys(booksState).map((itemId) => {
        const book = booksState[itemId][0];
        return (
          <div key={itemId}>
            <h3>
              {book.title}
              &nbsp;by&nbsp;
              {book.author}
            </h3>
            <button type="button" onClick={() => handleDelete(itemId)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
