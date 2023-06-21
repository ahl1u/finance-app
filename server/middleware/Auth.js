const User = require('../models/User');

const auth = async (req, res, next) => {
  const accessKey = req.header('access-key');
  if (!accessKey) {
    return res.status(401).send('Access denied. No access key provided.');
  }

  const user = await User.findOne({ accessKey });
  if (!user) {
    return res.status(401).send('Access denied. Invalid access key.');
  }

  req.user = user; // put user data on the request object
  next();
}

module.exports = auth;
