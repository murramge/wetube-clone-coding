import express from "express";
import {getEdit,postEdit,logout,see,startGithublogin,finishGithublogin, getChangePassword, postChangePassword} from "../controllers/userController"
import { publicOnlyMiddleware } from "../middlewares";
import { protectorMiddleware } from "../middlewares";
import {uploadFiles} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout",protectorMiddleware,logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(uploadFiles.single("avatar"), postEdit);
userRouter.get("/github/start",publicOnlyMiddleware, startGithublogin);
userRouter.get("/github/finish",publicOnlyMiddleware,finishGithublogin);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/:id", see);
export default userRouter;
