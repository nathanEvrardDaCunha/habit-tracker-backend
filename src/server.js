import express from "express";
import dotenv from "dotenv";

// === SETUP === //
dotenv.config();
const app = express();

// === MIDDLEWARE === //

// === ROUTER === //

// === SERVER === //
app.listen(process.env.HABIT_TRACKER_PORT, () =>
  console.log(
    `The application's server is running on: http://127.0.0.1:${process.env.HABIT_TRACKER_PORT}`
  )
);
