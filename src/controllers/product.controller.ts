import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import { AdminRequest, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import ProductService from "../models/Product.service";
import restaurantController from "./restaurant.controller";

const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
  try {
    console.log("getAllProducts");
    console.log("req.member:", req.member);

    // TODO: TOKENS AUTHENTICATIONS

    res.render("products");
  } catch (err) {
    console.log("Errors go Signup ", err);
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

    // TODO: TOKENS AUTHENTICATIONS
  } catch (err) {
    console.log("Errors go createNew Product", err);
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
    console.log("Errors go updateChosenProductcreateProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else
      res
        .status(Errors.standard.code)
        .json({ message: Errors.standard.message });
    //res.json({});
  }
};

export default productController;
