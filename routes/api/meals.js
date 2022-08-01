const express = require('express');
const router = express.Router();
const MealsCtrl = require('../../controllers/api/meals');

router.post('/mealhistory', MealsCtrl.create);

router.get('/mealhistory', MealsCtrl.show)

module.exports = router;