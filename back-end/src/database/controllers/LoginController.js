require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs')
const { Users } = require('../models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    const userEmail = await Users.findAll({ where: { email } });
    
    if (userEmail.length === 0) return res.status(404).json({ message: 'User not found ' });
    const [{ name, role, id }] = userEmail;
    const jwtConfig = {
      expiresIn: '365d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: email }, secret, jwtConfig);

    return res.status(200).json({ token, name, email, role, id });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { loginController };
