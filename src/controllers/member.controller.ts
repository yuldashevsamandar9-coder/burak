import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";
const memberService = new MemberService();
const authService = new AuthService();

// REACT

const memberController: T = {};

/** ============ SIGNUP  PAGE ============ */

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      // TODO: TOKENS AUTHENTICATIONS
      token = await authService.createToken(result);
    //console.log("token:", token);

    res.cookie("accessToken", token, {
      maxAge: Number(AUTH_TIMER) * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
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

/** ============ LOGIN PAGE ============ */

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log(" Login");
    const input: LoginInput = req.body,
      result = await memberService.login(input),
      // TODO: TOKENS AUTHENTICATIONS
      token = await authService.createToken(result);
    // console.log("token =>", token);

    res.cookie("accessToken", token, {
      maxAge: Number(AUTH_TIMER) * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error go Login ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    //res.json({});
  }
};

export default memberController;
