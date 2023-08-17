import React from 'react';
import BookList from './Booklist';
import Bookform from './Bookform';

const Home = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
  ];

  return (
    <div className="wrapper">
      <h2>Book List</h2>
      <BookList books={books} />
      <Bookform />
    </div>
  );
};

export default Home;
