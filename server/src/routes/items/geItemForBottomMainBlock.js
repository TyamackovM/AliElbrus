const router = require('express').Router();
// const { Category } = require('../../../db/models');
const { Item, Sequelize } = require('../../../db/models');

// function getShuffledArray(arr) {
//   const newArr = arr.slice()
//   for (let i = newArr.length - 1; i > 0; i--) {
//     const rand = Math.floor(Math.random() * (i + 1));
//     [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
//   }
//   return newArr
// };

// router.get('/', async (req, res) => {
//   try {
//     const getDresses = await Item.findAll({ where: { category_id: 1 }, raw: true });
//     if(getDresses) {
//       res.json(getShuffledArray(getDresses))
//     } 
//   } catch (error) {
//     console.log('error: ', error);    
//   }
// });

// module.exports = router;

function getRandomCategory() {
  const categoriesQuantity = 26
  const getRandomCategory = Math.floor(Math.random() * (26 - 1) + 1)
  return getRandomCategory
}
router.get('/', async (req, res) => {
  let counter = 0
  let result
  while(counter <= 5) {
    counter++
    const res = await Item.findAll({ where: { category_id: getRandomCategory() }, raw: true, order: Sequelize.literal(
      4
      ), limit: 
      10
       });
       result = res
      }
      console.log('result: ', result);
      res.json(result)







  // try {
  //   const getDresses = await Item.findAll({ where: { category_id: 1 }, raw: true });
  //   if(getDresses) {
  //     res.json(getShuffledArray(getDresses))
  //   } 
  // } catch (error) {
  //   console.log('error: ', error);    
  // }
});

module.exports = router;
