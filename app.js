const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();

const contactsRouter = require('./routes/api/contacts')
const usersRouter = require('./routes/api/userRoutes');
const { date } = require('./utils');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
mongoose
  .connect(process.env.BD_URL)
  .then((con) => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });
app.use(cors())
app.use(express.json())

app.use("/api/users", usersRouter);
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    Date: date(),
    message: err.message,
    stack: err.stack,
  });
})

module.exports = app
