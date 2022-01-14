const express = require('express');
const cors = require('cors');

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());


  app.use((error, req, res, next) => {
    if (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).send({ status: 'fail', message: error.message });
      }
      return res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
    next();
  });
  return app;
}

module.exports = createServer;