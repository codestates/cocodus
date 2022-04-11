module.exports = {
  get: async (req, res) => {},
  github: async (req, res) => {
    // console.log(res);
    const token = res.body.token;
    let email = res.body.email;

    res.status(200).send({ token, email });
  },
};
