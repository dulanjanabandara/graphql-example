const express = require("express");
const { graphql, buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        description: String,
        price: Float
    }
`);

const root = {
  description: "Red Shoe",
  price: 42.12,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, // this gives us the shape of our data
    rootValue: root,
    graphiql: true, // enabling graphiql
  })
);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Running GraphQL server...");
});
