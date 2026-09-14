import express from "express";
import cors from "cors";
import "dotenv/config";

const SERVER_PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

const app = express();

// Middleware
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () =>
  console.log(`The server is running: http://localhost:${SERVER_PORT}`),
);
