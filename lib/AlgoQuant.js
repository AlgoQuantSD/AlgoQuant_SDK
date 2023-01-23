import { User } from "./user";

// Create new User object
const user = new User();

// AlgoQuant class is the Driver class that will be used on the client side to invoke all api request
export class AlgoQuant {
  // Take in the token from the client and use
  constructor(token) {
    this.token = token;
  }
  // Wrapper functions for all User object functions. Uses the token from the client.
  getUser() {
    return user.getUser(this.token);
  }
  resetBalance(data) {
    return user.resetBalance(this.token, data);
  }
}
