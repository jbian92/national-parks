import axios from "axios";

const apiKey = "YcsxZITUsrmvJrwspQJ2dg9Z0pro5vM1Vf2DW33V";

const baseURL = "https://developer.nps.gov/api/v1";

async function getParks(query) {
  try {
    const response = await axios.get(`${baseURL}/activities/parks?q=${query}&api_key=${apiKey}`);
    return response.data.data[0].parks;
  } catch (err) {
    throw err;
  }
}

export { getParks };