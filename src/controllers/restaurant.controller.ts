import express, { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page ");
    // send | json | rederict | end | render
  } catch (err) {
    console.log("Eroor go home", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
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

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Eroor go processLogin ", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("DONE");
  } catch (err) {
    console.log("Eroor go processSignup ", err);
  }
};
export default restaurantController;
