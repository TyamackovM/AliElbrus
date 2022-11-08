const router = require('express').Router();
const { Item } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { newItem } = req.body;
  await Item.create(newItem);
  res.end();
});

module.exports = router;
