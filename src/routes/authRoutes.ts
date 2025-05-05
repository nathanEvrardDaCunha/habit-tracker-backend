import express from "express";

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  // PRE-FIX: Need to verify that 'username' and the others are defined
  const { username, email, password } = req.body;

  // Data Verification
  try {
    if (!(typeof username === "string")) {
      throw new Error(`username is not of type string`);
    }

    if (!(typeof email === "string")) {
      throw new Error(`email is not of type string`);
    }

    if (!(typeof password === "string")) {
      throw new Error(`password is not of type string`);
    }
  } catch (error) {
    res.status(400).send();
  }

  // Token Creation

  // Token Transfer

  const jsonResponse = {
    message: "Register route is working !",
    ...[username, email, password],
  };
  res.status(200).json(jsonResponse);
});

authRouter.post("/login", (req, res) => {
  res.status(200).send("Login route is working !");
});

export default authRouter;
