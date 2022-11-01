const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../../db/models');

router.post('/', async (req, res) => {
  const { login, email, password } = req.body
  try {
    const hash = await bcrypt.hash(password, 10);
     const newUser = await User.create({ login, email, password: hash })
     req.session.newUser = newUser.login;
     req.session.newUserEmail = newUser.email;
     req.session.newUserId = newUser.id;
     req.session.save(() => {
      res.json({ login: newUser.login, email: newUser.email, id: newUser.id } );
    });    
  } catch (error) {
    res.send(`Ошибка регистрации нового пользователя! ----> ${error}`);
  }
})

module.exports = router;
