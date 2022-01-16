import express from "express";
import {see,edit,deletevideo,upload} from "../controllers/videoController"
const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit",edit);
videoRouter.get("/:id(\\d+)/delete",deletevideo);
videoRouter.get("/upload",upload);

export default videoRouter;