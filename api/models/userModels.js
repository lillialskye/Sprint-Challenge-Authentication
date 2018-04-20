const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
    // create your user schema here.
//  done  username: required, unique and lowercase
    // password: required
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  }
  password: {
    type: String,
    required: true,
  } 
  // might need a comma after }
});

UserSchema.pre('save', function(next) => {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  
  //this part is done 

  // this part is not done
  // Once the password is encrypted, call next() so that your userController and 
  //create a user
bcrypt.hash(this.password, 10).then(hash => {
  this.password = hash;
next(err);
})
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password 
  //comparison
  
// not sure I did all of this part

  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw 
  //to the compare function
bcrypt.compare(plainTextPW,this.password
function(err, is Valid){
if (err){
  return callBack(err);
}
 callBack(null, isValid);
  });
};
module.exports = mongoose.model('User', UserSchema);
