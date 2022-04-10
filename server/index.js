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
    origin: ["https://cocodus.site"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
// router
const userRouter = require("./routes/user");
const boardRouter = require("./routes/board");

app.get("/", (req, res) => {
  res.send("Cocodus, hacking!");
});
app.use("/user", userRouter);
app.use("/board", boardRouter);

module.exports = app;
