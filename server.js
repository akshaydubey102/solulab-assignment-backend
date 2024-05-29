import 'dotenv/config';
import app from './src/app.js';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('database connected');
  })
  .catch(() => {
    console.log('error in database connectivity');
  });

app.listen(process.env.PORT || 8080, () => {
  console.log('server is listening at https://localhost:8080');
});
