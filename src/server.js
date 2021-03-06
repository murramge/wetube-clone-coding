
import express from "express";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import session from "express-session";
import flash from "express-flash";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";


const app = express();
app.set("views" , process.cwd() + "/src/views")
app.set("view engine", "pug");
app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
    });
const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true}))
app.use(express.json()); //json이 string을 object로 변환해줌
//서버를 시작하도록 하는 어플리케이션

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.DB_URL}),
}))

app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/",rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);



export default app;