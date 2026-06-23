const app = require('./app');

const { getEnv } = require('./config/env');

const { port: PORT } = getEnv();

function startServer() {
  const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Error: El puerto ${PORT} ya está en uso por otro proceso.`);
      process.exit(1);
    } else {
      console.error('Error al iniciar el servidor:', err);
    }
  });
}

module.exports = { startServer };
