const { User } = require("../../models");
module.exports = {
  get: async (req, res) => {
    res.status(200).send("test userinfoget");
  },
  patch: async (req, res) => {
    const name = req.data;
    const id = req.data;
    const accesstoken = req.data;
    let validation = await User.findOne({ where: { id, accesstoken } });
    if (validation) {
      User.create(
        {
          name: name,
          //("상호명"+","+"도로명"+","+"")
        },
        { fields: ["name"] }
      );
    }

    res.status(200).send("test userinfopatch");
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
