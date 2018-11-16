const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
 userName: {type: String, unique: true},
 password: String

});

const User = mongoose.model("User", userSchema);

module.exports = User;