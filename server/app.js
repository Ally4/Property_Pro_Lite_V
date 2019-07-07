/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import express from "express";
import bodyParser from 'body-parser';
import router from "./routers/routers";


const app = express();

// app.use((req, res) => {
//     res.end("This is the server");
// });


app.use(express.json());
app.use(bodyParser.json());

 app.use('/api/v1/auth/', router);

router.post('/signup', router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`The server is running here ${port} ...`)
});

export default app;