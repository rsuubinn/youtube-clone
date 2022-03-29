import express from "express";
import morgan from "morgan";
import session from "express-session";
import mongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
    store: mongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/youtube" }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
