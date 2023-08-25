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
          <div className='bookItem' key={itemId}>
            <div className='bookDetails'>
              <div className='bookCategory'>Fiction</div>
              <h3 className='bookTitle'>{book.title}</h3>
              <div className='bookAuthor'>{book.author}</div>
              <div className='bookButtons'>
                <button type="button">
                  Comments
                </button>
                <button type="button" onClick={() => handleDelete(itemId)}>
                  Remove
                </button>
                <button type="button">
                  Edit
                </button>
              </div>
            </div>
            <div className='bookProgress'>
              <div className='progressGraph'></div>
              <div className='progressNum'>
                <div className='progressPercent'>64%</div>
                <div className='progressLabel'>Completed</div>
              </div>
            </div>
            <div className='bookChapter'>
              <div className='chapterHeading'>Current Chapter</div>
              <div className='chapterCurrent'>Introduction</div>
              <button type="button" className='chapterButton'>Update Progress</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
