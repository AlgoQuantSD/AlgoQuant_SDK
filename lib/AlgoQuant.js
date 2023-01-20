import { User } from "./user";

const user = new User();

export class AlgoQuant {
  getUser(token) {
    return user.getUser(token);
  }
}
