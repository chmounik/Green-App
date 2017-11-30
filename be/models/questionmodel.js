// grab the things we need
var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

// create a schema
var questionSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      car: {
        type: String,
        required: true,
        trim: true
      },
      miles: {
        type: Number
      },
      power: {
        type: Number,
        required: true,
        trim: true
      },
      gas: {
        type: String,
        required: true,
        trim: true
      },
      therms: {
        type: Number
      },
      flown: {
        type: String,
        required: true,
        trim: true
      },
      flymiles: {
        type: Number
      },
      housearea: {
        type: Number,
        required: true,
      },
      people: {
        type: Number,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      }
}, {
    timestamps: true
});

questionSchema.plugin(passportLocalMongoose);

var QuestionModel = mongoose.model('Questions', questionSchema);

module.exports = QuestionModel;