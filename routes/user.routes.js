import express from "express";
import { homepage } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", homepage);

export default router;
