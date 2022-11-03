require('dotenv').config();

const ws = require('ws');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const regRouter = require('./routes/user/regRouter');
const loginRouter = require('./routes/user/loginRouter');
const checkUserRouter = require('./routes/user/checkUserRouter');
const logoutRouter = require('./routes/user/logoutRouter');
const getItemsRouter = require('./routes/items/getItemsRouter');
const editPassword = require('./routes/user/editPassword');
const editEmail = require('./routes/user/editEmail');
const itemsToSliderRouter = require('./routes/items/itemsToSliderRouter');
const checkItem = require('./routes/items/findItemFromInput');
const addItemToWishList = require('./routes/user/addItemToWishList');


const app = express();

const { PORT, SESSION_SECRET } = process.env;
const CURRENT_PORT = PORT ?? 4000;

app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: 'SessionAliElbrus',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'vasdg34erh35h24g31f23g3gh3hth',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/registr', regRouter);
app.use('/login', loginRouter);
app.use('/check', checkUserRouter);
app.use('/logout', logoutRouter);
app.use('/get-items', getItemsRouter);
app.use('/edit-password', editPassword);
app.use('/edit-email', editEmail);
app.use('/find-slider', itemsToSliderRouter);
app.use('/check-item', checkItem);
app.use('/add-item-to-wish-list', addItemToWishList);


const httpServer = app.listen(CURRENT_PORT ?? 5000, () => {
  console.log(`Server started ${CURRENT_PORT}`);
});

const wsServer = new ws.WebSocketServer({ server: httpServer });
wsServer.on('connection', (currentClient) => {
  currentClient.on('message', (data) => {
    const utfMessage = data.toString('utf-8');
    const jsonMess = JSON.parse(utfMessage);
    console.log(jsonMess);
    wsServer.clients.forEach((oneClient) => {
      oneClient.send(JSON.stringify(jsonMess));
    });
  });
});

