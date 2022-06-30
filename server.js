const express = require("express");
const bodyParser=require('body-parser');
const app = express();
const mongoose=require('mongoose');
const projectRoute = require("./routes/AddProject");
const HttpError=require('./models/http-error');
// const usersRoutes=require('./routes/users');

app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017').then(()=>{
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
}).catch(err =>{
  console.log(err);
});


app.use("/api/addproject", projectRoute);

// app.use('/api/users',usersRoutes);

// app.use((req,res,next)=>{
// const error = new HttpError('Could not find this route',404);
// throw error;
// });

// app.use((error,req,res,next)=>{
//   if(res.headerSent){
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({message:error.message || 'unknow error'});
// });





app.get("/api", (req, res) => {
  //res.json({ users: ["user1", "user2", "user3", "user4"] });
  res.json({
    projects: [
      {
        id: "1",
        name: "Ambarish",
        technology: "Angular",
        skill: "Full-Stack",
        client: "Capegemini",
        pic: "https://acquven.com/blog/02/images/angular.jpg",
        category: "ongoing",
        description: "", 
      },

      {
        id: "2",
        name: "Bharatha",
        technology: "React",
        client: "Wipro",
        pic: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
        category: "completed",
        description: "", 
      },
      {
        id: "3",
        name: "Gajendra",
        technology: "Java",
        client: "Amazon",
        pic: "https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg",
        category: "ongoing",
        description: "", 
      },
      {
        id: "4",
        name: "Vaayu",
        technology: "App Development",
        client: "Google",
        pic: "https://www.fingent.com/wp-content/uploads/1-1.jpg",
        category: "completed",
        description: "", 
      },
      {
        id: "5",
        name: "Kumar",
        technology: "MERN",
        client: "Google",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYSKyuOKZBwVgtjCZ2xPsha7FnO-Pzu0Wgw&usqp=CAU",
        category: "ongoing",
        description: "", 
      },
      {
        id: "6",
        name: "Sharma",
        technology: "Vue js",
        client: "Amazon",
        pic: "https://redwerk.es/wp-content/uploads/2019/11/cover_Vue.png",
        category: "completed",
        description: "", 
      },
    ],
  });
});



// app.all("*", (req, res, next) => {
//   next(new ExpressError("page not found!!!", 404));
// });
