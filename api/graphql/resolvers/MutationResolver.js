import User from "../../models/UserModel";

export default {
  Mutation: {
    addUser(_, { newUserInput }) {
      const { username, password } = newUserInput;

      if (User.find({ username })) return;

      const newUser = new User({ username, password });
      newUser.save();
      return newUserInput;
    }
  }
};
