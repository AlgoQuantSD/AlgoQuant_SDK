import axios from "axios";
export class User {
  getUser(token) {
    const API_URL =
      "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";
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
}
