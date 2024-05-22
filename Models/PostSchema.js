const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
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
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment' // Assuming your Comment model is named 'Comment'
    }]
});

module.exports = mongoose.model('Post', PostSchema);
