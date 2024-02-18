const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://foo:bar@192.168.27.199:3306/Your_mom');

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = (req, res) => {
    Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json({articles });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}

const getArticleBySlug = (req, res) => {
    const slug = req.params.slug;
    Article.findOne({ where: { slug: req.params.slug } })
        .then(article => {
            console.log(article);
            return res.status(200).json({ article });
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
}

module.exports = {
    getAllArticles,
    getArticleBySlug
}