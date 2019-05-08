import UserModel from "../../models/UserModel";

export default {
  Query: {
    getUsers(){
      return UserModel.find();
    }
  }
};
