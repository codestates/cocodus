module.exports = {
  post: async (req, res) => {
    // console.log(1);
    res.status(200).send("test notepost");
  },
  delete: async (req, res) => {
    res.status(200).send("test notedelete");
  },
};
