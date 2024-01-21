const app = require("express")();
const user = require("./user.js");
const auth = require("./auth.js");

app.use("/auth", auth);
app.use("/user", user);

module.exports = app