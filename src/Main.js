require('dotenv').config();
const createServer = require('./HttpServer/createServer');

(()=>{
  const port = process.env.PORT;
  const app = createServer();
  app.listen(port);
})()
