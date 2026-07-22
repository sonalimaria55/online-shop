const transporter = require("../config/mail");

const sendOTPEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "SERINA Boutique - Email Verification",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2>Welcome to SERINA Boutique</h2>

          <p>Your verification code is:</p>

          <h1 style="letter-spacing:4px;">${otp}</h1>

          <p>This OTP is valid for 10 minutes.</p>

          <p>If you didn't create this account, please ignore this email.</p>
        </div>
      `,
    });

    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};

module.exports = sendOTPEmail;