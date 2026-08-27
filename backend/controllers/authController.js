// const bcrypt = require("bcryptjs");
// const User = require("../models/User");

// const generateToken = require("../utils/generateToken");
// const generateOTP = require("../utils/generateOTP");
// const sendOTPEmail = require("../services/emailService");
// const Otp = require("../models/Otp");

// // ==========================
// // Register User
// // ==========================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, password } = req.body;

//     // Check Existing User
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists",
//       });
//     }

//     // Hash Password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Generate OTP
//     // Create User
//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       phone,
//       password: hashedPassword,
//     });

//     // Generate OTP
//     const otp = generateOTP();

//     // Remove old OTP if it exists
//     await Otp.deleteMany({ email });

//     // Save OTP
//     await Otp.create({
//       email,
//       otp,
//       expiresAt: new Date(Date.now() + 10 * 60 * 1000),
//     });

//     // Send OTP
//     await sendOTPEmail(email, otp);
//     // Send OTP Email
//     await sendOTPEmail(email, otp);

//     res.status(201).json({
//       success: true,
//       message: "Registration successful. OTP sent to your email.",
//       email: user.email,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Verify OTP
// // ==========================
// const verifyOTP = async (req, res) => {
//   try {
//     const { email, otp } = req.body;

//     const otpRecord = await Otp.findOne({
//       email,
//       otp,
//     });

//     if (!otpRecord) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid OTP",
//       });
//     }

//     if (otpRecord.expiresAt < new Date()) {
//       return res.status(400).json({
//         success: false,
//         message: "OTP has expired",
//       });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     user.isVerified = true;

//     await user.save();

//     // Delete OTP after successful verification
//     await Otp.deleteOne({
//       _id: otpRecord._id,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Email verified successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// // ==========================
// // Login User
// // ==========================
// const login = async (req, res) => {

//   try {

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });




//     if (!user) {
//       return res.status(400).json({
//         success:false,
//         message:"Invalid email or password"
//       });
//     }


//     const isMatch = await bcrypt.compare(
//       password,
//       user.password
//     );




//     if (!isMatch) {
//       return res.status(400).json({
//         success:false,
//         message:"Invalid email or password"
//       });
//     }


//     const token = generateToken(user._id);





//     res.status(200).json({
//       success:true,
//       message:"Login Successful",
//       token,

//       user:{
//         _id:user._id,
//         firstName:user.firstName,
//         lastName:user.lastName,
//         email:user.email,
//         role:user.role
//       }
//     });


//   } catch(error){

//     res.status(500).json({
//       success:false,
//       message:error.message
//     });

//   }

// };

// // ==========================
// // Profile
// // ==========================
// const profile = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     user: req.user,
//   });
// };
// const resendOTP = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     if (user.isVerified) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is already verified.",
//       });
//     }

//     // Remove previous OTP
//     await Otp.deleteMany({ email });

//     // Generate new OTP
//     const otp = generateOTP();

//     await Otp.create({
//       email,
//       otp,
//       expiresAt: new Date(Date.now() + 10 * 60 * 1000),
//     });

//     await sendOTPEmail(email, otp);

//     res.status(200).json({
//       success: true,
//       message: "New OTP sent successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   register,
//   verifyOTP,
//   resendOTP,
//   login,
//   profile,
// };

//------------------------------------------------
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const generateToken = require("../utils/generateToken");
const generateOTP = require("../utils/generateOTP");
const sendOTPEmail = require("../services/emailService");
const Otp = require("../models/Otp");

// ==========================
// Register User
// ==========================
const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
        } = req.body;

        // ==========================
        // Check Existing User
        // ==========================

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        // ==========================
        // Hash Password
        // ==========================

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        // ==========================
        // Create User
        // ==========================

        const user = await User.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });

        // ==========================
        // Generate OTP
        // ==========================

        const otp = generateOTP();

        // ==========================
        // Remove Old OTP
        // ==========================

        await Otp.deleteMany({ email });

        // ==========================
        // Save OTP
        // ==========================

        await Otp.create({
            email,
            otp,
            expiresAt: new Date(
                Date.now() + 10 * 60 * 1000
            ),
        });

        // ==========================
        // TEST MODE
        // ==========================

        if (process.env.OTP_MODE === "test") {

            console.log(
                "================================"
            );

            console.log(
                "TEST OTP:",
                otp
            );

            console.log(
                "EMAIL:",
                email
            );

            console.log(
                "================================"
            );

            return res.status(201).json({
                success: true,
                message:
                    "Registration successful. Test OTP generated.",
                email: user.email,
                otp: otp,
                testOtp: true,
            });
        }

        // ==========================
        // REAL EMAIL MODE
        // ==========================

        await sendOTPEmail(
            email,
            otp
        );

        return res.status(201).json({
            success: true,
            message:
                "Registration successful. OTP sent to your email.",
            email: user.email,
            testOtp: false,
        });

    } catch (error) {

        console.error(
            "REGISTER ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// ==========================
// Verify OTP
// ==========================
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({
      email,
      otp,
    });

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isVerified = true;

    await user.save();

    // Delete OTP after successful verification
    await Otp.deleteOne({
      _id: otpRecord._id,
    });

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// ==========================
// Login User
// ==========================
const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });




    if (!user) {
      return res.status(400).json({
        success:false,
        message:"Invalid email or password"
      });
    }


    const isMatch = await bcrypt.compare(
      password,
      user.password
    );




    if (!isMatch) {
      return res.status(400).json({
        success:false,
        message:"Invalid email or password"
      });
    }


    const token = generateToken(user._id);





    res.status(200).json({
      success:true,
      message:"Login Successful",
      token,

      user:{
        _id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role:user.role
      }
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

// ==========================
// Profile
// ==========================
const profile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message:
                    "Email is already verified.",
            });
        }

        // ==========================
        // Remove Previous OTP
        // ==========================

        await Otp.deleteMany({ email });

        // ==========================
        // Generate New OTP
        // ==========================

        const otp = generateOTP();

        // ==========================
        // Save New OTP
        // ==========================

        await Otp.create({
            email,
            otp,
            expiresAt: new Date(
                Date.now() + 10 * 60 * 1000
            ),
        });

        // ==========================
        // TEST MODE
        // ==========================

        if (process.env.OTP_MODE === "test") {

            console.log(
                "RESEND TEST OTP:",
                otp
            );

            return res.status(200).json({
                success: true,
                message:
                    "Test OTP generated successfully.",
                otp,
                testOtp: true,
            });
        }

        // ==========================
        // REAL EMAIL MODE
        // ==========================

        await sendOTPEmail(
            email,
            otp
        );

        return res.status(200).json({
            success: true,
            message:
                "New OTP sent successfully.",
            testOtp: false,
        });

    } catch (error) {

        console.error(
            "RESEND OTP ERROR:",
            error
        );

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
  register,
  verifyOTP,
  resendOTP,
  login,
  profile,
};

