import router from './routes/router';
import express from 'express';
let app = express();

app.use('/users', router.users);

app.listen(3000, () => {
  console.log('Running on port 3000');
});
