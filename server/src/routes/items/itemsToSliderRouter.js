const router = require('express').Router();
const { Category } = require('../../../db/models');
const { Item } = require('../../../db/models');

router.get('/', async (req, res) => {
  const items = await Category.findAll({ where: { id: 1 }, raw: true, include: Item })
  res.json(items)  
})

module.exports = router;
