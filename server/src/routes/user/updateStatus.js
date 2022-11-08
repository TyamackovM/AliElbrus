const router = require('express').Router();
const { User } = require('../../../db/models');

router.post('/', async (req, res) => {
  console.log(req.body);
  const { newStatus, email } = req.body;
  // try {
  const user = await User.update({ status: newStatus }, { where: { email } });
  //   if (user) {
  //     res.json(user);
  //   } else {
  //     res.json('NO');
  //   }
  // } catch (error) {
  //   res.send(`Error while loading items! ${error}`);
  // }
});

module.exports = router;
