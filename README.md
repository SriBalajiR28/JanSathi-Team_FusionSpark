# JanSathi Backend – Loan Application System

This is the **Backend service** for the JanSathi Team FusionSpark project.  
It provides APIs for loan applications, integrates with **n8n workflows**, and returns **static loan scheme data** to the frontend.

---

## 🚀 Features
- REST API built with **Node.js + Express**
- Loan Application endpoint (`/api/loan`)
- Returns **static JSON loan schemes** (eligible or rejected)
- Forwards requests to **n8n webhook** (silent, no response used)
- CORS enabled for frontend integration

---
