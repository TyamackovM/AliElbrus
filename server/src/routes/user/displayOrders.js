const router = require('express').Router();
const { User, Item, Cart, Order } = require('../../../db/models');

router.post('/', async (req, res) => {
  
  const {user_id} = req.body
  console.log("USER_ID", req.body);
  try {
    const orders = await Order.findAll({where: {user_id}, raw: true, include: Item })
    console.log("ORDERS", orders);
    res.json({orders})
  } catch (error) {
    res.send(`Error while loading items! ${error}`)
  }
  
})


module.exports = router;