import express from "express";
import { sendMsg } from "../controllers/msgController.js";
const router = express.Router();

router.route("/").post(sendMsg);

export default router;
