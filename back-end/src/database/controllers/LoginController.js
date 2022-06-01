require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    const userEmail = await Users.findAll({ where: { email } });
    
    if (userEmail.length === 0) return res.status(404).json({ message: 'User not found ' });
    const [{ name, role }] = userEmail;
    const jwtConfig = {
      expiresIn: '365d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: email }, secret, jwtConfig);

    return res.status(200).json({ token, name, email, role });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { loginController };
