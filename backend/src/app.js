import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

const app = express();

// Global Middleware
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
