const router = require('express').Router();
const { User, Item, WishList } = require('../../../db/models');

router.post('/', async (req, res) => {
  const {user_id} = req.body
  try {
    const wishList = await WishList.findAll({where: {user_id}, raw: true, include: Item })
    res.json({wishList})
  } catch (error) {
    res.send(`Error while loading items! ${error}`)
  }
  
})

module.exports = router;
