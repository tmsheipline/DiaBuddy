const express = require('express');
const router = express.Router();
const foodItemsCtrl = require('../../controllers/api/foodItems');


router.get('/', foodItemsCtrl.getAll);
router.get('/:id', foodItemsCtrl.show);

module.exports = router;