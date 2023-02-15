import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// User class that contains functions used to perform api network request on various user related functionalities
export class User {
  // Get the user information
  getUser(token) {
    {
      return axios
        .get(`${API_URL}/get-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err) => {
          throw new Error(`code: ${err}, message: ${err}`);
        });
    }
  }

  // Disconnect algoquant account from Alpaca account
  resetBalance(token, keys) {
    return axios
      .patch(`${API_URL}/reset-balance`, keys, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  getPerformance(token, timeframe) {
    let data = {
      time_frame: timeframe,
    };
    return axios
      .get(`${API_URL}/get-performance`, {
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
