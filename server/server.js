const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")));
// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// All Public Routers
app.use("/api/header", require("./routers/headerRoute"));
app.use("/api/services", require("./routers/servicesRoute"));
app.use("/api/about-us", require("./routers/aboutRoute"));
app.use("/api/portfolio", require("./routers/portfolioRoute"));
app.use("/api/service-plan", require("./routers/servicePlanRoute"));
app.use("/api/testimonial", require("./routers/testimonialRoute"));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome To Our Application",
  });
});

const PORT = process.env.PORT || 4000;
const DATABASE_URL =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost/zamzam";

// 404 not found handler
app.use((req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
});

// common error handler
app.use((err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);
  res.json(res.locals.error);
});

app.listen(PORT, () => {
  console.log(`SERVER is RUNNING ON PORT ${PORT}`);
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));
});
