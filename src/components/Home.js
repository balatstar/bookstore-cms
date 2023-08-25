import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './Booklist';
import Bookform from './Bookform';
import './Home.css';

const Home = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-wrapper">
      <BookList books={books} />
      <Bookform />
    </div>
  );
};

export default Home;
