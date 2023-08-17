const express = require("express");
const router = express.Router();


//All the routes in the system.
router.get("/", (req, res) => {
  res.send("Hello World");
});








module.exports = router;
