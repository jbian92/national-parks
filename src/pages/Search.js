import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import { Grid } from "@chakra-ui/react";
import SearchItem from "../components/SearchItem";
import PropTypes from "prop-types";
import * as API from "../services/api";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  updateQuery = (newValue) => {
    this.props.updateQuery(newValue);
    this.updateParks(newValue);
  };

  updateParks = (query) => {
    API.getParks(query)
      .then((parks) => {
        this.setState({
          parks: parks
        })
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <SearchBar 
          value={this.props.query}
          onChange={(newValue) => this.updateParks(newValue)}
          onCancelSearch={() => this.updateQuery("")}
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={5} py={3}>
            {this.state.parks.map((park, index) => (
              <SearchItem park={park} key={index} />
            ))}
          </Grid>
        </Grid>
      </>
    );
  } 
}

export default Search;

Search.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  parks: PropTypes.array.isRequired
};