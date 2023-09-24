import smartcast, { control } from "vizio-smart-cast";
import { env } from "./config/env";
import express from "express";
import { router } from "./routes/command.routes";
import cors from "cors";
export const tv = new smartcast(env.IP, env.AUTH_KEY);
const app = express();
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(router);
app.listen(1000, () => {
  console.log("listening on port 1000");
});
