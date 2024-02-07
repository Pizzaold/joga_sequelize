const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://foo:bar@192.168.27.199:3306/joga_sequliize');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Kurat Miku:', err);
    });

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});