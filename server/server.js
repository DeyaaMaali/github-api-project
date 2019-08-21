const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());
// var cors = require("cors");
// app.use(cors());

app.use(function(req, res, next) {
  // this function is to solve that 2 files (server and react) running on differnt ports, they are different JavaScript origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Working fine");
});

app.get("/search/:s", (req, res, next) => {
  let x = encodeURIComponent(req.params.s);
  console.log(x);
  let l = `http://api.github.com/users/${x}/repos`;
  axios
    .get(l)
    .then(response => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch(error => {
      res.json("errors");
    });
});
const PORT = 8600;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
