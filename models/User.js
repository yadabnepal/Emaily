const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    credits: { default: 0, type: Number },
    googleId: String,
});

mongoose.model('users', userSchema);
