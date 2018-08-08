import React, { Component } from 'react'
import ClassChanger from './ClassChanger';
import PropTypes from 'prop-types';

class Book extends Component {

  render() {

    const {title, authors} = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div
              className="book-cover"
              style={{ width: 128, height: 193,
                backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")"
              }}
          >
          </div>
          <ClassChanger
            book={this.props.book}
            onChangeBookshelf={this.props.onChangeBookshelf}
            bookshelves={this.props.bookshelves}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
        { authors ? authors.join(", ") : '' }
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
  bookshelves: PropTypes.array.isRequired
};

export default Book