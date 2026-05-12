const express = require("express");
const router = express.Router();
const { applyForLoan } = require("../controllers/loanController");

router.post("/", applyForLoan);

module.exports = router;
