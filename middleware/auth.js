const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { token } = req.headers;

  if (token) {
    try {
      const decode = jwt.verify(token, "pawan_kumar");

      if (decode) {
        req.body.userId = decode.userId
        next();
      } else {
        res.send({ message: "Please Login !!!" });
      }
    } catch (error) {
      res.send({ err: error });
    }
  } else {
    res.send({ message: "Please Login !!!" });
  }
};

module.exports = {
  auth,
};
