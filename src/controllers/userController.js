const express = require('express');
const jwt = require('jsonwebtoken');
const service = require('../services/userService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
};

const router = express.Router();

router.post('/', async (req, res) => {
  const {addressInfo, firstName,email, lastName, password} = req.body;
  const result = await service.createNewUser(addressInfo, firstName, lastName, email, password);
  if (result.err) {
    const {err, status} = result;
    return res.status(status).json(err);
  }
  const token = jwt.sign({ data: result }, secret, jwtConfig);
  res.status(201).json({token});
});

router.get('/bank-statement', async (req,res) => {
  const {authorization} = req.headers;
  try {
    const payload = jwt.verify(authorization, secret);
    const result = await service.getUserBankStatement(payload.data.id);
    if (result.err) {
      const {err, status} = result;
      return res.status(status).json(err);
    }
    res.status(200).json(result);
  } catch (e) {
    res.status(401).json({message: 'Token invalid'});
  }
});

router.get('/balance', async(req,res) => {
  const {authorization} = req.headers;
  try {
    const payload = jwt.verify(authorization, secret);
    const result = await service.getUserBalance(payload.data.id);
    if (result.err) {
      const {err, status} = result;
      return res.status(status).json(err);
    }
    res.status(200).json(result);
  } catch (e) {
    res.status(401).json({message: 'Token invalid'});
  }
});

module.exports = router;