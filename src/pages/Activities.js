import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Box, Text } from "@chakra-ui/react";
import SearchItem from "../components/SearchItem";
import Header from "../components/Header";
import * as API from "../services/api";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Activities() {
  const classes = useStyles();
  const [activity, setActivity] = useState("");
  const [parks, setParks] = useState([]);

  const handleChange = (event) => {
    setActivity(event.target.value);
    API.getParksByActivity(event.target.value)
      .then((parks) => {
        setParks(parks)
      })
      .catch((err) => console.log(err));
  };

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
      <Text marginTop={10} marginBottom={5} fontSize="3xl">Select an activity from the dropdown list to get the national parks related to that activity.</Text>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Activity</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={activity}
          onChange={handleChange}
          label="Activity"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="09DF0950-D319-4557-A57E-04CD2F63FF42">Arts and Culture</MenuItem>
          <MenuItem value="13A57703-BB1A-41A2-94B8-53B692EB7238">Astronomy</MenuItem>
          <MenuItem value="5F723BAD-7359-48FC-98FA-631592256E35">Auto and ATV</MenuItem>
          <MenuItem value="7CE6E935-F839-4FEC-A63E-052B1DEF39D2">Biking</MenuItem>
          <MenuItem value="071BA73C-1D3C-46D4-A53C-00D5602F7F0E">Boating</MenuItem>
          <MenuItem value="A59947B7-3376-49B4-AD02-C0423E08C5F7">Camping</MenuItem>
          <MenuItem value="07CBCA6A-46B8-413F-8B6C-ABEDEBF9853E">Canyoneering</MenuItem>
          <MenuItem value="BA316D0F-92AE-4E00-8C80-DBD605DC58C3">Caving</MenuItem>
          <MenuItem value="B12FAAB9-713F-4B38-83E4-A273F5A43C77">Climbing</MenuItem>
          <MenuItem value="C11D3746-5063-4BD0-B245-7178D1AD866C">Compass and GPS</MenuItem>
          <MenuItem value="8C495067-8E94-4D78-BBD4-3379DACF6550">Dog Sledding</MenuItem>
          <MenuItem value="AE42B46C-E4B7-4889-A122-08FE180371AE">Fishing</MenuItem>
          <MenuItem value="D72206E4-6CD1-4441-A355-F8F1827466B1">Flying</MenuItem>
          <MenuItem value="1DFACD97-1B9C-4F5A-80F2-05593604799E">Food</MenuItem>
          <MenuItem value="3F3ABD16-2C52-4EAA-A1F6-4235DE5686F0">Golfing</MenuItem>
          <MenuItem value="B33DC9B6-0B7D-4322-BAD7-A13A34C584A3">Guided Tours</MenuItem>
          <MenuItem value="42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A">Hands-On</MenuItem>
          <MenuItem value="BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA">Hiking</MenuItem>
          <MenuItem value="0307955A-B65C-4CE4-A780-EB36BAAADF0B">Horse Trekking</MenuItem>
          <MenuItem value="8386EEAF-985F-4DE8-9037-CCF91975AC94">Hunting and Gathering</MenuItem>
          <MenuItem value="5FF5B286-E9C3-430E-B612-3380D8138600">Ice Skating</MenuItem>
          <MenuItem value="DF4A35E0-7983-4A3E-BC47-F37B872B0F25">Junior Ranger Program</MenuItem>
          <MenuItem value="B204DE60-5A24-43DD-8902-C81625A09A74">Living History</MenuItem>
          <MenuItem value="C8F98B28-3C10-41AE-AA99-092B3B398C43">Museum Exhibits</MenuItem>
          <MenuItem value="4D224BCA-C127-408B-AC75-A51563C42411">Paddling</MenuItem>
          <MenuItem value="0C0D142F-06B5-4BE1-8B44-491B90F93DEB">Park Film</MenuItem>
          <MenuItem value="7779241F-A70B-49BC-86F0-829AE332C708">Playground</MenuItem>
          <MenuItem value="42CF4021-8524-428E-866A-D33097A4A764">Scuba Diving</MenuItem>
          <MenuItem value="24380E3F-AD9D-4E38-BF13-C8EEB21893E7">Shopping</MenuItem>
          <MenuItem value="F9B1D433-6B86-4804-AED7-B50A519A3B7C">Skiing</MenuItem>
          <MenuItem value="3EBF7EAC-68FC-4754-B6A4-0C38A1583D45">Snorkeling</MenuItem>
          <MenuItem value="C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17">Snow Play</MenuItem>
          <MenuItem value="7C912B83-1B1B-4807-9B66-97C12211E48E">Snowmobiling</MenuItem>
          <MenuItem value="01D717BC-18BB-4FE4-95BA-6B13AD702038">Snowshoeing</MenuItem>
          <MenuItem value="AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2">Surfing</MenuItem>
          <MenuItem value="587BB2D3-EC35-41B2-B3F7-A39E2B088AEE">Swimming</MenuItem>
          <MenuItem value="94369BFD-F186-477E-8713-AE2A745154DA">Team Sports</MenuItem>
          <MenuItem value="4D06CEED-90C6-4B69-B264-32CC90B69BA6">Tubing</MenuItem>
          <MenuItem value="8A1C7B17-C2C6-4F7C-9539-EA1E19971D80">Water Skiing</MenuItem>
          <MenuItem value="0B685688-3405-4E2A-ABBA-E3069492EC50">Wildlife Watching</MenuItem>
        </Select>
      </FormControl>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5} py={3}>
          {parks.map((park, index) => (
            <SearchItem park={park} key={index} />
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Activities;