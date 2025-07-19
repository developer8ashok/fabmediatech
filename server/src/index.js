const server = require('./app');
const PORT = process.env.PORT || 8001;
const HOST = process.env.HOST || 'localhost'

server.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});