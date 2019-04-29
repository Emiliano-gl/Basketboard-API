import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(db => console.log("DB is conected"))
  .catch(err => console.error(err));
