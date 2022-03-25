module.exports = {
  post: async (req, res) => {
    let { email, password, nickname } = req.body.data;

    res.status(200).send("test signuppost");
  },
};
