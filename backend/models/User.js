const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: 0
    },
    token: {
        type: String
    },
    tokenExp: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;