import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
    },
    avatar: {
        type: String,
        default: '',
    },
    mobile: {
        type: String,
        default: null,
    },
    refreshToken: {
        type: String,
        default: '',
    },
    verify_email: {
        type: Boolean,
        default: false,
    },
    last_login: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'banned'],
        default: 'active',
    },
    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'address', 
        }
    ], 
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'cartProduct',
        }
    ], 
    orderHistory: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'order',
        }
    ], 
    forgot_password_otp: {
        type: String,
        default: null,
    },
    forgot_password_expiry: {
        type: Date,
        default: "",
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
