module.exports = {
  apps : [
    {
      name      : 'webhello1',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true',
        PORT: '8001'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },{
      name      : 'webhello2',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true',
        PORT: '8002'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },{
      name      : 'webhello3',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true',
        PORT: '8003'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ]
};