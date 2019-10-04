import React, { Component } from "react";
import axios from "axios";
import "./SearchResults.css";
require("dotenv").config();

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      books: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_API_KEY}`
      )
      .then(result => {
        console.log("result: ", result.data.items);
        this.setState({ books: result.data.items });
      });
  }
  render() {
    return (
      <div>
        {this.state.books
          ? this.state.books.map(book => {
              return (
                <div key={book.id} className="book">
                  <div className="title">{book.volumeInfo.title}</div>
                  <div className="author">{book.volumeInfo.authors.map(author => author)}</div>
                  <div className="publishedDate">{book.volumeInfo.publishedDate}</div>
                  {book.volumeInfo.imageLinks ? (
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default SearchResults;
