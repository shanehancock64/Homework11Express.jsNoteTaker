const express = require('express');


// Initialize the application and create a port.
const app = express();
const PORT = process.env.PORT || 3001;

// Setup body parsing and static folder. 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Create a list of routes. 

// Get Route
app.get('/api/notes', (req, res) => {
  res.json({message: 'success'});
});

// Post Route


// Delete Route
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));