import React from "react";
import "./App.css";
import SearchResults from "./SearchResults";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      books: ""
    };
  }

  inputSearch = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  submitSearch = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then(result => {
        this.setState({ books: result.data.items, input: "" });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <div class="title">Bookfinder</div>
            <form onSubmit={this.submitSearch} class="search">
              <input
                value={this.state.input}
                onChange={this.inputSearch}
                placeholder="Type a book name"
              />
              <button>Search</button>
            </form>
            {this.state.books ? <SearchResults books={this.state.books} /> : null}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
