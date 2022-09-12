import React from 'react'

const Book = ({book, shelfChanger}) => {
	const choosingShelf = (newShelf) => {
		shelfChanger(newShelf);
	}
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer"> 
					<select 
          defaultValue={book.shelf} 
          onChange={(e) => { choosingShelf({ 'shelf': e.target.value, 'id': book.id }) }}>
						<option value="currentlyReading" >
							Move to...
						</option>
						<option value="currentlyReading">
							Currently Reading
						</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </div>
  )
}

export default Book