import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// Job class that contains functions used to perform api network request on various job related functionalities
export class Job {
  // Disconnect algoquant account from Alpaca account
  stopJob(token, job_id) {
    let body = {
      job_id: job_id,
    };
    return axios
      .put(`${API_URL}/stop-job`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
}
