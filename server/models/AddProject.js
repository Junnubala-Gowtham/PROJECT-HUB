const mongoose = require("mongoose");

const AddProjectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Project_Name: { type: String, required: true },
  Team_Lead: { type: String, required: true },
  Technology: { type: String, required: true },
  // image: { data: Buffer, contentType: String },
  Client: { type: String, required: true },
 
});

module.exports = mongoose.model("AddProject", AddProjectSchema);

