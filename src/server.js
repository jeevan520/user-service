require("dotenv").config();

const express = require("express");

const { port } = require("./config/env");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

// User routes
app.use("/api/users", userRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    service: "user-service",
    message: "User Service is running",
  });
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`User Service running on http://localhost:${port}`);
});