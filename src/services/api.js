import axios from "axios";

const apiKey = "YcsxZITUsrmvJrwspQJ2dg9Z0pro5vM1Vf2DW33V";

const baseURL = "https://developer.nps.gov/api/v1";

async function getParksByActivity(query) {
  try {
    if (query === "") {
      return [];
    }
    const response = await axios.get(`${baseURL}/activities/parks?id=${query},&sort&api_key=${apiKey}`);
    if (response.data.total === "0") {
      return [];
    }
    return response.data.data[0].parks;
  } catch (err) {
    throw err;
  }
}

async function getParksByState(query) {
  try {
    if (query === "") {
      return [];
    }
    const response = await axios.get(`${baseURL}/activities/parks?id=${query},&sort&api_key=${apiKey}`);
    if (response.data.total === "0") {
      return [];
    }
    return response.data.data[0].parks;
  } catch (err) {
    throw err;
  }
}

async function getParkInfo(code) {
  try {
    const response = await axios.get(`${baseURL}/parks?parkCode=${code}&api_key=${apiKey}`);
    return response;
  } catch (err) {
    throw err;
  }
}

export { getParksByActivity, getParksByState, getParkInfo };