const router = require('express').Router();
const { Category, Item } = require('../../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params
  // const items = await Category.findAll({ where: { id }, raw: true, include: Item })
  const items = await Item.findAll({ where: { category_id: id }, raw: true })
  res.json(items)  
})

module.exports = router;
