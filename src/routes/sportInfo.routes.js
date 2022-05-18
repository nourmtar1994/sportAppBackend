const express = require("express");
const router = express.Router();
const sportInfoController = require("../controllers/SportInfo.controller");

router.get("/", sportInfoController.getAll);
router.get("/:id", sportInfoController.getById);
router.post("/", sportInfoController.create);
router.put("/:id", sportInfoController.update);
router.delete("/:id", sportInfoController.delete);

module.exports = router;
