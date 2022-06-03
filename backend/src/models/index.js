const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.user = require("./UserModel");
db.role = require("./roleModel");
db.ROLES = ["user", "manager"];
module.exports = db;