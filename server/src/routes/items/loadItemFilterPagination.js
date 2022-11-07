const router = require("express").Router();
const { Category } = require("../../../db/models");
const { Item } = require("../../../db/models");
const { Op } = require('sequelize');


router.post("/", async (req, res) => {
  console.log('req.body',req.body);
  const numItems = 5;
  const { page, value } = req.body;
  // const fixNumberCategory = +category;
  const nextitems = page * numItems - numItems;
  const items = await Item.findAll({
    where: {
        title: {
          [Op.substring]: value,
        },
        ...check,
      },
    raw: true,
    offset: nextitems,
    limit: numItems,
  }); // { offset: 5, limit: 5 }
  const itemsNum = await Item.findAll({
    where: {
        title: {
          [Op.substring]: value,
        },
        ...check,
      },
    raw: true,
  });
  console.log(items);
  res.json({ items, length: itemsNum.length });
});

module.exports = router;