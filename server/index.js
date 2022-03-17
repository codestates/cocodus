const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);
// router
const userRouter = require("./routes/user");
const boardRouter = require("./routes/board");

app.get("/", (req, res) => {
  res.send("Happy5happy5, hacking!");
});
app.use("/user", userRouter);
app.use("/board", boardRouter);

module.exports = app;
