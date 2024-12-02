import express from "express";
import userRoutes from "./routes/user.routes.js";
import logger from "morgan";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

dotenv.config({
  path: "./config/.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
app.use(logger("dev"));

app.use("/api/user", userRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});