try {
    const MongoStore = require('connect-mongo');
    console.log('Type:', typeof MongoStore);
    console.log('Exports:', MongoStore);
    console.log('Create method:', MongoStore.create);
} catch (e) {
    console.error(e);
}
