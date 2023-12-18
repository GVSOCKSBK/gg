const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

db.connect((err) => {
    if (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    // Replace 'users' with your actual table name
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    db.query(query, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.send(`<h1>Welcome, ${username}!</h1>`);
        } else {
            res.send('<h1>Invalid credentials. Please try again.</h1>');
        }
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Replace 'users' with your actual table name
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

    db.query(query, [username, password], (err, results) => {
        if (err) throw err;

        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
