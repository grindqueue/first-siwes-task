const { mongo, default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const formsIdSchema = new Schema({
  Username : {
    type:String,
    required: [true,'Please enter your username'],
    minlength : [6, "User name can not be less than six characters"],
    maxLength : [100,"Username should not exceed 100 characters"],
  },
  Email:{
    type:String,
    required:[true,"Please enter your email address"],
    unique: [true, "Email already used to register"],
    match: [/.+@.+\..+/, "Please enter a valid email address"],
    trim : true,
    lowercase: true,
  },
  Phone_number:{
    type:String,
    required:[true,"Kindly enter your phone number"],
    match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"]
  }
},{
  timestamps : true,
});

const formsIdModel = mongoose.model("formsId", formsIdSchema);
module.exports = { formsIdModel };