const express = require("express");
const { handleChatbot } = require("../controllers/chatbotController");

const router = express.Router();

router.post("/", handleChatbot);

module.exports = router;
