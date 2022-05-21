const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

// routes

router.get('/', auth, UserController.getAll);
router.get('/:id', auth, UserController.getById);
router.post('/signup', UserController.createSchema, UserController.signup);
router.post('/login', UserController.login);
router.put('/:id', auth, UserController.updateSchema, UserController.update);
router.delete('/:id', auth, UserController.delete);

module.exports = router;

// route functions

