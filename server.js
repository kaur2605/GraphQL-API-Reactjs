const express = require("express");
const app = express();
const expressgraphql = require("express-graphql");
const schema = require("./grapha_schema/schema");
const cors = require("cors");

app.use(cors());
app.use(
  "/graphql",
  expressgraphql({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("server is running"));
