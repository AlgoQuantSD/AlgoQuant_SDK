import axios from "axios";

// Invoke URL from aws gateway
const API_URL =
  "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Development";

// Backtest class with all the functions involving backtest related functionality api
export class Backtest {
  // get information related to a certain backtest based on backtest id
  getBacktest(token, backtest_id) {
    let data = {
      backtest_id: backtest_id,
    };

    return axios
      .get(`${API_URL}/get-backtest`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // get a user's list of backtest in a paginiated manner
  getBacktestList(token, num_backtests_per_call, lek_backtest_id = null) {
    let data = {};
    if (lek_backtest_id !== null) {
      data = {
        num_backtests_per_call: num_backtests_per_call,
        LEK_backtest_id: lek_backtest_id,
      };
    } else {
      data = {
        num_backtests_per_call: num_backtests_per_call,
      };
    }

    return axios
      .get(`${API_URL}/get-backtest-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: data,
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }

  // create a backtest based on user input and investor id
  createBacktest(
    token,
    investor_id,
    start_time,
    end_time,
    backtest_name,
    init_investment
  ) {
    let body = {
      investor_id: investor_id,
      start_time: start_time,
      end_time: end_time,
      backtest_name: backtest_name,
      initial_investment: init_investment,
    };

    return axios
      .post(`${API_URL}/create-backtest`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(`code: ${err}, message: ${err}`);
      });
  }
}
