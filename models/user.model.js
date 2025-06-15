import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true, //optimize for search
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})
export const User = mongoose.model("User", userModel)