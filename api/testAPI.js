const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

const TestApi = () => {
  axios.get(`${API_URL}/test-auth`).then(
    (response) => {
      var result = response.data;
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
};
export default TestApi;
