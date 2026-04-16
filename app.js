const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("grützki!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}!`);
});
