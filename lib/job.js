import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// Job class that contains functions used to perform api network request on various job related functionalities
export class Job {
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
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }

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
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }

  getJob(token, job_id) {
    let data = {
      job_id: job_id,
    };

    return axios
      .get(`${API_URL}/get-job`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }

  createJob(token, init_investment, investor_id, investor_name) {
    let body = {
      initial_investment: init_investment,
      investor_id: investor_id,
      name: investor_name,
    };

    return axios
      .post(`${API_URL}/create-job`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`${err.response.status}, ${err.response.data.message}`);
      });
  }
}
