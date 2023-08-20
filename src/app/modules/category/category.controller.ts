import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User Created success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CategoryController = {
  insertIntoDB,
};
