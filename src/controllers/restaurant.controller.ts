import express, { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home.page ");
  } catch (err) {
    console.log("Eroor go home", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login.page ");
  } catch (err) {
    console.log("Eroor go getLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup.page ");
  } catch (err) {
    console.log("Eroor go getsignup ", err);
  }
};

export default restaurantController;
