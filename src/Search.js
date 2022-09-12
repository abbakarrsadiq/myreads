import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { getAll, search, update } from "./BooksAPI";
import Book from "./components/Book";

const Search = () => {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([])

	const handleChange = (event) => {
		setQuery(event.target.value.trim());
        event.preventDefault(); 
	const lookup = async () => {
		const res = await BooksAPI.search(query);
		if (res === books.error) 
		{ console.log("res", res)
		return setBooks([]) }
		console.log("res", res) 
        return setBooks(res)
            }; lookup();
	};
  const shelfChanger = (book, shelf) => {
		shelf = book.shelf
		const update = async () => {
		await BooksAPI.update(book, shelf); };
		update();
		}
	 
	return (
		<div className="app">
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							onChange={handleChange}
							type="text"
							value={query}
							placeholder="Search by title, author, or ISBN"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{query !== "" && books.filter((book) => book.title.toLowerCase().includes(query))
						.map((book) => <li key={book.id}><Book book={book} shelfChanger={shelfChanger} /></li>)}
				</ol>
				</div>
			</div>
		</div>
	)
}

export default Search;

