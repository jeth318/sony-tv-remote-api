import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router.js';

const { urlencoded, json } = bodyParser;
const port = process.env.PORT || 6677;
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});

export default app;
