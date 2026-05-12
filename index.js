const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const loanRoutes = require("./routes/loan");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Register loan routes
app.use("/api/loan", loanRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
