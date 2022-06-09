require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs')
const md5 = require('md5');
const { Users } = require('../models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await Users.findOne({
      where: { email },
    });
    const role = 'customer';
    const hashPass = md5(password);
      if (userEmail) return res.status(409).json({ message: 'User already registered' });

      const createdUser = await Users.create({ name, email, password: hashPass, role });
      const { id } = createdUser;

      const jwtConfig = {
        expiresIn: '365d',
        algorithm: 'HS256',
      };

      const token = jwt.sign({ data: email }, secret, jwtConfig);

      return res.status(201).json({ id, name, email, token });
  } catch (e) {
    console.log(e.message);
  }
};

const getAllSellers = async (_req, res) => {
  const getAllSellers = await Users.findAll({ where: { role: 'seller' } });

  return res.status(200).json(getAllSellers);
};

module.exports = {
  createUser,
  getAllSellers,
};
