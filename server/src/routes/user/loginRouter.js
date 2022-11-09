const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ where: { email }});
    const passCheck = await bcrypt.compare(password, user.password)
    if (passCheck) {
      req.session.newUser = user.login;
      req.session.newUserEmail = user.email;
      req.session.newUserId = user.id;
      req.session.newUserStatus = user.status;
      req.session.save(() => {
        res.json({ login: user.login, email: user.email, id: user.id, status: user.status } );
      })
    } else {
      res.json('PasswordNotDone');
    }
  } catch (error) {
    res.json('EmailNotDone');
  }
})

module.exports = router;
