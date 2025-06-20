import express from "express";
import dotenv from "dotenv";
// POST-FIX: if there is a problem saying "Cannot find package X imported..." just add the "./" to make it a relative path
import authRouter from "./routes/authRoutes.js";

// === SETUP === //

// NOTE: dotenv only work when the server.js file is launch from the root folder (e.g: "node src/server.js")
dotenv.config();
const app = express();

// === MIDDLEWARE === //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// === ROUTER === //

const jsonTest = {
  title: "Basic api route's test to see if json work perfectly",
  name: "Camelia",
  age: 34,
  skills: ["communication", "react"],
};

app.get("/api", (req, res) => {
  res.status(200).json(jsonTest);
});

app.use("/api/auth", authRouter);

// === SERVER === //

app.listen(process.env.HABIT_TRACKER_PORT, () =>
  console.log(
    `The application's server is running on: http://127.0.0.1:${process.env.HABIT_TRACKER_PORT}`
  )
);
