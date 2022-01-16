import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
app.set("views" , process.cwd() + "/src/views")
app.set("view engine", "pug");

const logger = morgan("dev");
app.use(logger);

//서버를 시작하도록 하는 어플리케이션
app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening)