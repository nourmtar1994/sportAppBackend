const express = require("express");

const router = express.Router();
const planificationController = require("../controllers/Planification.controller");

router.get("/", planificationController.getAll);
router.get("/:id", planificationController.getById);
router.post("/", planificationController.create);
router.put("/:id", planificationController.update);
router.delete("/:id", planificationController.delete);

module.exports = router;
