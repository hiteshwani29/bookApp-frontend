import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://apis.example.com/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createBook = async () => {
    try {
      const response = await axios.post('https://apis.example.com/api/books', { title, author });
      console.log(response.data);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Library</h1>

      <h2>Add a Book</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={createBook}>Add Book</button>

      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title} | <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
