const express = require("express");
const router = express.Router();
const incomeController = require("../controller/incomeController");

// const { requireSigninAdmin } = require("../middleware/authenticate");

router.post("/addincome", incomeController.addIncome);


module.exports = router;
