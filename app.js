const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
const personsRouter = require("./controllers/persons");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => logger.info("connected to MongoDB"))
  .catch((error) => {
    logger.info("error connecting to MongoDB", error.message);
  });

// morgan.token("type", function (req, res) {
//   return JSON.stringify(req.body.content);
// });
// app.use(morgan(":method :url :status :response-time ms :type"));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/persons", personsRouter);
app.get("/info", (req, res) => {
  Person.find({}).then((persons) => {
    res.send(
      `<p>phonebook has info for ${
        persons.length
      } people </p><p>${new Date()}</p>`
    );
  });
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
