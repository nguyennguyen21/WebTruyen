const User = require("../Models/User");

exports.register = async (req, res) => {
  try {
    const { Username, Email, Phone, PassWords } = req.body;

    if (!Username || !Email || !Phone || !PassWords) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    const existing = await User.findOne({ where: { Email } });
    if (existing) {
      return res.status(400).json({ message: "Email đã được sử dụng" });
    }

    const newUser = await User.create({ Username, Email, Phone, PassWords });
    res.status(201).json({ message: "Đăng ký thành công", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.login = (req, res) => {
  res.status(200).json({ message: "Login OK (chưa xử lý logic)" });
};
