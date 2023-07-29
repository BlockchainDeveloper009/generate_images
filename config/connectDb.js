let mongoDb_CONNECT_STRING = `mongodb+srv://db_user:admin@cluster0.pjdx7a1.mongodb.net/test_master_mongo?retryWrites=true&w=majority`;
//`mongodb+srv://alpha:admin@cluster0.qpmgrng.mongodb.net/test_master_mongodb?retryWrites=true&w=majority`
//`mongodb+srv://db_user:admin@cluster0.pjdx7a1.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
      console.log('trying to connect to Db')
      const connect = await mongoose.connect(mongoDb_CONNECT_STRING);//process.env.CONNECTION_STRING);
      console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
  module.exports = connectDb;