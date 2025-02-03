const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/rookie'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/rookie/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App running on port', process.env.PORT || 8080);
});
