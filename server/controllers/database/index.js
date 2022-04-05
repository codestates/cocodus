const { User } = require("../../models");
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
};
