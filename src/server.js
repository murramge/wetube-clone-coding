
import express from "express";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";


const app = express();
app.set("views" , process.cwd() + "/src/views")
app.set("view engine", "pug");

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true}))
//서버를 시작하도록 하는 어플리케이션

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.DB_URL}),
}))

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/",rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);




export default app;