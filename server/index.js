const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);
// router
const userRouter = require("./routes/user");
const boardRouter = require("./routes/board");
const jwtTest = require("./controllers/token/index");
app.get("/jwtTest", (req, res) => {
  jwtTest.sendAccessToken(
    res,
    jwtTest.generateAccessToken({ email: "happy5happy5@gmail.com" })
  );
});
app.get("/", (req, res) => {
  res.send("Cocodus, hacking!");
});
app.use("/user", userRouter);
app.use("/board", boardRouter);

module.exports = app;
