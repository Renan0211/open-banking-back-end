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

router.get('/:id/bank-statement', async (req,res) => {
  const {id} = req.params;
  const result = await service.getUserBankStatement(id);
  if (result.err) {
    const {err, status} = result;
    return res.status(status).json(err);
  }
  res.status(200).json(result);
})

module.exports = router;