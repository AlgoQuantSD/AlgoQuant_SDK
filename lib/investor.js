import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// Investor class that contains functions used to perform api network request on various investor related functionalities
export class Investor {
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

  // get an investor's information using its assigned id
  getInvestor(token, investor_id) {
    let data = {
      investor_id: investor_id,
    };

    return axios
      .get(`${API_URL}/get-investor`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // delete an investor using its assigned id
  deleteInvestor(token, investor_id) {
    let body = {
      investor_id: investor_id,
    };
    return axios
      .patch(`${API_URL}/delete-investor`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // create an investor
  createInvestor(
    token,
    assets,
    indicators,
    image_id,
    investor_name,
    loss_stop,
    frequency,
    profit_stop,
    type
  ) {
    let body = {
      assets_to_track: assets,
      indicators: indicators,
      image_id: image_id,
      investor_name: investor_name,
      loss_stop: loss_stop,
      frequency: frequency,
      profit_stop: profit_stop,
      type: type,
    };
    return axios
      .post(`${API_URL}/create-investor`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
}
