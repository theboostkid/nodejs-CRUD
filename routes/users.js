import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUsers,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];
//Route to get all users
router.get("/", getAllUsers);
//route to add users
router.post("/", createUser);
//route to get users by ID
router.get("/:id", getUserById);
//route to delete users by ID
router.delete("/:id", deleteUser);

//route to Update User
router.patch("/:id", updateUsers);
export default router;
