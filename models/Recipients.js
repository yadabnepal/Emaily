const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { default: false, type: Boolean },
});

module.exports = recipientSchema;
