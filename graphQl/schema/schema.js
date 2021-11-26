const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

var db = require("../../models");

const {
  USER_LIST,
  USER_LIST2,
  USER_DETAILS,
  USER_COMMUNICATION,
} = require("../resolvers/Quaries/UserResolver");

const {
  USER_ADD,
  USER_UPDATE,
  DELETE_USER,
} = require("../resolvers/Mutations/AddUser");

//what user want(actual query)
const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    //graphQl be like er theke besi query egole ekta jhater error debo 📍
    userdemo: USER_LIST,
    userDetails: USER_DETAILS,
    sample: USER_COMMUNICATION,
  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser: USER_ADD,
    userUpdate: USER_UPDATE,
    deleteUser: DELETE_USER,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
