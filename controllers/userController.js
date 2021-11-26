var db = require("../models");

var Users = db.users;

var addUser = async (req, resp) => {
  console.log(Users);
  //   let data = await Users.build({
  //     userName: "Shubhajeet",
  //     email: "test@test.com",
  //   });
  //   console.log(data);
  //   data.save();
  let data = await Users.create({
    userName: "sum",
    email: "sum1@sum1.com",
  });

  console.log(data.dataValues);

  let response = {
    data: "ok",
  };
  resp.status(200).json(response);
};

var crudOperation = async (req, resp) => {
  //insert data
  let data = await Users.create({
    userName: "tanmoy",
    email: "tan@tan.com",
  });

  //find data

  //   let data = await Users.findOne({
  //     where: {
  //       id: 3,
  //     },
  //   });

  //update data
  //   let data = await Users.update(
  //     {
  //       userName: "Tanmoy",
  //     },
  //     {
  //       where: {
  //         id: 2,
  //       },
  //     }
  //   );

  //delete data

  //   let data = await Users.destroy({
  //     where: { id: 2 },
  //   });

  //bulk insert

  //   let data = await Users.bulkCreate([
  //     { userName: "Meera das", email: "meera@meera.com", age: 48 },
  //     { userName: "chirokumar", email: "c@c.com", age: 24, gender: "male" },
  //   ]);

  let response = {
    data: data,
  };
  resp.status(200).json(response);
};

module.exports = { addUser, crudOperation };
