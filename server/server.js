const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const projectRoute = require("./routes/AddProject");
// const genreRoute = require("./routes/genres");
// const userRoute = require("./routes/users");



const app = express();

//To prevent CORS errors
app.use(cors());

require("dotenv").config({path:"./config.env"});
const port=process.env.PORT || 5000;


app.use(express.json());
app.use(require("./routes/record"));
const dbo=require("./db/conn");

// app.use(express.static("./uploads"));


// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
// app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/addproject", projectRoute);
// app.use("/api/genres", genreRoute); //cache
// app.use("/api/users", userRoute);

//Serve our static asset
app.use(express.static("./server/build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"build","index.html"));
// });


app.listen(port,()=>{
  dbo.connectToServer(function (err){
    if(err) console.error(err);
  });
  console.log(`server is running on port: ${port}`);
});
