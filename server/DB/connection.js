const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/edureify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => {
    console.error(error.message);
  });