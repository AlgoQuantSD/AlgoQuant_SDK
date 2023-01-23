import { User } from "./user";

const user = new User();

export class AlgoQuant {
  constructor(token) {
    this.token = token;
  }
  getUser() {
    return user.getUser(this.token);
  }
  resetBalance(data) {
    return user.resetBalance(this.token, data);
  }
}
