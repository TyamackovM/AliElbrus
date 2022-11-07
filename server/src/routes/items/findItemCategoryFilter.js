const router = require('express').Router();
const { Item } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { check } = req.body;

    const findItems = await Item.findAll({
      where: {
        ...check,
      },
      raw: true,
    });
    res.json(findItems);
});

module.exports = router;
