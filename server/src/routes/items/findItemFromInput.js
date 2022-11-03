const router = require('express').Router();
const { Op } = require('sequelize');
const { Category } = require('../../../db/models');
const { Item } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { value } = req.body;
  console.log('value: ', value);

  const foundItems = await Item.findAll({
    where: {
      title: {
        [Op.substring]: value,
      },
    },
    raw: true,
  });
  console.log('foundItems: ', foundItems);
  res.json(foundItems);
});

module.exports = router;
