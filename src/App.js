import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState(['Paraíso']);
  const [message, setMessage] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  }

  const removeAllBooks = () => {
    setBooks([]);
    setMessage('Nenhum resultado.');
  }

  return (
    <div>
      <div data-testid="book-list">
        <ul>
          { books.length > 0 ? 
              books.map(book => 
                <li key={book}>{book}</li>  
              ) 
              : null
          }
        </ul>  
        { message ? <p>{message}</p> : null}
      </div>
      <button onClick={() => addBook('O inferno de Dante')}>Adicionar Livro</button>
      <button onClick={removeAllBooks}>Remover Livro</button>
    </div>
  );
}

export default App;
