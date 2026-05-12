const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function forwardLoanToN8N(loanData) {
  const response = await fetch("https://srilatha123.app.n8n.cloud/webhook/loan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loanData),
  });

  return await response.json(); // return JSON from n8n
}

module.exports = { forwardLoanToN8N };
