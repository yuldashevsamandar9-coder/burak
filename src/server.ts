import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log(`Mongodb suceccfully`);
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`This server succesfully running on port: ${PORT}`);
    });
  })

  .catch((err) => {
    console.log("Error wrong try agein:", err);
  });
