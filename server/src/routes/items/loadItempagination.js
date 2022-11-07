const router = require("express").Router();
const { Category } = require("../../../db/models");
const { Item } = require("../../../db/models");

router.post("/", async (req, res) => {
  console.log(req.body);
  const numItems = 5;
  const { page, category } = req.body;
  const fixNumberCategory = +category;
  const nextitems = page * numItems - numItems;
  const items = await Item.findAll({
    where: { category_id: fixNumberCategory },
    raw: true,
    offset: nextitems,
    limit: numItems,
  }); // { offset: 5, limit: 5 }
  const itemsNum = await Item.findAll({
    where: { category_id: fixNumberCategory },
    raw: true,
  });
  res.json({ items, length: itemsNum.length });
});

module.exports = router;
