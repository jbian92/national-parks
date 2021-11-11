import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SearchItem(props) {
  const { park } = props;

  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      align={"center"}
      p={5}
    >
      <Box m="2">
        <Text fontSize="lg">
          {park.fullName}
        </Text>
      </Box>
      <Box m="2">
        <Link to={`/${park.parkCode}`}>
          <Button colorScheme="teal" variant="outline">More Info</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default SearchItem;