import React from 'react'
import Book from './Book'

const BookShelf = ({title, filter, books, shelfChanger}) => {
	
    const filteredBooks = books.filter((book) => {
		return book.shelf === filter
   });
  return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				
			<ol className="books-grid">
					{filteredBooks.map((book) =>
						<li key={book.id}><Book book={book} shelfChanger={shelfChanger} /></li>
					)}
				</ol>
			</div>
		</div>

	)
}

export default BookShelf