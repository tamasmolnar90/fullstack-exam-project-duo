import "dotenv/config";

export const env = {
  serverPort: process.env.SERVER_PORT || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};
