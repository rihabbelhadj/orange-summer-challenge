const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String , required:true},
  email: { type: String , required:true},
  password: { type: String , required:true},
  date: { type: Date },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
}, {
  timestamps: true,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;