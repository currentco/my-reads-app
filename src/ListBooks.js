import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class ListBooks extends Component {

  render() {

  const bookshelves = this.props.bookshelves;

  return (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              {bookshelves.map((bookshelf) => (
                <li key={bookshelf.shelf}>
                  <Bookshelf
                    books={this.props.books}
                    shelfTitle={bookshelf.shelfTitle}
                    shelf={bookshelf.shelf}
                    bookshelves={bookshelves}
                    onChangeBookshelf={this.props.onChangeBookshelf}/>
                </li>
              ))}
            </div>

            <Route exact path="/" render={() => (
              <div className="open-search">
                <Link to="/search">
                   Add a book
                </Link>
              </div>
              )}
            />
          </div>
  );
}
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
  bookshelves: PropTypes.array.isRequired
}

export default ListBooks