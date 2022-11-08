const router = require('express').Router();
const { User, Item, Cart } = require('../../../db/models');

router.post('/', async (req, res) => {
  
  const {user_id} = req.body
  try {
    const cart = await Cart.findAll({where: {user_id}, raw: true, include: Item })
    console.log("wwwwwwwww",cart);
    res.json({cart})
  } catch (error) {
    res.send(`Error while loading items! ${error}`)
  }
  
})

module.exports = router;
