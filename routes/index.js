import { Router } from "express";
import {
  loginUser,
  getIndex,
  validateUser,
  handleValidationErrors,
} from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getIndex);
//usersRouter.get("/signup", (req, res) => res.render("sign-up-form"));
usersRouter.post("/signup", validateUser, handleValidationErrors, loginUser);

export default usersRouter;
