import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import Book from "./components/Book";
import Search from "./Search";


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

// updating the shelves

const updateShelf = (clickedObject) => {
let Index = books.findIndex((book) => book.id === clickedObject.id)
const newShelf =  books[Index].shelf = clickedObject.shelf 
console.log(clickedObject, Index, newShelf)
setBooks((prev) => [...prev, newShelf])
setBooks([...books])
}
  return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>myReads</h1>
          </div>
          <div className="list-books-content">
           <BookShelf  title="Currently Reading" filter="currentlyReading" books={books} updateShelf={updateShelf} />
           <BookShelf  title="Want to Read" filter="wantToRead" books={books} updateShelf={updateShelf} />
           <BookShelf  title="Read" filter="read" books={books} updateShelf={updateShelf} />
       </div>
       </div>
       <div className="open-search">
          <Link to="search" aria-label="Search books" className="search_link" >Add a book</Link>
       </div>
       </div>
      )
}
export default App;
