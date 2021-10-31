import axios from "axios";

const apiKey = "YcsxZITUsrmvJrwspQJ2dg9Z0pro5vM1Vf2DW33V";

const axiosInstance = axios.create({
  baseURL: "developer.nps.gov/api/v1"
});

async function getParks(query) {
  try {
    const response = await axiosInstance.get(`/activities/parks?q=${query}&api_key=${apiKey}`);
    console.log(response);
  } catch (err) {
    throw err;
  }
}

export { getParks };