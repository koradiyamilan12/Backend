require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth.route");
const homeRoutes = require("./routes/home.route");
const adminRoutes = require("./routes/admin.route");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// DB connection
connectToDB();

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
