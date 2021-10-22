const express = require('express');
const jwt = require('jsonwebtoken');
const service = require('../services/userService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
};

const router = express.Router();

const validateToken = (token) => {
  if (token === undefined || token === '') {
    return { err: { message: 'Token not found' }, status: 401 };
  }
  try {
    jwt.verify(token, secret);
  } catch (e) {
    console.log(e.message);
    return { err: { message: 'Expired or invalid token' }, status: 401 };
  }
  return {};
};

router.post('/', async (req, res) => {
  const {addressInfo, firstName, lastName, password} = req.body;
  const result = await service.createNewUser(addressInfo, firstName, lastName, password);
  res.status(201).json(result);
});

module.exports = router;