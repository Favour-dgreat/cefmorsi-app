const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const books = [
    { id: 1, title: 'If I Were a Mother', author: 'Chukie Morsi' },
    { id: 2, title: 'Being Established In The Faith', author: 'Chukie Morsi' }
];

const events = [
    { id: 1, title: 'Zoom Teaching November Series', date: '21st November, 2023', time: '6:30pm UK', location: 'Zoom' },
    // Add more events here
];

const magazines = [
    { id: 1, title: 'The Triumph of Every Place', issue: 'AD Issue 1' },
    // Add more magazines here
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/events', (req, res) => {
    res.json(events);
});

app.get('/magazines', (req, res) => {
    res.json(magazines);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
