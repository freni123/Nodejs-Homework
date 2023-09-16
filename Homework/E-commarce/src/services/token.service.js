const jwt = require("jsonwebtoken");
const { token } = require("../models");
const config = require("../config/config");

/** Create token in jsonwebtoken */
const createToken = async (reqBody) => {
  let payload = {
    ...reqBody,
    // expire_time: reqBody.expire_time.unix(),
  };

  return jwt.sign(payload, config.jwt.secret_key);
};

/**Save token in our database*/
const saveToken = async (reqBody) => {
  // return reqBody.token;
  return token.findOneAndUpdate(
    { user: reqBody.user },
    {
      $set: {
        ...reqBody,
      },
    },
     { new: true, upsert: true }
  );
};

module.exports = {
  createToken,
  saveToken,
};
