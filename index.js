import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import msgRoute from "./backend/routes/msgRoute.js";
import connectDB from "./backend/config/db.js";

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, "./frontend")));
app.use("/api/send-msg", msgRoute);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./", "frontend", "index.html"));
});

app.listen(process.env.PORT, () => console.log("server is running on 3222"));
