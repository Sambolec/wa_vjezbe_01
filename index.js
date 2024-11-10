const express = require('express');
const path = require('path');  // Required for res.sendFile()
const app = express();
const PORT = 3000;

// Route to serve the main page with an HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // HTML page for "/"
});

// Route to serve the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));  // HTML page for "/about"
});

// Route to serve users in JSON format
app.get('/users', (req, res) => {
    const users = [
        { id: 1, ime: 'Ivan', prezime: 'Horvat' },
        { id: 2, ime: 'Ana', prezime: 'Kovačić' },
        { id: 3, ime: 'Marko', prezime: 'Novak' }
    ];
    res.json(users);  // Send users in JSON format
});

// Start the server
app.listen(PORT, (error) => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});
