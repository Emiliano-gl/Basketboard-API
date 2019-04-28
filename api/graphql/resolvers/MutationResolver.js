let data = [];

export default {
  Mutation: {
    addUser(_, { newUserInput }) {
      newUserInput.id = Date.now();
      newUserInput.username = newUserInput.username.toLowerCase();
      data.push(newUserInput);
      return newUserInput;
    }
  },
  Query: {
    getUsers() {
      return data;
    },
    getUserByUsername(_, { username }) {
      username = username.toLowerCase();
      const user = data.filter(user => user.username == username);
      return user[0];
    }
  }
};
