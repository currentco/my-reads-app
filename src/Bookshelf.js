import React, { Component } from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {

  render () {

  const { books, shelfTitle, shelf, bookshelves } = this.props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter((book) => (book.shelf === shelf))
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      onChangeBookshelf={this.props.onChangeBookshelf}
                      bookshelves={bookshelves}
                  />
                  </li>
          ))}
        </ol>
      </div>
    </div>
  )}
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
  bookshelves: PropTypes.array.isRequired
};

export default Bookshelf