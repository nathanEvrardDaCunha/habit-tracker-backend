import fs from "fs";
import { test } from "./helper.js";
import express from "express";

console.log("Hello Mum !");
console.log(test);
console.log("Hello Mum 2 !");

// TODO: To .env and .env.example
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("You did it ! Your first route !");
});

app.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`));
