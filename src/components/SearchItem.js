import { Box, Button, Text } from "@chakra-ui/react";

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
        <Button colorScheme="teal" variant="outline">More Info</Button>
      </Box>
    </Box>
  );
}

export default SearchItem;