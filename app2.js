// Importing the express module
const express = require('express');
//file system to read json file
const fs = require('fs');
// Creating an instance of express
const app = express();

// Defining a get route to display JSON data
app.get('/members', (req, res) => {
    // Reading the JSON file
    fs.readFile('./data/data.json', 'utf-8', (err, data) => {
        if (err) {
            // Sending a 500 error response if there is an issue reading the file
            res.status(500).send('Error reading file');
        } else {
            // Parsing the JSON data and sending it as a response
            res.json(JSON.parse(data));
        }
    });
});

// Setting the port number
const PORT = 3000;
// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});