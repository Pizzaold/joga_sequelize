const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://foo:bar@192.168.21.158:3306/Your_mom');

const models = require('../models');

const getAllArticles = (req, res) => {
    models.Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json({articles });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [{
            model: models.Author
        }],
        })
        .then(article => {
            console.log(article);
            return res.status(200).json({ article });
        })
        .catch(err => {
            res.status(500).send(err.message);
        })
}

module.exports = {
    getAllArticles,
    getArticleBySlug
}