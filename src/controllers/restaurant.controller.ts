import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/Member.enum";
import { LoginInput } from "../libs/types/member";
import Errors, { Message } from "../libs/Errors";

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
/** GET SIGUNUP AND  GET LOGIN START  */
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("Signup");
  } catch (err) {
    console.log("Eroor go getsignup ", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("Login");
  } catch (err) {
    console.log("Eroor go getLogin", err);
    res.redirect("/admin");
  }
};

/** POST PROCESSSIGNUP  AND  POST PROCESS LOGIN START  */

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICATIONS

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Errors go processSignup ", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert(" ${message}"); window.location.replace('admin/signup')  </script>`,
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO: SESSIONS AUTHENTICATIONS

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });

    res.send(result);
  } catch (err) {
    console.log("Error go processLogin ", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert(" ${message}"); window.location.replace('admin/login')  </script>`,
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error go processLogin ", err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthsession = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("checkAuthsession");
    if (req.session?.member)
      res.send(`<script>alert(" ${req.session.member.memberNick}") </script>`);
    else res.send(`<script>alert(" ${Message.NOT_AUTHECENTED} ") </script>`);
  } catch (err) {
    console.log("Error go checkAuthsession ", err);
    res.send(err);
  }
};

export default restaurantController;
