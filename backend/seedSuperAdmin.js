require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  try {

    const adminExists = await User.findOne({
      role: "super_admin",
    });

    if (!adminExists) {

      const hashedPassword = await bcrypt.hash(
        "Admin@123",
        10
      );

      await User.create({
        firstName: "Super",
        lastName: "Admin",
        email: "admin@serina.com",
        phone: "9999999999",
        password: hashedPassword,
        role: "super_admin",
        isVerified: true,
        isActive: true,
      });

      console.log("✅ Super Admin created");
    } else {
      console.log("⚠️ Super Admin already exists");
    }

    const managementExists = await User.findOne({
      role: "management_support",
    });

    if (!managementExists) {

      const hashedPassword = await bcrypt.hash(
        "Manage@123",
        10
      );

      await User.create({
        firstName: "Management",
        lastName: "Support",
        email: "management@serina.com",
        phone: "8888888888",
        password: hashedPassword,
        role: "management_support",
        isVerified: true,
        isActive: true,
      });

      console.log("✅ Management Support created");
    } else {
      console.log("⚠️ Management Support already exists");
    }

    mongoose.connection.close();

  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
};

seed();