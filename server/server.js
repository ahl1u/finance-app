require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;
// Import user routes
const userRoutes = require('./Routes/UserRoutes'); // adjust the path if necessary

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_AUTH, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
