const express = require("express");
const router = express.Router();
const armyController = require("../controllers/Army.controller");

router.get("/", armyController.getAll);
router.get("/:id", armyController.getById);
router.post("/", armyController.create);
router.put("/:id", armyController.update);
router.delete("/:id", armyController.delete);

module.exports = router;
