import React from 'react';
import './App.css';
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
         <div class="title">Bookfinder</div>
         <div class="search">

         </div>
         <SearchResults />
        </div>
      </header>
    </div>
  );
}

export default App;
