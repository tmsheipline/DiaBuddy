const express = require('express');
const router = express.Router();
const foodItemsCtrl = require('../../controllers/api/foodItems');


router.get('/', foodItemsCtrl.index);
router.get('/:id', foodItemsCtrl.show);

module.exports = router;