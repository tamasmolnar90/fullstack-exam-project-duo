import pg from "pg";
import { env } from "../config/evn.js";

const { Pool } = pg;

const pool = new Pool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.username,
  password: env.db.password,
  database: env.db.name,
});

export default pool;
