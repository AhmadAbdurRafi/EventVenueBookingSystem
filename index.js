const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

app.listen(3001, () => {
  console.log("Server Running");
});
