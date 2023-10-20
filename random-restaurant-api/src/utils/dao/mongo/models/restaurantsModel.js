const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('restaurant', restaurantSchema);