import axios from "axios";

export class AlgoQuant {


    constructor(){
        console.log("Constructor")
    }


    getJobs();
    getInvestors(); 
    

    apiTest(){
        const API_URL =
        "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

        axios.get(`${API_URL}/test-auth`).then(
          (response) => {
            var result = response.data;
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        )
      };
    }
