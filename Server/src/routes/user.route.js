import express from "express";
import { getUsers, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


router.get("/", getUsers);
router.delete("/:id", deleteUser);
export default router;