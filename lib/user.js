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
          throw new Error(
            `${err.response.status}, ${err.response.data.message}`
          );
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
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }

  // Get a users account balance history and job performance
  getPerformance(token, timeframe, job_id = null) {
    let data = {};
    if (job_id === null) {
      data = {
        time_frame: timeframe,
      };
    } else {
      data = {
        time_frame: timeframe,
        job_id: job_id,
      };
    }
    return axios
      .get(`${API_URL}/get-performance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }
}
