// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var signupSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        trim: true
      },
      passwordconfirm: {
        type: String,
        required: true,
        trim: true
      }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Signup = mongoose.model('Signup', signupSchema);

// make this available to our Node applications
module.exports = Signup;