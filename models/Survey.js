const mongoose = require('mongoose');

const { Schema } = mongoose;
const RecipientSchema = require('./Recipients');

const surveySchema = new Schema({
    _user: { ref: 'User', type: Schema.Types.ObjectId },
    body: String,
    dateSent: Date,
    lastResponded: Date,
    no: { default: 0, type: Number },
    recipients: [RecipientSchema],
    subject: String,
    title: String,
    yes: { default: 0, type: Number },
});

mongoose.model('surveys', surveySchema);
