const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

db.on('error', error => {
  console.log('Connection Error', error);
});

db.once('open', () => {
  console.log('Database connected..');
});
