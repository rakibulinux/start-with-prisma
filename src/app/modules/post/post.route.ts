import express from "express";
import { PostController } from "./post.controller";
const router = express.Router();

router.post("/create-post", PostController.insertIntoDB);
router.patch("/:id", PostController.updatePost);
router.get("/learn-aggregation", PostController.learnAggregationAndGrouping);
router.delete("/:id", PostController.deleteSinglePost);
router.get("/:id", PostController.getSinglePost);
router.get("/", PostController.getAllPosts);

export const PostRouter = router;
