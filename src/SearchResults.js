import React, { Component } from "react";
import axios from "axios";
import "./SearchResults.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ""
    };
  }
  render() {
    console.log("this.props.books: ", this.props.books);
    const books = this.props.books;
    return (
      <div>
        {books
          ? books.map(book => {
              return (
                <a key={book.id} className="book" href={book.volumeInfo.canonicalVolumeLink}>
                  <div className="title">{book.volumeInfo.title}</div>
                  {book.volumeInfo.authors ? (
                    <div className="author">{book.volumeInfo.authors.map(author => author)}</div>
                  ) : null}
                  <div className="publishedDate">{book.volumeInfo.publishedDate}</div>
                  {book.volumeInfo.imageLinks ? (
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  ) : null}
                </a>
              );
            })
          : null}
      </div>
    );
  }
}

export default SearchResults;
