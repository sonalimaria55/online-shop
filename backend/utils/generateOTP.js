// const generateOTP = () => {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

// module.exports = generateOTP;
//--------------------------------------
// const generateOTP = () => {
//     return "352555";
// };
// module.exports = generateOTP;
//---------------------------------------
const generateOTP = () => {
    // TEST MODE
    if (process.env.OTP_MODE === "test") {
        return process.env.FIXED_OTP || "123456";
    }

    // REAL EMAIL MODE
    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();
};

module.exports = generateOTP;