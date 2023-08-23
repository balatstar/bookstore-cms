import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './Booklist';
import Bookform from './Bookform';

const Home = () => {
  const books = useSelector(state => state.books);

  return (
    <div className="wrapper">
      <h2>Book List</h2>
      <BookList books={books} />
      <Bookform />
    </div>
  );
};

export default Home;
