import express from "express";
import {getEdit,postEdit,logout,see,startGithublogin,finishGithublogin} from "../controllers/userController"
import { publicOnlyMiddleware } from "../middlewares";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout",protectorMiddleware,logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start",publicOnlyMiddleware, startGithublogin);
userRouter.get("/github/finish",publicOnlyMiddleware,finishGithublogin);

userRouter.get("/:id", see);
export default userRouter;
