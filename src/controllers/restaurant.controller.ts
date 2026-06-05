import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/Member.enum";
import { LoginInput } from "../libs/types/member";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("Home");
    // send | json | rederict | end | render
  } catch (err) {
    console.log("Eroor go home", err);
  }
};
/** GET SIGUNUP AND  POST PROCESS SIGNUP START  */
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("Signup");
  } catch (err) {
    console.log("Eroor go getsignup ", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICATIONS
    res.send(result);
  } catch (err) {
    console.log("Errors go processSignup ", err);
    res.send(err);
  }
};
/** GET SIGUNUP AND  POST PROCESS SIGNUP END  */

/** GET LOGIN AND  POST PROCESS LOGIN START  */
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("Login");
  } catch (err) {
    console.log("Eroor go getLogin", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO: SESSIONS AUTHENTICATIONS

    res.send(result);
  } catch (err) {
    console.log("Error go processLogin ", err);
    res.send(err);
  }
};
/** GET LOGIN AND  POST PROCESS LOGIN END  */

export default restaurantController;
