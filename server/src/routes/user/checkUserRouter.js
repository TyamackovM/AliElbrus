const router = require('express').Router();
const { User } = require('../../../db/models');

router.get('/', (req, res) => {
  const { newUser, newUserEmail, newUserId } = req.session;
  if (req.session.newUser) res.json({ login: newUser, email: newUserEmail, id: newUserId });
  res.end();
})

module.exports = router;
