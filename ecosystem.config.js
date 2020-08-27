module.exports = {
  apps: [
    {
      name: "fake-api",
      script: "server.js",
      instances: 0,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
