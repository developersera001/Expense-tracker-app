const mongoose = require('mongoose')
const colors = require('colors')

// function create karenge database se connect karne ke liye

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
//     } catch (error) {
//        console.log(`${error}`.bgRed) 
//     }
// }

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

module.exports = connectDB