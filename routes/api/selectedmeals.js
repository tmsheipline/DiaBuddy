const express = require('express');
const router = express.Router();
const selectedMealsCtrl = require('../../controllers/api/selectedMeals');

// GET /api/orders/cart
router.get('/cart', selectedMealsCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', selectedMealsCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', selectedMealsCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', selectedMealsCtrl.setItemQtyInCart);

module.exports = router;