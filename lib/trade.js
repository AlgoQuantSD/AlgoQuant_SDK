import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// User class that contains functions used to perform api network request on various trade / market related functionalities
export class Trade {
  // Get trades performed by a user
  getTrades(token, numTrades, lastIndexTrade = null) {
    let data = {};
    if (lastIndexTrade != null) {
      data = {
        num_trades_per_call: numTrades,
        LastEvaluatedKey: lastIndexTrade,
      };
    } else {
      data = { num_trades_per_call: numTrades };
    }
    return axios
      .get(`${API_URL}/get-trades`, {
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
