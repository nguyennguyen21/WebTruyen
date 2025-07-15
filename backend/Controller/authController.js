// controllers/authController.js
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.register = async (req, res) => {
  const { Username, Email, Phone, PassWords } = req.body;

  try {
    const { Op } = require("sequelize");

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ Email }, { Phone }, { Username }],
      },
    });


    if (existingUser.Username === Username)
      return res.status(400).json({ message: "Username đã tồn tại" });
    if (existingUser.Email === Email)
      return res.status(400).json({ message: "Email đã được sử dụng" });
    if (existingUser.Phone === Phone)
      return res.status(400).json({ message: "sđt đã được sử dụng " });

    const hashedPassword = await bcrypt.hash(PassWords, 10);
    if (!/^\d{10}$/.test(Phone)) {
      return res
        .status(400)
        .json({ message: "Số điện thoại không hợp lệ (phải đủ 10 chữ số)" });
    }

    const newUser = await User.create({
      Username,
      Email,
      Phone,
      PassWords: hashedPassword,
    });

    res.status(201).json({ message: "Register success", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { Email, PassWords } = req.body;

  try {
    const user = await User.findOne({ where: { Email } });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(PassWords, user.PassWords);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.IdUser, email: user.Email, role: user.Roles },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user.IdUser, email: user.Email, role: user.Roles },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
