const { forwardToN8N } = require("../services/chatbotService");

async function handleChatbot(req, res) {
  try {
    const { message } = req.body;
    const data = await forwardToN8N(message);
    res.json(data);
  } catch (err) {
    console.error("Chatbot error:", err);
    res.status(500).json({ error: "Chatbot service unavailable" });
  }
}

module.exports = { handleChatbot };
