import React, { Component } from "react";
import { Grid, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import * as API from "../services/api";
import Carousel from "react-bootstrap/Carousel";
import Header from "../components/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Box
        maxW="100%"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        align={"center"}
        p={5}
        marginTop={5}
      >
        <Box marginBottom={5}>
          <Header />
        </Box>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/park1.jpg"
              alt="park1"
            />
            <Carousel.Caption>
              <p>CREDIT: GETTY IMAGES</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/park2.jpg"
              alt="park2"
            />

            <Carousel.Caption>
              <p>CREDIT: GETTY IMAGES</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/park3.jpg"
              alt="park3"
            />

            <Carousel.Caption>
              <p>CREDIT: GETTY IMAGES</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/park4.jpg"
              alt="park4"
            />

            <Carousel.Caption>
              <p>CREDIT: GETTY IMAGES</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Box>
    );
  }

}

export default Home;