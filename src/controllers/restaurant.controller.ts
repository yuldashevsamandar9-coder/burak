import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/Member.enum";

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

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send("result");
  } catch (err) {
    console.log("Eroor go processSignup ", err);
    res.send(err);
  }
};
export default restaurantController;
