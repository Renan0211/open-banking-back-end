const express = require('express');
const jwt = require('jsonwebtoken');
const service = require('../services/loginService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
};

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const result = await service.login(email, password);
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  const token = jwt.sign({ data: result }, secret, jwtConfig);
  res.status(200).json({ token });
});

module.exports = router;