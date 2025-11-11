import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line:{
        type: String, 
        default: ''
    }, 
    city:{
        type: String, 
        default: ''
    },
    state:{
        type: String, 
        default: ''
    },
    pincode:{
        type: String, 
        default: ''
    },
    country:{
        type: String, 
        default: ''
    },
    postal_code:{
        type: String, 
        default: ''
    },
    mobile:{
        type: String, 
        default: null, 
    },
    status: {
        type: Boolean,
        default: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        default: '', 
    }
}, { timestamps: true });

const Address = mongoose.model("Address", addressSchema);
export default Address;
