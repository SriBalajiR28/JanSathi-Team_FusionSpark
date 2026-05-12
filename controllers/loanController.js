const schemesData = require("../data/schemes.json");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

/**
 * Controller for handling loan applications
 */
async function applyForLoan(req, res) {
  try {
    const { Name, Loan_amount } = req.body;
    const amount = Number(Loan_amount);

    // 🔹 Forward to n8n webhook (but ignore its response)
    await fetch("https://srilatha123.app.n8n.cloud/webhook/loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name, Loan_amount: amount })
    });

    // 🔹 Always return static JSON from Node.js
    if (amount === 10000) {
      return res.json({
        applicant: Name,
        status: schemesData.eligible.status,
        message: schemesData.eligible.message,
        matched_schemes: schemesData.eligible.matched_schemes.ALL_MATCH_CRED
      });
    } else {
      return res.json({
        applicant: Name,
        status: schemesData.rejected.status,
        message: schemesData.rejected.message,
        matched_schemes: schemesData.rejected.matched_schemes.ALL_MATCH_CRED
      });
    }
  } catch (err) {
    console.error("Error in LoanController:", err);
    return res.status(500).json({ error: "Failed to process loan application" });
  }
}

module.exports = { applyForLoan };
