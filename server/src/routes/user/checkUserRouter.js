const router = require('express').Router();
const { User } = require('../../../db/models');

router.get('/', (req, res) => {
  const { newUser, newUserEmail, newUserId, newUserStatus } = req.session;
  if (req.session.newUser) res.json({ login: newUser, email: newUserEmail, id: newUserId, status: newUserStatus });
  res.end();
})

module.exports = router;
