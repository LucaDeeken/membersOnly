import { Router } from "express";
import { getIndex } from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getIndex);

export default usersRouter;
