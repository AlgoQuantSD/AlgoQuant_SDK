import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// User class that contains functions used to perform api network request on various trade / market related functionalities
export class Stock {
  // Get trades performed by a user
  searchStocks(token, input) {
    let data = {
      search_ticker: input,
    };
    return axios
      .get(`${API_URL}/search-stocks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
}
