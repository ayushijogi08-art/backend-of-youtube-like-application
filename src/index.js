import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";
import "dotenv/config";

dotenv.config({
   path: "./.env",
   silent: true
});


connectDB()

 .then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on PORT ${process.env.PORT || 8000}`);
  });
})
.catch((err)=>{
  console.log("MONGO db connection failed!!!", err);
})