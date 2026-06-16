import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/**  1 - ENTRANSE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middelwer
app.use(express.urlencoded({ extended: true })); // Tradional Api
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/**  2 - SESSION **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 3, // 3 hours
    },
    store: store,
    resave: true, // trueda belgilangan vaqt orasida qayta kirsak saytga yana vaqti yangilanadi
    saveUninitialized: true,
  }),
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/**  3 - VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**  4 - ROUTER **/
app.use("/admin", routerAdmin); // BSSR : EJS
app.use("/", router); // Middlewere Disgn pattern SPA REACT loyihamiz uchun backend server tarzida ishlatarkanmiz

export default app; // module export app

/* Naming standarts
function, variable , method => Camel // goHome
class => Pascal // MemberService
folder => Kebab  
css => Snake // button_style 
 */
