var db = require("../../../models/index");
const User = db.users;
const graphql = require("graphql");
const { GraphQLList, GraphQLInt } = graphql;

//what user want(datatype)//typeDef
const UserType = require("../../schema/TypeDefs/UserType");
const Test = require("../../schema/TypeDefs/Test");

const USER_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) => {
    const { dbConfig } = parent;
    let myData = await context();
    console.log(myData);
    //console.log(parent); //rootvalue
    let data = dbConfig.users.findAll();
    return data;
  },
};

const USER_LIST2 = {
  type: new GraphQLList(UserType), //etai main
  resolve(parent, args) {
    let data = User.findAll({ where: { id: 40 } });
    return data;
  },
};

const USER_COMMUNICATION = {
  type: new GraphQLList(Test),
  resolve(parent, args) {
    let data = [{ data: "Hello world" }];
    return data;
  },
};

const USER_DETAILS = {
  type: new GraphQLList(UserType),
  // args: {
  //   id: { type: GraphQLInt },
  // },
  resolve(parent, args) {
    console.log("🕶", args);
    let data = User.findAll({});
    return data;
  },
};

module.exports = { USER_LIST, USER_LIST2, USER_DETAILS, USER_COMMUNICATION };
