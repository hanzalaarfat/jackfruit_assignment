const express = require("express");
const router = express.Router();
const investController = require("../controller/investController");

// const { requireSigninAdmin } = require("../middleware/authenticate");

router.post("/addincome", investController.addInvest);

module.exports = router;
