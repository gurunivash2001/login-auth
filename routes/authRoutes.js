const express = require('express');
const { registerUser, loginUser, getUsers, deleteUserById, deleteAllUsers } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getUsers); // Get all users
router.delete('/users/:id', deleteUserById); // Delete user by ID
router.delete('/users', deleteAllUsers); // Delete all users

module.exports = router;
