const { User, Post, User_like } = require("../../models");

module.exports = {
  patch: async (req, res) => {
    res.status(200).send("board yes recruiting patch");
  },
};
