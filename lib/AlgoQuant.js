import axios from "axios";

export class AlgoQuant {
  apiTest(token) {
    const API_URL =
      "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

    axios
      .get(`${API_URL}/test-auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          var result = response.data;
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
