import app from "./src/app.js";
import { env } from "./src/config/env.js";

app.listen(env.serverPort, () =>
  console.log(`Server is running: http://localhost:${env.serverPort}\n`),
);
