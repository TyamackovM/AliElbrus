const router = require('express').Router();
const { User, Item, Cart } = require('../../../db/models');

router.post('/', async (req, res) => {
  
  const {user_id} = req.body
  try {
    const cart = await Cart.findAll({where: {user_id}, raw: true, include: Item })
    
    res.json({cart})
  } catch (error) {
    res.send(`Error while loading items! ${error}`)
  }
  
})

router.delete('/', async (req, res) => {
  
  const {user_id, item_id} = req.body
  
    try {
      await Cart.destroy ({where: {user_id, item_id}})
      const cart = await Cart.findAll({where: {user_id}, raw: true, include: Item })
      res.json({cart})
    } catch (error) {
      res.send(`Error while loading items! ${error}`)
    }
  
  
})

module.exports = router;
