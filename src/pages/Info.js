import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/api";
import { Box, Button, Text } from "@chakra-ui/react";

function Info() {
  const { code } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    API.getParkInfo(code)
      .then((info) => setInfo(info.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const buttonOnClick = () => {
    window.location = info.url;
  };

  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      align={"center"}
      p={5}
      my={4}
    >
      <Box m="2">
        <Text fontSize="lg">{info.fullName}</Text>
      </Box>
      <Button onClick={() => buttonOnClick()} colorScheme="teal" variant="outline">More Info</Button>
    </Box>
  );
}

export default Info;