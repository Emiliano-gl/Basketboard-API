const { server } = require("./graphql/apolloConfig");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

server.applyMiddleware({ app, path: "/" });

app.listen(app.get("port"), () =>
  console.log(`🚀 Server on http://localhost:${app.get("port")}`)
);
