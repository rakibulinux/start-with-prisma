import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User Created success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getAllPosts(options);
    res.send({
      success: true,
      message: "Post get success",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Single Post get success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deleteSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Single Post delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.updatePost(
      parseInt(req.params.id),
      req.body
    );
    res.send({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const learnAggregationAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregationAndGrouping();
    res.send({
      success: true,
      message: "learn Aggrigration And Grouping successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const PostController = {
  insertIntoDB,
  getAllPosts,
  getSinglePost,
  updatePost,
  deleteSinglePost,
  learnAggregationAndGrouping,
};
