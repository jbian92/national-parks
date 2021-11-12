import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/api";
import { Box, Button, Text, Image, Grid } from "@chakra-ui/react";
import Header from "../components/Header";

function Info() {
  const { code } = useParams();
  const [info, setInfo] = useState([]);
  const [img, setImg] = useState("");
  const [fees, setFees] = useState({});
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    API.getParkInfo(code)
      .then((info) => {
        setInfo(info.data.data[0]);
        setImg(info.data.data[0].images[0].url);
        setFees(info.data.data[0].entranceFees[0]);
        setNumber(info.data.data[0].contacts.phoneNumbers[0].phoneNumber);
        setEmail(info.data.data[0].contacts.emailAddresses[0].emailAddress);
        setAddress(info.data.data[0].addresses[0]);
      })
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
      <Header />
      <Box mt="10">
        <Text fontSize="4xl">{info.fullName}</Text>
      </Box>
      <Image
        boxSize="500px"
        objectFit="scale-down"
        loading="eager"
        src={img}
        alt={info.fullName}
      />
      <Box mb="10">
        <Text fontSize="xl">{info.description}</Text>
      </Box>
      <Box m="3" align={"left"}>
        <Text fontSize="2xl">Directions:</Text>
        <Text fontSize="xl">{info.directionsInfo}</Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5} py={3}>
        <Box m="3">
          <Text fontSize="2xl">Entrance Fees:</Text>
          <Text fontSize="xl">${fees.cost}</Text>
          <Text fontSize="xl">{fees.description}</Text>
        </Box>
        <Box m="3">
          <Text fontSize="2xl">Contact:</Text>
          <Text fontSize="xl">Phone: {number}</Text>
          <Text fontSize="xl">Email: {email}</Text>
        </Box>
        <Box m="3">
          <Text fontSize="2xl">Address:</Text>
          <Text fontSize="xl">{address.line2}</Text>
          <Text fontSize="xl">{address.city}, {address.stateCode} {address.postalCode}</Text>
        </Box>
      </Grid>
      
      <Button onClick={() => buttonOnClick()} colorScheme="teal" variant="outline">More Info</Button>
    </Box>
  );
}

export default Info;