const router = require('express').Router();
// const { Category } = require('../../../db/models');
const { Item } = require('../../../db/models');

router.get('/', async (req, res) => {
  const getFields = await Item.findByPk(1, { raw: true });
  console.log('getFields: ', getFields);
  res.json(getFields);
});

module.exports = router;
