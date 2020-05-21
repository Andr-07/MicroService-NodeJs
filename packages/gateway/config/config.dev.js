const { PORT, SERVICE_DB_PORT, Q_URI } = process.env;

module.exports = {
    port: PORT || 5000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 5001
    },
    q: {
        uri:
            Q_URI
    }
}
