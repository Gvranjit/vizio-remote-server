import { Router } from "express";
import * as remoteController from "../controllers/remote.controller";

const router = Router();

router.get("/test", (req, res, next) => {
  res.send("IT WORKS BRO");
});
router.post("/command", remoteController.command);
export { router };
