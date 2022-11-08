const router = require("express").Router();
const { Category } = require("../../../db/models");
const { Item } = require("../../../db/models");
const { Op } = require('sequelize');


router.post("/", async (req, res) => {
  console.log('req.body',req.body);
  const numItems = 5;
  const { page, value, check } = req.body;
  const check2 = check.check
  console.log("check2", check2);
  // const fixNumberCategory = +category;
  const nextitems = page * numItems - numItems;
  const items = await Item.findAll({
    where: {
        title: {
          [Op.substring]: value,
        },
        ...check2,
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
        ...check2,
      },
    raw: true,
  });
  console.log('items', items);
  res.json({ items, length: itemsNum.length });
});

module.exports = router;