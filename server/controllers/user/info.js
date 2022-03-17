module.exports = {
  get: async (req, res) => {
    res.status(200).send("test userinfoget");
  },
  patch: async (req, res) => {
    res.status(200).send("test userinfopatch");
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
