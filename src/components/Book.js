import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, onDelete }) => {
    return (
      <div className="book">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  };
  
Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Book;
