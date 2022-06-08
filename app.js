const express = require("express");
const postRouter = require("./routes/post");

const app = express();

app.get("/", (req, res) => {
  res.send("test express");
});

app.get("/posts", (req, res) => {
  res.json({
    success: true,
    msg: "success",
    list: [
      { id: 1, content: "hello" },
      { id: 2, content: "hi" },
    ],
  });
});

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("server start");
});
