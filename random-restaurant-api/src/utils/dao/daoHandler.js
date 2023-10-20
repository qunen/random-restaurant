const restaurant = require('./mongo/models/restaurantsModel');

const mongodbHandler = {
    getRestaurants: async (callback) => {
        const projection = {
            _id: 1,
            name: 1,
            address: 1
        };
        restaurant.find({}, projection)
            .then((data) => { callback(data, null) })
            .catch((err) => { callback(null, err) });
    },

    addRestaurant: async (restaurantObj, callback) => {
        restaurant.findOne(restaurantObj)
            .then((data) => {
                if (data !== null) callback(null, {error: 'Restaurant Exists'});
                else {
                    restaurant.create(restaurantObj)
                        .then((result) => {
                            result.save();
                            callback(result._id, null);
                        })
                        .catch((err) => callback(err));
                }
            })
            .catch((err) => {
                callback(null, err)});
    },

    deleteRestaurant: async (restaurantId, callback) => {
        restaurant.findByIdAndDelete(restaurantId)
            .then(() => callback(null))
            .catch((err) => callback(err));
    }
};

module.exports = {mongodbHandler};