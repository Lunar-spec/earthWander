import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
