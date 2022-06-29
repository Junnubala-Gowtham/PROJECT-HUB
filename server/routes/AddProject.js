const express = require("express");
const router = express.Router();
const { getAllProjcts, addProject } = require("../controller/AddProject");

router.get("/", getAllProjcts);

module.exports = router;

