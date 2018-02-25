import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar-container'>
        <input className='search-bar' type='text' placeholder='Search' />
      </div>
    );
  }
}

export default SearchBar;