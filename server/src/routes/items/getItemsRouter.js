// const router = require('express').Router();
// const { Category, Item, WishList } = require('../../../db/models');

// router.get('/:id', async (req, res) => {
//   //console.log(req.session);
//   const { id } = req.params
//   // const items = await Category.findAll({ where: { id }, raw: true, include: Item })
//   const items = await Item.findAll({ where: { category_id: id }, raw: true })
//   const likes = await WishList.findAll({where: { user_id: req.session.newUserId}, raw: true })
//   const likedItems = items.map(item => {
//     likes.forEach(like => {
//       if (Object.values(like).includes(item.id)) {
//         item.liked = true;
//       }
//     });
//     return item;
//   })
//   console.log('LIKED ITEMS', likedItems);
//   res.json(likedItems)  
// })

// module.exports = router;
