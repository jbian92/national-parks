import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import { Grid, Box, Text } from "@chakra-ui/react";
import SearchItem from "../components/SearchItem";
import Header from "../components/Header";
import * as API from "../services/api";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      query: ""
    };
  }

  updateQuery = (newValue) => {
    this.setState({
      query: newValue
    });
    this.updateParks(newValue);
  };

  updateParks = (query) => {
    if (query.trim() === "") {
      this.setState({
        parks: []
      })
    } else {
      API.getParksByState(query)
        .then((parks) => {
          this.setState({
            parks: parks
          })
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Box
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        align={"center"}
        p={5}
        my={4}
      >
        <Header />
        <Text m="3" fontSize="4xl">Search for parks by state code!</Text>
        <Text fontSize="2xl">For example, to search for parks in New Jersey, input "NJ".</Text>
        <Box p={3}>
          <SearchBar
            value={this.state.query}
            onChange={(newValue) => this.updateParks(newValue)}
            onCancelSearch={() => this.updateQuery("")}
          />
        </Box>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5} py={3}>
            {this.state.parks.map((park, index) => (
              <SearchItem park={park} key={index} />
            ))}
          </Grid>
        </Grid>
      </Box>
    );
  } 
}

export default States;