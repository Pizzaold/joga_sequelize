const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../models');
const article = require('../models/article');

const getAllAuthors = (req, res) => {
    models.Article.findAll()
        .then(authors => {
            console.log(authors);
            return res.status(200).json({authors});
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}

const getAuthorById = (req, res) => {
    models.Author.findByPk(req.params.id)
        .then(author => {
            models.Article.findAll({
                where: {
                    author_id: req.params.id
                }
            })
        .then(articles => {
            return res.status(200).json({author, articles})
        })
    .catch(err => {
        res.status(500).send(err.message);
    });
})
}

module.exports = {
    getAllAuthors,
    getAuthorById
}