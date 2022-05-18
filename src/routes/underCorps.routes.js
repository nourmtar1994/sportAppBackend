const express = require("express");
const router = express.Router();
const underunderCorpsController = require("../controllers/underCorps.controller");

router.get("/", underCorpsController.getAll);
router.get("/:id", underCorpsController.getById);
router.post("/", underCorpsController.create);
router.put("/:id", underCorpsController.update);
router.delete("/:id", underCorpsController.delete);

module.exports = router;
