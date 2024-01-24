const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require ('dotenv')
const colors = require('colors')
const path = require('path')
const connectDB = require('./config/connectDB')

//config dot env file
dotenv.config();

//port
const PORT = 8080 || process.env.PORT


// //database call
// connectDB()


//rest object 
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use("/api/v1/users",require("./routes/userRoute"))

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Connect to MongoDB and then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("Listening for requests");
    });
  })
    .catch(error => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit if connection fails
    });

//static files
app.use(express.static(path.join(__dirname,"./client/build")))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})


//listen server
app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`)
})

