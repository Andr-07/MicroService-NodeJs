const { PORT } = process.env;

module.exports = {
    port: PORT || 5001,
    mongoURI: 'mongodb://root:root@localhost:27117/graphql-service?authMechanism=DEFAULT&authSource=admin'
}
