import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { getAll, search, update } from "./BooksAPI";
import Book from "./components/Book";

const Search = () => {
	const [books, setBooks] = useState([])
	const [query, setQuery] = useState("")
	const updateQuery = (query) => {
		setQuery(query.trim());
	};
useEffect(()=>{
        const getBooks= async ()=>{
         const books = await BooksAPI.getAll();
          setBooks(books);
        }; 
        getBooks();
    },[]);
	
	const updateShelf = (clickedObject) => {
		let index = books.findIndex(book => book.id === clickedObject.id);
		setBooks(books[index], clickedObject.shelf);
	}
	return (
		<div className="app">
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							onChange={(e) => { updateQuery(e.target.value) }}
							type="text"
							value={query}
							placeholder="Search by title, author, or ISBN"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{query !== "" && books.filter((book) =>
							book.title.toLowerCase().includes(query.toLowerCase())).map((book) =>
								<li key={book.id}><Book book={book} updateShelf={updateShelf} /></li>)
						}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Search;

