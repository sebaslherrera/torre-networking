const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const torre = require("./routes/torre");

app.use("/api", torre);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
