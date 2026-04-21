import { Router } from "express";
import passport from "passport";
import {
  registerUser,
  getIndex,
  validateUser,
  handleValidationErrors,
  validateMembershipPassword,
  membership,
  getAllPosts,
} from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getIndex);
usersRouter.get("/login", getIndex);
usersRouter.get("/signup", (req, res) => {
  res.render("signUp");
});
usersRouter.get("/messages", getAllPosts);
usersRouter.get("/membership", (req, res) => {
  res.render("membership");
});
usersRouter.post("/signup", validateUser, handleValidationErrors, registerUser);
usersRouter.post(
  "/membership",
  validateMembershipPassword,
  handleValidationErrors,
  membership,
);
usersRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureMessage: true,
  }),
);

export default usersRouter;
