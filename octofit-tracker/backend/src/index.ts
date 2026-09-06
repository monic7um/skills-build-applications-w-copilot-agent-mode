import server from './server.js';

const port = Number(process.env.PORT || 8000);

server.listen(port, () => {
  console.log(`OctoFit backend listening on port ${port}`);
});