const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } =
  graphql;

//what user want(datatype)//typeDef
const StatusType = new GraphQLObjectType({
  name: "status",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});

module.exports = StatusType;
