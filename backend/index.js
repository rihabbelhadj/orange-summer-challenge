const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

require('dotenv').config();
const router = express.Router();
const app = express(); 
const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const db = require("./src/models");
const Role = db.role;
/**db.mongoose
  .connect({
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });*/

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      
      new Role({
        name: "manager"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'manager' to roles collection");
      });
    }
  });
}
const itemRouter = require('./src/routes/item');
const authRouter = require('./src/routes/auth');
app.use('/item', itemRouter);
app.use( '/user',authRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
