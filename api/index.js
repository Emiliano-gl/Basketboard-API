if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { server } from "./graphql/apolloConfig";
import express from "express";
require("./Database");

const app = express();

app.set("port", process.env.PORT || 3000);

server.applyMiddleware({ app, path: "/" });

app.listen(app.get("port"), () =>
  console.log(`🚀 Server on http://localhost:${app.get("port")}`)
);
