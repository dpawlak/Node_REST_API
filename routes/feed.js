const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// Get /feed/posts
router.get('/posts', feedController.getPosts)

// POST /feed/posts
router.post('/posts', feedController.createPost)

module.exports = router