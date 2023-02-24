import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// User class that contains functions used to perform api network request on various trade / market related functionalities
export class Trade {
  // Get trades performed by a user
  getTrades(token, num_trades_per_call, job_id = null, lek_timestamp = null) {
    let data = {};
    if (lek_timestamp === null && job_id === null) {
      data = {
        num_trades_per_call: num_trades_per_call,
      };
    } else if (lek_timestamp === null) {
      data = {
        num_trades_per_call: num_trades_per_call,
        job_id: job_id,
      };
    } else if (job_id === null) {
      data = {
        num_trades_per_call: num_trades_per_call,
        LEK_timestamp: lek_timestamp,
      };
    } else {
      data = {
        num_trades_per_call: num_trades_per_call,
        job_id: job_id,
        LEK_timestamp: lek_timestamp,
      };
    }
    return axios
      .get(`${API_URL}/get-trades`, {
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
