import axios from "axios";
import {IUser} from "src/models/IUser";

export default class UserService {
   static async getUsers(): Promise<IUser[]> {
      return axios.get<IUser[]>('./users.json').then(res => res.data)
   }
}
