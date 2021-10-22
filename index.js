const express = require('express');
const bodyparser = require('body-parser');

const userController = require('./src/controllers/userController');

const app = express();
app.use(bodyparser.json());
app.use('/user', userController);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening in port ${PORT}`));

module.exports = app;
