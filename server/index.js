const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const routesRoute = require("./routes/route.js");
require("dotenv").config();
//-------------------------

const app = express();
app.use(cors());
app.use(cookieparser());
app.use(express.json());

app.use("/routes", routesRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening at port", process.env.PORT);
});
