const express = require('express');
const path = require('path');

const app = express();
const configs = {
  path: '../dist',
  https: true,
  port: process.env.PORT || 3000,
};
const root = path.join(__dirname, configs.path);

if (configs.https) {
  app.use((req, res, next) => {
    if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
      res.redirect(`https://${req.headers.host}${req.url}`);
    } else {
      next();
    }
  });
}

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(configs.port, () => {
  console.log(`Escutando na porta ${configs.port}!`);
});
