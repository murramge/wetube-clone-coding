import express from "express";
import {edit,logout,see,startGithublogin,finishGithublogin} from "../controllers/userController"
const userRouter = express.Router();

userRouter.get("/logout",logout);
userRouter.get("/edit", edit);
userRouter.get("/github/start", startGithublogin);
userRouter.get("/github/finish", finishGithublogin);

userRouter.get("/:id", see);
export default userRouter;
