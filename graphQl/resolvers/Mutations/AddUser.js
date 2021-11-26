var db = require("../../../models/");
const User = db.users;
const graphql = require("graphql");
const { GraphQLList, GraphQLInt, GraphQLString } = graphql;

const UserType = require("../../schema/TypeDefs/UserType");
const StatusType = require("../../schema/TypeDefs/UpdateStatus");

let USER_ADD = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
  //   resolve(parent, args) {
  //     User.create({
  //       id: args.id,
  //       userName: args.userName,
  //       email: args.email,
  //       gender: args.gender,
  //     });
  //     return args;
  //   },

  resolve: async (parent, args) => {
    let data = new User({
      userName: args.userName,
      email: args.email,
      gender: args.gender,
      age: args.age,
    });
    await data.save();
    return data;

    // await User.create({
    //   id: args.id,
    //   userName: args.userName,
    //   email: args.email,
    //   gender: args.gender,
    //   age: args.age,
    // });
    // return args;
  },
};

let USER_UPDATE = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
  },

  resolve: async (parent, args) => {
    await User.update(
      {
        userName: args.userName,
        email: args.email,
        gender: args.gender,
        age: args.age,
      },
      {
        where: {
          id: args.id,
        },
      }
    );
    return {
      success: true,
      message: "Updated Successfully",
      error: "",
    };
  },
};

let DELETE_USER = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    await User.destroy({
      where: {
        id: args.id,
      },
    });
    return {
      success: true,
      message: "Deleted Successfully",
      error: "",
    };
  },
};

module.exports = { USER_ADD, USER_UPDATE, DELETE_USER };
