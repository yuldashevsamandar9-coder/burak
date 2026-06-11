import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import { AdminRequest, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import restaurantController from "./restaurant.controller";
import makeUploader from "../libs/utils/uploader";

const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
  try {
    console.log("getAllProducts");
    console.log("req.member:", req.member);

    // TODO: TOKENS AUTHENTICATIONS

    res.render("products");
  } catch (err) {
    console.log("Errors go Products ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else
      res
        .status(Errors.standard.code)
        .json({ message: Errors.standard.message });
    //res.json({});
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createProduct");

    // if (!req.files?.length)
    //   throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    res.send("DONE");

    // TODO: TOKENS AUTHENTICATIONS
  } catch (err) {
    console.log("Errors go createNewProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else
      res
        .status(Errors.standard.code)
        .json({ message: Errors.standard.message });
    //res.json({});
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");

    // TODO: TOKENS AUTHENTICATIONS
  } catch (err) {
    console.log("Errors go updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else
      res
        .status(Errors.standard.code)
        .json({ message: Errors.standard.message });
    //res.json({});
  }
};

export default productController;
