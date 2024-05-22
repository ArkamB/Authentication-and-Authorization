const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import controllers
const userController = require('./Controller/userController');
const postController = require('./Controller/postController');
const commentController = require('./Controller/commentController');

// Create Express app
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webassign')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Define authentication routes
app.post('/api/v1/auth/register', userController.registerUser);
app.post('/api/v1/auth/login', userController.loginUser);

// Define other routes
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);

app.post('/posts', postController.createPost);
app.get('/posts', postController.getAllPosts);

app.post('/comments', commentController.createComment);
app.get('/comments', commentController.getAllComments);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
