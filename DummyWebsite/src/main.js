const express = require("express");
require('dotenv').config();
const path = require("path");
const initBootstrap = require("./public/bootstrap/bundle");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware cho static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mock Injection
initBootstrap()
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
