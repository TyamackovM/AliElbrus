const router = require('express').Router();
const { Op } = require('sequelize');
const { Category } = require('../../../db/models');
const { Item } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { value, tag } = req.body;
  console.log('req.body: ', req.body);
  const obj = { color: tag };

  if (tag) {
    const findItems = await Item.findAll({
      where: {
        title: {
          [Op.substring]: value,
        },
        ...obj,
      },
      raw: true,
    });
    // console.log('findItems: ', findItems);
    res.json(findItems);
  } else {
    const findItems = await Item.findAll({
      where: {
        title: {
          [Op.substring]: value,
        },
      },
      raw: true,
    });
    // console.log('findItems: ', findItems);
    res.json(findItems);
  }
});

module.exports = router;
