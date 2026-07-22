const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            trim: true,
            default: "",
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            default: "",
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: [
                "super_admin",
                "management_support",
                "customer",
            ],
            default: "customer",
        },

        isActive: {
            type: Boolean,
            default: true,
        }
        ,
        isVerified: {
            type: Boolean,
            default: false,
        },

       
    },



    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);