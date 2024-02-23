const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../models');

const getAuthorArticles = (req, res) => {
    models.Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json({articles });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}

module.exports = {
}