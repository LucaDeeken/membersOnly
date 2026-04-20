import { Router } from "express";
import {
  registerUser,
  getIndex,
  validateUser,
  handleValidationErrors,
} from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getIndex);
usersRouter.get("/signup", (req, res) => res.render("signUp"));
usersRouter.post("/signup", validateUser, handleValidationErrors, registerUser);

export default usersRouter;
