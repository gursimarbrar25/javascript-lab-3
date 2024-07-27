// Importing the express module
const express = require('express');
// Creating an instance of express
const app = express();

//  a simple get route for the home page
app.get('/', (req, res) => {
    // Sending an HTML response with group names
    res.send('<h1>Group Members</h1><ul><li>Navjot</li><li>Arsh</li><li>Gursimar</li></ul>');
});

// Setting of port number
const PORT = 3000;
// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
