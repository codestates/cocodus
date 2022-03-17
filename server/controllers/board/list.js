module.exports = {
  get: async (req, res) => {
    res.status(200).send("board yes list get");
  },
  patch: async (req, res) => {
    res.status(200).send("board yes list patch");
  },
  delete: async (req, res) => {
    res.status(200).send("board yes list delete");
  },
};
