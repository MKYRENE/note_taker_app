const router = require('./routes/routes.js')
const api_routes =require('./routes/API/api.js')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api_routes);
app.use('/', router);

// API routes
// Define your API routes here for getting, saving, and deleting notes

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});