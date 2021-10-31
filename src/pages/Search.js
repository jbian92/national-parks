import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";

class Search extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { query, updateQuery } = this.props;
    return (
      <SearchBar 
        value={query}
        onChange={(newValue) => updateQuery(newValue)}
        onCancelSearch={() => updateQuery("")}
      />
    );
  }
}

export default Search;