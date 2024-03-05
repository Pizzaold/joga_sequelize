const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:qwerty@localhost:3306/joga_sequelize"
);

const models = require("../../models");

const createArticle = (req, res) => {
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then((article) => {
        console.log(article);
        return res.status(200).json({ message: "Article created successfully", newArticle });
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
}

const updateArticle = (req, res) => {
    const method = req.method;

    if (method === 'GET') {
        const id = req.params.id;
        models.Article.findByPk(id)
            .then((article) => {
                if (!article) {
                    return res.status(404).json({ message: "Article not found" });
                }
                return res.status(200).json({ article });
            })
            .catch((err) => {
                res.status(500).send(err.message);
            });
    } else if (method === 'POST') {
        const id = req.params.id;
        const { name, slug, image, body, authorId } = req.body;

        models.Article.update(
            {
                name: name,
                slug: slug,
                image: image,
                body: body,
                published: new Date().toISOString().slice(0, 19).replace('T', ' '),
                AuthorId: authorId
            },
            {
                where: { id: id }
            }
        )
        .then((result) => {
            if (result[0] === 0) {
                return res.status(404).json({ message: "Article not found" });
            }
            return res.status(200).json({ message: "Article updated successfully" });
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}

const deleteArticle = (req, res) => {
    const id = req.params.id;
    models.Article.destroy({
        where: { id: id }
    })
    .then((result) => {
        if (result === 0) {
            return res.status(404).json({ message: "Article not found" });
        }
        return res.status(200).json({ message: "Article deleted successfully" });
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
}


module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};