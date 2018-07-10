const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
const user = new User({username, password});
//const userInfo={username.password};
user.save((err, user) => {
	if(err) return res.status(422).send({ message: 'Problem creating new user'});
	res.json({success: 'Saved', user});
});

};



module.exports = {
  createUser
};


// to do as post but uses the db

//users.post('/api/user', (req,res))