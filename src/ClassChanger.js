import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ClassChanger extends Component {

  render () {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf}
          onChange={(e) => this.props.onChangeBookshelf(
            this.props.book, e.target.value)
        }>
          <option value="none" disabled>Move to...</option>
          {this.props.bookshelves.map( (bookshelf) => (
            <option key={bookshelf.shelf} value={bookshelf.shelf}>
              {bookshelf.shelfTitle}
            </option>))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

ClassChanger.propTypes = {
  book: PropTypes.object.isRequired,
  bookshelves: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired
}

export default ClassChanger