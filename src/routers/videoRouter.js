import express from "express";
import {watch,getEdit,postEdit, getUpload, postUpload,deleteVideo} from "../controllers/videoController"
const videoRouter = express.Router();
import { publicOnlyMiddleware } from "../middlewares";
import { protectorMiddleware } from "../middlewares";


videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/deletes").all(protectorMiddleware).get(deleteVideo);
videoRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(postUpload);



export default videoRouter;