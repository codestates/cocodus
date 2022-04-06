const { User, Post } = require("../../models");
const { isAuthorized } = require("../token");
module.exports = {
  saveUserInfo: async (data) => {
    const { id, accessToken, name, roadAddress, location, lat, long } = data;
    let validation = await isAuthorized(accessToken, id.split("+")[0]);
    // console.log(validation);
    if (!validation) {
      //여기서 확인
    }
    let isMember = await User.findOne({ where: { id } });
    if (isMember) {
      await User.update(
        {
          name,
          roadAddress,
          accessToken,
          location,
          long,
          lat,
        },
        {
          where: { id },
          fields: [
            "name",
            "accessToken",
            "roadAddress",
            "location",
            "long",
            "lat",
          ],
        }
      );
      return "update";
    } else {
      User.create(
        {
          id,
          name,
          roadAddress,
          accessToken,
          location,
          long,
          lat,
        },
        {
          fields: [
            "id",
            "accessToken",
            "name",
            "roadAddress",
            "location",
            "long",
            "lat",
          ],
        }
      );
      return "create";
    }
  },
  findUserInfo: async (id) => {
    let isMember = await User.findOne({ where: { id } });
    return isMember;
  },
  sortDist: async (myDist) => {
    let data = await Post.findAll({ attributes: ["id", "lat", "long"] }).then(
      (a) => a.map((b) => b.dataValues)
    );
    // let myDist = { lat: "37.564761688865", long: "126.98342935764" };
    const accuracy = 100000; //정확도 약 1m오차
    const limitKM = 30;
    const limit = [
      parseInt((limitKM / 111) * accuracy),
      parseInt((limitKM / 91) * accuracy),
    ]; //위도 경도상 제한
    const changer = (lat, long, mylat = myDist.lat, mylong = myDist.long) => [
      Math.abs(parseInt(lat * accuracy) - parseInt(mylat * accuracy)),
      Math.abs(parseInt(long * accuracy) - parseInt(mylong * accuracy)),
    ]; //내 위치와의 차이 반환

    const distOrderId = (data) => {
      let result = data
        .filter((x) => {
          let temp = changer(x.lat, x.long);
          if (temp[0] < limit[0] && temp[1] < limit[1]) return true;
          else false;
        })
        .sort((a, b) => {
          let m = changer(a.lat, a.long);
          let n = changer(b.lat, b.long);
          return m[0] ** 2 + m[1] ** 2 - (n[0] ** 2 + n[1] ** 2);
        });
      return result.map((x) => x.id);
    };

    return distOrderId(data, myDist);
  },
};
