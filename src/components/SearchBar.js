import PropTypes from "prop-types";
import SearchBar from "material-ui-search-bar";

function Search(props) {
  const { query, updateQuery } = props;

  return (
    <SearchBar 
      value={query}
      onChange={(newValue) => updateQuery(newValue)}
      onCancelSearch={() => updateQuery("")}
    />
  );
}

export default Search;

Search.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired
};