import axios from "axios";
import { getUser, User } from "./user";

const User = new User();

export class AlgoQuant {
  getUser(token) {
    return User.getUser(token);
  }
}
