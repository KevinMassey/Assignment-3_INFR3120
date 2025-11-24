const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const indexRoutes = require('./routes/index');

//Sets Ejs as the default engine
app.set('view engine', 'ejs');

// Enables EJS layouts
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder.
app.use(express.static('public'));

app.use('/', indexRoutes);

//Loads environment variables from the file.
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use the PORT from environment variables (for hosting) or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));