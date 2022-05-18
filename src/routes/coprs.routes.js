const express = require("express");
const router = express.Router();
const corpsController = require("../controllers/Corps.controller");

router.get("/", corpsController.getAll);
router.get("/:id", corpsController.getById);
router.post("/", corpsController.create);
router.put("/:id", corpsController.update);
router.delete("/:id", corpsController.delete);

module.exports = router;
