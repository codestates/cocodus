const axios = require("axios");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  kakao: async (req, res) => {
    console.log(req.query);
    const code = req.query.code;
    const tokenCall = await axios({
      // token을 받아옵니다
      url: "https://kauth.kakao.com/oauth2/token",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      params: {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID,
        redirect_uri: "http://localhost:8080/user/signup/kakao",
        code: code,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
      },
    });
    console.log(tokenCall.data);
    if (!tokenCall.data)
      return res.status(403).redirect("http://localhost:3000/");
    const accessToken = tokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");
    //카카오에서 이메일 정보를 받아오기 위한 코드 작성 필요
    {
      /*let validation = await User.findOne({ where: { id } }); DB에 회원정보 저장하는 부분 작성 필요
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    } else {
      User.create(
        {
          id,
          access_token,
        },
        { fields: ["id", "access_token"] }
      );
    }*/
    }
    res
      .status(200)
      .cookie("access_token", accessToken, {
        maxAge: 360000, //360초 뒤에 쿠키 사라짐
      })
      .redirect("http://localhost:3000/");
  },
  google: async (req, res) => {
    const code = req.query.code; // accounts.google 에서 우리 서버로 보내준 http 메시지 중에서 code를 빼내는 부분입니다
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    //만약 코드가 없으면 그냥 원래페이지로 리다이렉트
    const tokenCall = await axios({
      // token을 받아옵니다
      url: "https://www.googleapis.com/oauth2/v4/token",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      params: {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:8080/user/signup/google",
        grant_type: "authorization_code",
      },
    });
    console.log(tokenCall.data);
    if (!tokenCall.data)
      return res.status(403).redirect("http://localhost:3000/");
    const accessToken = tokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");
    //구글에서 이메일 정보를 받아오기 위한 코드
    // const userInfoCall = await axios({
    //   url: "https://api.github.com/user",
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     authorization: `token ${access_token}`,
    //   },
    // });

    //const id = userInfoCall.data.html_url; id를 받아오는 코드(깃허브는 provider + username)
    //console.log(id); //id 확인하기
    {
      /*let validation = await User.findOne({ where: { id } }); DB에 회원정보 저장하는 부분
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    } else {
      User.create(
        {
          id,
          access_token,
        },
        { fields: ["id", "access_token"] }
      );
    }*/
    }

    res
      .status(200)
      .cookie("access_token", accessToken, {
        maxAge: 360000, //360초 뒤에 쿠키 사라짐
      })
      .redirect("http://localhost:3000/");
  },
  github: async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    const acctokenCall = await axios({
      url: "https://github.com/login/oauth/access_token",
      method: "GET",
      headers: {
        accept: "application/json",
      },
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      },
    });
    // console.log(acctokenCall.data);
    const accessToken = acctokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");
    const userInfoCall = await axios({
      url: "https://api.github.com/user",
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `token ${accessToken}`,
      },
    });

    const id = userInfoCall.data.html_url;
    console.log(id); //https://github.com/happy5happy5
    let validation = await User.findOne({ where: { id } });
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    } else {
      User.create(
        {
          id,
          access_token,
        },
        { fields: ["id", "access_token"] }
      );
    }

    res
      .status(200)
      .cookie("access_token", access_token, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      //.redirect("http://cocodus.site/");
      .redirect("http://localhost:3000/");
  },
};
