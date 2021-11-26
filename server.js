const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
require("./models");
const PORT = process.env.PORT || 3000;
const { Sequelize } = require("sequelize");
var userCntrl = require("./controllers/userController");
const schema = require("./graphQl/schema/schema");
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require("./models/index");

var root = {
  accesskey: "ijhuhigerkngk",
  dbConfig: db,
};
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

//for context
const context = async (req) => {
  //test
  const host = req.headers;
  const token = "12ahuba";
  return { host, token };
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3000/graphql",
    changeOrigin: true,
  })
);

app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    rootValue: root,
    graphiql: true,
    context: () => context(req),
  }))
);

app.get("/", (req, resp) => {
  resp.send("Home page");
});

app.get("/add", userCntrl.addUser);
app.get("/crud", userCntrl.crudOperation);

app.listen(PORT, () => {
  console.log(`Listening to: http://localhost:${PORT} `);
});

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Listening to: http://localhost:${PORT} `);
//   });
// });
