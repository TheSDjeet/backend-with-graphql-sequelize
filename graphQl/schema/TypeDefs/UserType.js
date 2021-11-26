const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

//what user want(datatype)//typeDef
const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

module.exports = UserType;
