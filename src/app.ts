import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/**  1 - ENTRANSE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**  2 - SESSION **/

/**  3 - VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**  4 - ROUTER **/
app.use("/admin", routerAdmin); // BSSR : EJS
app.use("/", router); // Middlewere Disgn pattern SPA REACT loyihamiz uchun backend server tarzida ishlatarkanmiz

export default app; // module export app
