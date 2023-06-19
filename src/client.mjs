// import axios

import axios from "axios";

// create a post request http:127.0.0.1:3000

let res = await axios.post("http://127.0.0.1:3000", {
  id: "user1",
  nonce: 0,
});
console.log(res.data); // Error

res = await axios.post("http://127.0.0.1:3000", {
  id: "user1",
  nonce: 1,
});
console.log(res.data); // Success

res = await axios.post("http://127.0.0.1:3000", {
  id: "user1",
  nonce: 1,
});
console.log(res.data); // Error

res = await axios.post("http://127.0.0.1:3000", {
  id: "user1",
  nonce: 2,
});
console.log(res.data); // Success

res = await axios.get("http://127.0.0.1:3000/?id=user1");
console.log(res.data);
