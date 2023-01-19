import axios from "axios";

export class AlgoQuant {


    constructor(){
        console.log("Constructor")
    }


    getJobs();
    getInvestors(); 
    

    apiTest(token){
        const API_URL =
        "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

        axios.get(`${API_URL}/test-auth`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(
          (response) => {
            var result = response.data;
            var test_val = 10;
            console.log(result);
            console.log(test_val);
          },
          (error) => {
            console.log(error);
          }
        )
      };
    }
