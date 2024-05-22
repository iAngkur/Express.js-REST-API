import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js'
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/CRMdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

