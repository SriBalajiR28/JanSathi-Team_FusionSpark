const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function forwardToN8N(message) {
  const response = await fetch("https://your-n8n-instance/webhook/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return await response.json();
}

module.exports = { forwardToN8N };
