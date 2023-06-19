// import express and route

import express from "express";

// create express and route

const app = express();
app.use(express.json());

const nonces = {};

// create a get route

app.get("/", (req, res) => {
  res.send({ nonce: nonces[req.query.id] ? nonces[req.query.id] : 0 });
});

// create a post route

app.post("/", (req, res) => {
  console.log(req.body.id);

  if (nonces[req.body.id] === undefined) {
    // 최초 요청시 nonce는 1이어야 합니다.
    if (req.body.nonce !== 1) {
      res.send({ error: "First nonce must be 1" });
      return;
    }
  } else {
    // nonce는 1씩 증가해야 합니다.
    if (nonces[req.body.id] + 1 !== req.body.nonce) {
      res.send({ error: "Nonce must be incremented by 1" });
      return;
    }
  }

  nonces[req.body.id] = req.body.nonce;

  res.send(req.body);
});

// listen to ip 127.0.0.1 and port 3000

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening");
});
