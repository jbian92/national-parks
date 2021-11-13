import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/api";
import { Text, Box } from "@chakra-ui/react";
import Header from "../components/Header";

function Webcams() {
  const { code } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    API.getWebCam(code)
      .then((info) => {
        setData(info.data.data);
      })
      .catch((err) => console.log(err));

    API.getParkInfo(code) 
      .then((info) => {
        setName(info.data.data[0].fullName);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        maxW="100%"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        align={"center"}
        p={5}
        marginTop={5}
      >
        <Header />
        <Text m={5} fontSize="4xl">{name}</Text>
        {(data.length !== 0) ? (
          <Carousel>
            {data.map((park) => (
              park.images.map((img) => (
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img.url}
                  alt={park.title}
                />
                <Carousel.Caption>
                  <p>{park.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
              ))
            ))}
          </Carousel>
        ) : (
          <>
            <Text fontSize="2xl">Sorry, we don't have any web cam images to display for this park.</Text>
          </>
        )}
      </Box>
    </>
  );
}

export default Webcams;