require("dotenv").config();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const md5 = require("md5");
const { Users } = require("../models");

const secret = fs.readFileSync("jwt.evaluation.key", {
  encoding: "utf8",
  flag: "r",
});

const createUserByAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userEmail = await Users.findOne({
      where: { email },
    });
    const hashPass = md5(password);
    if (userEmail)
      return res.status(409).json({ message: "User already registered" });

    const createdUser = await Users.create({
      name,
      email,
      password: hashPass,
      role,
    });
    const { id } = createdUser;

    const jwtConfig = {
      expiresIn: "365d",
      algorithm: "HS256",
    };

    const token = jwt.sign({ data: email }, secret, jwtConfig);

    return res.status(201).json({ id, name, email, role, token });
  } catch (e) {
    console.log(e.message);
  }
};

const getAllUsers = async (_req, res) => {
  const usersList = await Users.findAll();

  return res.status(200).json(usersList);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const users = await Users.destroy({ where: { id } });

  return res.status(204).end();
};

module.exports = {
  createUserByAdmin,
  getAllUsers,
  deleteUser,
};
