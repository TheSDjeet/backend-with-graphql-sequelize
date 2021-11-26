const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const Test = new GraphQLObjectType({
  name: "test",
  fields: () => ({
    data: { type: GraphQLString },
  }),
});

module.exports = Test;
