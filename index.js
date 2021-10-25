const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const userController = require('./src/controllers/userController');
const loginController = require('./src/controllers/loginController');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/user', userController);
app.use('/login', loginController);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening in port ${PORT}`));

module.exports = app;
