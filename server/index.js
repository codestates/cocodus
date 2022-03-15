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
app.get("/", (req, res) => {
  res.send("Happy5happy5, hacking!");
});

module.exports = app;
