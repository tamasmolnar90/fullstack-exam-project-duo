import "dotenv/config";

export const env = {
  serverPort: process.env.SERVER_PORT || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
