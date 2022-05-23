const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//initialize app and create port
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//API ROUTES
app.use('/api', apiRoutes);

//HTML ROUTES
app.use('/', htmlRoutes);

//start server on the PORT
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

