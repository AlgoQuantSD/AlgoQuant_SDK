import axios from "axios";
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";
export class User {
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
}
