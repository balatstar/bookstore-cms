import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  const [bookStates, setBookStates] = useState(
    books.map(() => ({ isDeleted: true })),
  );

  const handleDelete = (index) => {
    const updatedStates = [...bookStates];
    updatedStates[index].isDeleted = false;
    setBookStates(updatedStates);
  };

  return (
    <div className="book-list">
      {books.map((book, index) =>
        bookStates[index].isDeleted ? (
          <Book
            key={book.id} // Use a unique identifier for each book
            title={book.title}
            author={book.author}
            onDelete={() => handleDelete(index)}
          />
        ) : null,
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Use an appropriate data type for the ID
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
