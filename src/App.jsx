import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching the books data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <img src={book.imageLinks.thumbnail}/>
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-description">{book.description}</p>
            <p className="book-authors"><strong>Authors:</strong> {book.authors.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
