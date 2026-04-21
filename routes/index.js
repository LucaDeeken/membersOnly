import { Router } from "express";
import passport from "passport";
import {
  registerUser,
  getIndex,
  validateUser,
  handleValidationErrors,
} from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getIndex);
usersRouter.get("/login", getIndex);
usersRouter.get("/signup", (req, res) => {
  console.log("Passport messages:", req.session.messages);
  console.log(res.locals.currentUser);
  res.render("signUp");
});
usersRouter.post("/signup", validateUser, handleValidationErrors, registerUser);
usersRouter.post("/membership", validateUser);
usersRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureMessage: true,
  }),
);

export default usersRouter;
