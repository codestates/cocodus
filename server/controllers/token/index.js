require("dotenv").config();
const axios = require("axios");
module.exports = {
  generateAccessToken: async (code, provider) => {
    if (provider === "github") {
      const tokenCall = await axios({
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
      const accessToken = tokenCall.data.access_token;
      return accessToken;
    } else if (provider === "kakao") {
      const tokenCall = await axios({
        url: "https://kauth.kakao.com/oauth/token",
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
      const accessToken = tokenCall.data.access_token;
      return accessToken;
    } else if (provider === "google") {
      const tokenCall = await axios({
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
      const accessToken = tokenCall.data.access_token;
      return accessToken;
    }
  },

  isAuthorized: async (accessToken, provider) => {
    if (provider === "github") {
      const userInfoCall = await axios({
        url: "https://api.github.com/user",
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `token ${accessToken}`,
        },
      });
      // console.log(userInfoCall);
      return userInfoCall;
    } else if (provider === "kakao") {
      const userInfoCall = await axios({
        url: "https://kapi.kakao.com/v1/user/access_token_info",
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(userInfoCall);
      return userInfoCall;
    } else if (provider === "google") {
      const userInfoCall = await axios({
        url: "https://www.googleapis.com/oauth2/v1/tokeninfo",
        method: "GET",
        params: { access_token: accessToken },
        headers: {
          accept: "application/json",
          // authorization: accessToken,
        },
      });
      // console.log(userInfoCall);
      return userInfoCall;
    }
  },
};
