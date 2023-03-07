import { Trade } from "./trade";
import { User } from "./user";
import { Stock } from "./stock";
import { Job } from "./job";
import { Investor } from "./investor";

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
    // Create new Job Object
    this.job = new Job();
    // Create new Investor Object
    this.investor = new Investor();

    this.token = token;
  }
  // Wrapper functions for all User object functions. Uses the token from the client.
  getUser() {
    return this.user.getUser(this.token);
  }
  resetBalance(data) {
    return this.user.resetBalance(this.token, data);
  }
  getPerformance(time_frame, job_id = null) {
    return this.user.getPerformance(this.token, time_frame, job_id);
  }

  // Wrapper functions for all Investor object functions.
  getInvestorList() {
    return this.investor.getInvestorList(this.token);
  }

  getInvestor(investor_id) {
    return this.investor.getInvestor(this.token, investor_id);
  }

  deleteInvestor(investor_id) {
    return this.investor.deleteInvestor(this.token, investor_id);
  }
  // Wrapper functions for all Trade object functions. Uses the token from the client.
  getTrades(num_trades_per_call, job_id = null, lek_timestamp = null) {
    return this.trade.getTrades(
      this.token,
      num_trades_per_call,
      job_id,
      lek_timestamp
    );
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

  // Wrapper function for all Job object functins. Uses the token from the client
  getJobList(status, investor_id = null, lek_job_id = null) {
    return this.job.getJobList(this.token, status, investor_id, lek_job_id);
  }

  stopJob(job_id) {
    return this.job.stopJob(this.token, job_id);
  }
  getJob(job_id) {
    return this.job.getJob(this.token, job_id);
  }
}
