import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";

function App() {
  const [books, setBooks] = useState([])
// getting data from the API
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
// updating the shelf
 const shelfChanger = (book, shelf) => {
   shelf = book.shelf
   const update= async () => {
     const res = await BooksAPI.update(book, shelf);
     console.log(res)
     setBooks(books.concat([res]));
// making another API call to update the UI
 const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
   }; 
   update();
  }

  return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>myReads</h1>
          </div>
          <div className="list-books-content">
           <BookShelf  title="Currently Reading" filter="currentlyReading" books={books} shelfChanger={shelfChanger} />
           <BookShelf  title="Want to Read" filter="wantToRead" books={books} shelfChanger={shelfChanger} />
           <BookShelf  title="Read" filter="read" books={books} shelfChanger={shelfChanger} />
       </div>
       </div>
       <div className="open-search">
          <Link to="search" aria-label="Search books" className="search_link" >Add a book</Link>
       </div>
       </div>
      )
}
export default App;
