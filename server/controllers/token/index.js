require("dotenv").config();
const axios = require("axios");
module.exports = {
  generateAccessToken: async (code, provider) => {
    const config = {
      github: {
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
      },
      kakao: {
        url: "https://kauth.kakao.com/oauth/token",
        method: "POST",
        headers: {
          accept: "application/json",
        },
        params: {
          grant_type: "authorization_code",
          client_id: process.env.KAKAO_CLIENT_ID,
          redirect_uri: "https://server.cocodus.site/user/signup/kakao",
          code: code,
          client_secret: process.env.KAKAO_CLIENT_SECRET,
        },
      },
      google: {
        url: "https://www.googleapis.com/oauth2/v4/token",
        method: "POST",
        headers: {
          accept: "application/json",
        },
        params: {
          code,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          redirect_uri: "https://server.cocodus.site/user/signup/google",
          grant_type: "authorization_code",
        },
      },
    };
    const tokenCall = await axios(config[provider]).catch((err) =>
      console.log(err)
    );
    const accessToken = tokenCall.data.access_token;
    return accessToken;
  },

  isAuthorized: async (accessToken, provider) => {
    const config = {
      github: {
        url: "https://api.github.com/user",
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `token ${accessToken}`,
        },
      },
      kakao: {
        url: "https://kapi.kakao.com/v1/user/access_token_info",
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      },
      google: {
        url: "https://www.googleapis.com/oauth2/v1/tokeninfo",
        method: "GET",
        params: { access_token: accessToken },
        headers: {
          accept: "application/json",
        },
      },
    };
    const userInfoCall = await axios(config[provider]).catch((err) =>
      console.log(err)
    );
    if (userInfoCall.data) {
      if (provider === "github") {
        if (userInfoCall.data)
          return provider + "+" + userInfoCall.data.html_url.split("/")[3];
        else return;
      }
      if (provider === "google") {
        if (userInfoCall.data)
          return provider + "+" + userInfoCall.data.email.split("@")[0];
        else return;
      }
      if (provider === "kakao") {
        if (userInfoCall.data) return provider + "+" + userInfoCall.data.id;
        else return;
      }
    }
    return;
  },
};
