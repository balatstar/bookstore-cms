import React, { useState } from 'react';
import Book from './Book'; 

const BookList = ({ books }) => {
  const [bookStates, setBookStates] = useState(
    books.map(() => ({ isDeleted: true }))
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
            key={index}
            title={book.title}
            author={book.author}
            onDelete={() => handleDelete(index)}
          />
        ) : null
      )}
    </div>
  );
};

export default BookList;
