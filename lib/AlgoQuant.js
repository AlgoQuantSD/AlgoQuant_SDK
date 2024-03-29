import { Trade } from "./trade";
import { User } from "./user";
import { Stock } from "./stock";
import { Job } from "./job";
import { Investor } from "./investor";
import { Backtest } from "./backtest";

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
    // Creat new Backtest object
    this.backtest = new Backtest();

    this.token = token;
  }

  // function to update the class member token variable
  setAccessToken(token) {
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

  createInvestor(
    assets,
    indicators,
    image_id,
    investor_name,
    loss_stop,
    frequency,
    profit_stop,
    type
  ) {
    return this.investor.createInvestor(
      this.token,
      assets,
      indicators,
      image_id,
      investor_name,
      loss_stop,
      frequency,
      profit_stop,
      type
    );
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

  createJob(init_investment, investor_id, investor_name) {
    return this.job.createJob(
      this.token,
      init_investment,
      investor_id,
      investor_name
    );
  }

  // Wrapper function for all Backtest object functins. Uses the token from the client

  // function to create backtest
  createBacktest(
    investor_id,
    start_time,
    end_time,
    backtest_name,
    init_investment
  ) {
    return this.backtest.createBacktest(
      this.token,
      investor_id,
      start_time,
      end_time,
      backtest_name,
      init_investment
    );
  }

  // get backtest based on the backtest id
  getBacktest(backtest_id) {
    return this.backtest.getBacktest(this.token, backtest_id);
  }

  // get list of backtest from a users account
  getBacktestList(num_backtests_per_call, lek_backtest_id = null) {
    return this.backtest.getBacktestList(
      this.token,
      num_backtests_per_call,
      lek_backtest_id
    );
  }
}
