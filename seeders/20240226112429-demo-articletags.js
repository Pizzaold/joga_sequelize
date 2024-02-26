"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "10",
          tagId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "10",
          tagId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "11",
          tagId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "11",
          tagId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "12",
          tagId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "12",
          tagId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: "12",
          tagId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("ArticleTags", null, {});
  },
};
