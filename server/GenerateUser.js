const mongoose = require('mongoose');
const User = require('./models/User');
const crypto = require('crypto');
require('dotenv').config();

mongoose.connect(process.env.MONGO_AUTH, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', async function() {
  console.log('Connected to MongoDB Atlas');

  const key = crypto.randomBytes(32).toString('hex');
  const user = new User({ accessKey: key });

  await user.save();
  console.log('New user created');
  console.log('Access Key:', key);
});
