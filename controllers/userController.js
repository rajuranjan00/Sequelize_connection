const { sequelize, User } = require('../models');
const { Sequelize } = require('sequelize');



var addUser = async (req, res) => {
  try {
    await sequelize.sync(); // Sync the models with the database
    // const jane = User.build({ firstName: "Raju", lastName: "Ranjan" });
    const jane = await User.create({ firstName: "Raju", lastName: "Ranjan" });    /// create method-- both save and create database
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Raju"



    // jane.set({
    //     firstName: "Manisha",
    //     lastName: "Gaikwad"
    //   });

    // await jane.update({ firstName: "Shivam" , lastName: "Pathak" });


    await jane.save(); // Save the instance to the database
    console.log('Jane was saved to the database!');
    await jane.destroy();
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

var getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
}


var getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id
    }
  });

  res.status(200).json({ data: data });
}
// for pOst method

var postUsers = async (req, res) => {
  var postData = req.body;
  if (postData.length > 1) {

    // const data = await User.create(postData);
    var data = await User.bulkCreate(postData);   // for post bulk data
  } else {
    var data = await User.create(postData);
  }
  //  const data = await User.create({ firstName: postData.firstName, lastName: postData.lastName });
  res.status(200).json({ data: data });
}

// for delete

var deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.params.id

    }
  });
  res.status(200).json({ data: data });
}

// for update
var patchUser = async (req, res) => {
  var updateData = req.body;
  const data = await User.update(updateData, {
    where: {
      id: req.params.id

    }
  });
  res.status(200).json({ data: data });
}

// for model query
var queryUser = async (req, res) => {
  // const data = await User.create({
  const data = await User.findAll({


    // firstName: 'Rushikesh',
    // lastName: "Gaikwad"

    // }, { fields: ['firstName'] 
    attributes: ['id',['firstName', 'first_name'],

    [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],
    // group: ['id', 'firstName']
    
  });                                 ///// we can use attributes model for fetching data from particular column

  res.status(200).json({ data: data });
}







module.exports = {
  addUser,
  getUsers,
  getUser,
  postUsers,
  deleteUser,
  patchUser,
  queryUser
};
