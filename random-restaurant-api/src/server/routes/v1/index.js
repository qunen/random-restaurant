const express = require('express');
const restaurantController = require('./../../../controllers/restaurant');

// Initialize /api/v1/* routes
const router = express.Router();

// GET Requests
router.get('/allRestaurants', restaurantController.allRestaurant);

// POST Requests
router.post('/addRestaurant', restaurantController.addRestaurant);

// DELETE Requests
router.delete('/deleteRestaurant', restaurantController.deleteRestaurant);

module.exports = router;