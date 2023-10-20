const mongoose = require('mongoose');
const logger = require('./../../logger')
const config = require('./../../../../config.json')

module.exports = () => {
    // Initialize connection
    const uri = process.env.MONGODB_ENV === 'docker' ? process.env.MONGODB_URI : config.database.mongo.uri;
    mongoose.connect(uri)
            .then(() => logger.info('Connected to MongoDB'))
            .catch((err) => logger.error(err));
    
    // Log disconnect/reconnect
    mongoose.connection.on('error', (err) => logger.error(err));
    mongoose.connection.on('disconnected', () => logger.warn('MongoDB connection is disconnected'));
    mongoose.connection.on('reconnected', () => logger.info('Reconnected to MongoDB'));
};