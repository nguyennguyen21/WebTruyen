// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./config/db');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/auth', authRoutes);
app.use(express.json());

// Kết nối DB
sequelize
  .authenticate()
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.error("❌ DB error:", err));

sequelize
  .sync({ alter: true }) // ✅ Thêm alter: true vào đây
  .then(() => {
    console.log("✅ Database synced (alter)");
  })
  .catch((err) => {
    console.error("❌ Sync error:", err);
  });


// Chạy server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
