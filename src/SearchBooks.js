import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

  state = {
          query: '',
          books: []
      }

  updateQuery = (query) => {
      this.setState({ query })
      this.getBooks(query)
  }

  getBooks = (query) => {
    BooksAPI.search(query).then((books) => {
       if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          this.setState(() => {
            return {books}
          })
    } else {
      this.setState({books: [], query: ''})
      } 
    })
  }


  render () {
    const { query } = this.state
    const { bookshelves } = this.props

    return (
      <div>
       <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
       	 <div className="search-books-input-wrapper">
            <input
              className='search-books'
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        </div>
        <div className="search-books-results">
          <ol className='books-grid'>
            {this.state.books.map((book) => (
              <li key={book.id} className='book'>
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
    )
  }
}

export default SearchBooks