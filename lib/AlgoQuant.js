import { Trade } from "./trade";
import { User } from "./user";
import { Stock } from "./stock";

// AlgoQuant class is the Driver class that will be used on the client side to invoke all api request
export class AlgoQuant {
  // Take in the token from the client and use
  constructor(token) {
    // Create new User object
    this.user = new User();
    // Create new Trade object
    this.trade = new Trade();
    // Create new Stock object
    this.stock = new Stock();

    this.token = token;
  }
  // Wrapper functions for all User object functions. Uses the token from the client.
  getUser() {
    return this.user.getUser(this.token);
  }
  resetBalance(data) {
    return this.user.resetBalance(this.token, data);
  }
  getPerformance(time_frame) {
    return this.user.getPerformance(this.token, time_frame);
  }

  // Wrapper functions for all Trade object functions. Uses the token from the client.
  getTrades(numTrades, lastIndexTrade = null) {
    return this.trade.getTrades(this.token, numTrades, lastIndexTrade);
  }

  // Wrapper functions for all Stock object functions. Uses the token from the client.
  searchStock(input) {
    return this.stock.searchStocks(this.token, input);
  }

  getGraphData(ticker, timeframe) {
    return this.stock.getGraphData(this.token, ticker, timeframe);
  }

  getStockInfo(ticker) {
    return this.stock.getStockInfo(this.token, ticker);
  }
}
