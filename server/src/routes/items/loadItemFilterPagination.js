const router = require("express").Router();
// const { Category } = require("../../../db/models");
const { Item } = require("../../../db/models");
const { Op } = require('sequelize');


router.post("/", async (req, res) => {
  const numItems = 5;
  const { page, value, check } = req.body;
  const check2 = check.check
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
  console.log('itemsNum', itemsNum.length);
  res.json({ items, length: itemsNum.length });
});

module.exports = router;