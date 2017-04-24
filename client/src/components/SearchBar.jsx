import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form className="input-group">
          <input
            placeholder="Search a walkthrough video"
            className="form-control" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;