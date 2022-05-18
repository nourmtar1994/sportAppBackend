const express = require("express");
const router = express.Router();
// const stages = require("../controllers/Stages.controller");

router.get("/", () => {
  console.log("hello");
});
module.exports = router;
