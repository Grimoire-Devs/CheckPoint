const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  if (req.user) {
    return next();
  }
  const token = req.cookies.token;

  if (!token) {
    return res.json({ message: "Token Empty" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.json({ message: "Error!!" });
  }
};

module.exports = verifyUser;
