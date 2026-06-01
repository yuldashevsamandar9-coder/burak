import { ObjectId } from "mongoose";
import { MemberType, MemberStatus } from "../enums/Member.enum";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAdress?: string;

  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType: MemberType;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}
