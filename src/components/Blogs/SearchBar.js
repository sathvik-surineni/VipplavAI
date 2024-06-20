import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; // Create and import a custom CSS file

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Form className="d-flex justify-content-center my-4 search-form">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <FormControl
          type="search"
          placeholder="Search"
          className="search-input"
          aria-label="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </Form>
  );
};

export default SearchBar;
