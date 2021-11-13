import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Text, Button } from "@chakra-ui/react";

function NotFound() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <div>
        <Text fontSize="4xl">404 - Not Found!</Text><br/>
        <Link to="/">
        <Button colorScheme="teal" variant="outline">Go back to home</Button>
        </Link>
      </div>
    </Grid>
  );
}

export default NotFound;