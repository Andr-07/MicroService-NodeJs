const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [{
    name: 'Gateway',
    script: basePath + '/gateway/server.js',
    watch: true,
    env: {
      PORT: 5000,
      SERVICE_DB_PORT: 5001,
      Q_URI: 'amqp://szyqgozd:rkCpBiYdWxSHjhVv-bX1r3CAR8Aevx0e@jaguar.rmq.cloudamqp.com/szyqgozd'
    },
    instance: 'max',
    exec_mode: 'cluster'
  },
    {
      name: 'DB Service',
      script: basePath + '/database_service/server.js',
      env: {
        PORT: 5001,
      },
    },
    {
      name: 'Mailing Service',
      script: basePath + '/mailing_service/index.js',
      env: {
        Q_URI: 'amqp://szyqgozd:rkCpBiYdWxSHjhVv-bX1r3CAR8Aevx0e@jaguar.rmq.cloudamqp.com/szyqgozd',
        MJ_API_PUBLIC: '878578b5899c1c61facbfe084501ab66',
        MJ_API_SECRET: 'a897f7c409c09a75e80d797546caa56f'
      },
    },
  ],
};
