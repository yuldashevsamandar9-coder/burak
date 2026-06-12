import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

// REACT

const memberController: T = {};

/** SIGNUP  PAGE */

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    // TODO: TOKENS AUTHENTICATIONS

    res.json({ member: result });
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

/** LOGIN PAGE */

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log(" Login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    // TODO: TOKENS AUTHENTICATIONS

    res.json({ member: result });
  } catch (err) {
    console.log("Error go Login ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    //res.json({});
  }
};

export default memberController;
