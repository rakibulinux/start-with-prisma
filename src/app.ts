import express, { Application } from "express";
import cors from "cors";
import { UserRoute } from "./app/modules/user/user.route";
import { CategoryRouter } from "./app/modules/category/category.route";
import { PostRouter } from "./app/modules/post/post.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/category", CategoryRouter);
app.use("/api/v1/post", PostRouter);

export default app;
