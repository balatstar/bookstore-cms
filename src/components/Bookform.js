import React from 'react';

function Bookform() {
  return (
<form className="createbook">
  <h2>Add new book</h2>
  <input type="text" name="title" id="title" placeholder="Title" />
  <input type="text" name="author" id="author" placeholder="Author" />
  <button type="submit" id="createbook">Submit</button>
</form>
)
};

export default Bookform;