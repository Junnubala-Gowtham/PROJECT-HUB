const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const AddProject = require("../models/AddProject");

exports.getAllProjcts = (req, res) => {
  AddProject.find()
    .then((addproject) =>
      res.status(200).json({
        
        addproject: addproject,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

exports.addProject = (req, res) => {
  upload(req, res, (err) => {
    if (err) res.status(500).json(err);
    else {
      fs.readFile(req.file.path, function (err, data) {
        if (err) throw err;
        else {
          const contentType = req.file.mimetype;
          const newProject = new AddProject({
            _id: mongoose.Types.ObjectId(),
            Project_Name: req.body.Project_Name,
            Team_Lead: req.body.Team_Lead,
            Technology: req.body.Technology,
            // image: { data, contentType },
            Client: req.body.Client,
          });

          //Saving new project in db
          newProject.save((err, addproject) => {
            if (err) res.status(500).json({ error: err });
            else {
              res.status(201).json({
                message: "A new project added.",
                addproject: addproject,
              });
            }
          });
        }
      });
    }
  });
};

