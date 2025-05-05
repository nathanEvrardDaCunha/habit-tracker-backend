import express from "express";
import dotenv from "dotenv";

// === SETUP === //

// NOTE: dotenv only work when the server.js file is launch from the root folder (e.g: "node src/server.js")
dotenv.config();
const app = express();

// === MIDDLEWARE === //

// === ROUTER === //

app.get("/api", (req, res) => {
  res.status(200).send("Basic api request work perfectly !");
});

// === SERVER === //

app.listen(process.env.HABIT_TRACKER_PORT, () =>
  console.log(
    `The application's server is running on: http://127.0.0.1:${process.env.HABIT_TRACKER_PORT}`
  )
);
