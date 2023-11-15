const express = require("express");
const dotenv = require("dotenv");
const postsRouter = require("./routers/posts");
const multer = require("multer");

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});