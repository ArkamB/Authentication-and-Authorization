const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment schema
const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming your User model is named 'User'
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
