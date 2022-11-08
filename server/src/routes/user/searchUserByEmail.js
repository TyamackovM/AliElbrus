const router = require('express').Router();
const { User } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      res.json(user);
    } else {
      res.json('NO');
    }
  } catch (error) {
    res.send(`Error while loading items! ${error}`);
  }
});

module.exports = router;
