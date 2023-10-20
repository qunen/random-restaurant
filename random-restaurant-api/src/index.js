const app = require('./server/index');
const config = require('./../config.json');
// const db = require('./utils/dao/daoHandler');

// Listen to port
const port = config.port ? config.port : 3000
const server = app.listen(port, () => {
    // db.postgresql.schema.dropTableIfExists('menu');
    console.log(`Server listening on port ${port}`);
    
    // Initialize DB connection
    require('./utils/dao/mongo/mongodbConnector')();
});

// Handle error and exception
const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } 
    else {
        process.exit(1);
    }
};
const exceptionErrorHandler = (err) => {
    console.error('Unexpected error occured!', err);
    exitHandler
};

process.on('uncaughtException', exceptionErrorHandler);
process.on('unhandledRejection', exceptionErrorHandler);
process.on('SIGTERM', () => {
    if (server) server.close();
});