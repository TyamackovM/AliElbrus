const router = require('express').Router();
const { Category } = require('../../../db/models');
const { Item } = require('../../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const items = await Category.findAll({ where: { id }, raw: true, include: Item })
  res.json(items)  
})

module.exports = router;
