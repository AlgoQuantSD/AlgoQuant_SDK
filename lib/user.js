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
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // get a user's list of investors
  getInvestorList(token) {
    return axios
      .get(`${API_URL}/get-investor-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // get a user's list of jobs
  getJobList(token, status, investor_id = null, lek_job_id = null) {
    let data = {};
    if (investor_id === null && lek_job_id === null) {
      data = {
        status: status,
      };
    } else if (investor_id === null) {
      data = {
        status: status,
        LEK_job_id: lek_job_id,
      };
    } else if (lek_job_id === null) {
      data = {
        status: status,
        investor_id: investor_id,
      };
    } else {
      data = {
        status: status,
        investor_id: investor_id,
        LEK_job_id: lek_job_id,
      };
    }

    return axios
      .get(`${API_URL}/get-job-list`, {
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
