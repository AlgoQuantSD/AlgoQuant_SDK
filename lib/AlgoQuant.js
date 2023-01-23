import { User } from "./user";

// AlgoQuant class is the Driver class that will be used on the client side to invoke all api request
export class AlgoQuant {
  // Take in the token from the client and use
  constructor(token) {
    // Create new User object
    this.user = new User();

    this.token = token;
  }
  // Wrapper functions for all User object functions. Uses the token from the client.
  getUser() {
    return this.user.getUser(this.token);
  }
  resetBalance(data) {
    return this.user.resetBalance(this.token, data);
  }
}
