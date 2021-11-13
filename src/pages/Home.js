import { Box } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../components/Header";

function Home() {
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
            src="../images/park1.png"
            alt="park1"
          />
          <Carousel.Caption>
            <p>CREDIT: GETTY IMAGES</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/park2.png"
            alt="park2"
          />
          <Carousel.Caption>
            <p>CREDIT: GETTY IMAGES</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/park3.png"
            alt="park3"
          />
          <Carousel.Caption>
            <p>CREDIT: GETTY IMAGES</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/park4.png"
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

export default Home;