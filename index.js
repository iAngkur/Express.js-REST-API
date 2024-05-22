import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'


const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

