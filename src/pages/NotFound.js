import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function NotFound() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <div>404 - Not Found!<br/>
        <Link to="/">
          Go Home
        </Link>
      </div>
    </Grid>
  );
}

export default NotFound;