const express = require("express");
const router = express.Router();
const investController = require("../controller/investController");

// const { requireSigninAdmin } = require("../middleware/authenticate");

router.post("/addinvest", investController.addInvest);
router.get("/apphra/:userId", investController.ApplicableHRA);

module.exports = router;
