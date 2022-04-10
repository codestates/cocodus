const { isError } = require("util");
const { User, Post } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = {
  saveUserInfo: async (data) => {
    const { id, accessToken, name, roadAddress, location, lat, long } = data;
    // let validation = await isAuthorized(accessToken, id.split("+")[0]);
    // if (!validation) {
    //   //여기서 확인
    // }
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
  deleteUserInfo: async (id) => {
    let isMember = await User.findOne({ where: { id } });
    if (isMember) {
      let temp = await User.destroy({ where: { id } });
      if (temp) return true;
      else false;
    } else false;
  },
  sortDist: async (myDist, km = 30) => {
    Array.prototype.mergeSort = function (cal = (a, b) => a - b, arr = this) {
      const downtier = (arr) =>
        arr.length <= 1
          ? arr
          : uptier(
              downtier(arr.slice(0, parseInt(arr.length / 2))),
              downtier(arr.slice(parseInt(arr.length / 2)))
            );
      const uptier = (left, right, arr = [], leftIdx = 0, rightIdx = 0) => {
        while (leftIdx + rightIdx < left.length + right.length)
          if (leftIdx >= left.length) arr.push(right[rightIdx++]);
          else if (
            rightIdx >= right.length ||
            cal(left[leftIdx], right[rightIdx]) < 0
          )
            arr.push(left[leftIdx++]);
          else arr.push(right[rightIdx++]);
        return arr;
      };
      return downtier(arr);
    };
    let data = await Post.findAll({
      attributes: ["id", "lat", "long"],
    }).then((a) => a.map((b) => b.dataValues));
    // let myDist = { lat: "37.564761688865", long: "126.98342935764" };
    const accuracy = 100000; //정확도 약 1m오차
    const limitKM = km;
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
        .mergeSort((a, b) => {
          let m = changer(a.lat, a.long);
          let n = changer(b.lat, b.long);
          return m[0] ** 2 + m[1] ** 2 - (n[0] ** 2 + n[1] ** 2);
        });
      return result.map((x) => x.id);
    };

    return distOrderId(data, myDist);
  },
};
