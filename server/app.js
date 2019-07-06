/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
import express from "express"; 

const app = express();

app.use((req, res) => {
    res.end("This is the server");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`The server is running here ${port} ...`)
});

export default app;