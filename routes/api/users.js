const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const mealCtrl = require('../../controllers/api/meals')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/mealhistory', mealCtrl.create);
router.post('/login', usersCtrl.login)


module.exports = router;