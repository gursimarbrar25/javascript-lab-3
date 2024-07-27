// Importing the express module
const express = require('express');
// Creating an instance of express
const app = express();
// JSON request bodies
app.use(express.json());

// Placeholder data 
let members = require('./data/data.json');

// CREATE - POST method to add a new member
app.post('/members', (req, res) => {
    const newMember = req.body;
    members.push(newMember);
    res.status(201).send(newMember);
});

// READ - GET method to get all members
app.get('/members', (req, res) => {
    res.json(members);
});

// UPDATE - PUT method to update a member by ID
app.put('/members/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedMember = req.body;
    members = members.map(member => member.id === id ? updatedMember : member);
    res.send(updatedMember);
});

// DELETE - DELETE method to remove a member by ID
app.delete('/members/:id', (req, res) => {
    const id = parseInt(req.params.id);
    members = members.filter(member => member.id !== id);
    res.status(204).send();
});

// Setting the port number
const PORT = 3000;
// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});