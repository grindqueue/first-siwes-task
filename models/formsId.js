const { mongo, default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const formsIdSchema = new Schema({
  Username : {
    type:String,
    required: [true,'Please enter your username'],
  },
  Email:{
    type:String,
    required:[true,"Please enter your email address"],
    unique: [true, "Email already used to register"]
  },
  Phone_number:{
    type:String,
    required:[true,"Kindly enter your phone number"]
  }
},{
  timestamps : true,
});

const formsIdModel = mongoose.model("formsId", formsIdSchema);
module.exports = { formsIdModel };