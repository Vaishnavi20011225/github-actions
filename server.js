'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World -express-docker-minikube-k8');
});

app.listen(PORT, HOST, () => {
  console.log(`Running with github actions and pushing to docker hub on http://${HOST}:${PORT}`);
});
