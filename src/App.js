import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {

  state = {
    books : []
  }

  bookshelves = [
    {shelf: "currentlyReading", shelfTitle: "Currently Reading"},
    {shelf: "wantToRead",       shelfTitle: "Want To Read"},
    {shelf: "read",             shelfTitle: "Have Read"}
  ];

  fetchBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  componentDidMount() {
      this.fetchBooks();
  }

  moveBook(book, newShelf, response) {
      book.shelf = newShelf;
      this.setState((prevState) => (
        {
          books: prevState.books
          .filter((prevBook) => (prevBook.id !== book.id))
          .concat([book])
        }
      ))
    }

  changeBookshelf(book, newShelf) {
    BooksAPI.update(book, newShelf)
      .then((response) => {
          this.moveBook(book, newShelf, response);
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onChangeBookshelf={ (book, shelf) => {
              this.changeBookshelf(book, shelf)} }
            bookshelves={this.bookshelves}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            onChangeBookshelf={ (book, shelf) => {
              this.changeBookshelf(book, shelf)}}
            bookshelves={this.bookshelves}
            booksInDB={this.state.books}
            fetchBooks={this.fetchBooks}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp