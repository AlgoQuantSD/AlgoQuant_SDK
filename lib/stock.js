import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// User class that contains functions used to perform api network request on various trade / market related functionalities
export class Stock {
  // Get trades performed by a user
  searchStocks(token, input) {
    let data = {
      search_ticker: input,
    };
    return axios
      .get(`${API_URL}/search-stocks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
  // Get graph data for a stock ticker based on the given time frame
  getGraphData(token, ticker, timeframe) {
    let data = {
      stock_ticker: ticker,
      time_frame: timeframe,
    };
    return axios
      .get(`${API_URL}/get-graph-data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
  // Get stock info of a certain ticker
  getStockInfo(token, ticker) {
    let data = {
      stock_ticker: ticker,
    };
    return axios
      .get(`${API_URL}/get-stock-info `, {
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
