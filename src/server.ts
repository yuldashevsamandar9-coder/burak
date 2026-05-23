console.log("salom dunyo");

import moment from "moment";
const currentTime = moment().format();
console.log(currentTime);

const person: string = "Sam";
const count: number = 100;
console.log("==========");

import dotenv from "dotenv";
dotenv.config();
console.log("PORT:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);
