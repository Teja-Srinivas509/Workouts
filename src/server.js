const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/rookie')); // Serve the Angular build files

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/rookie/index.html')); // Handle all routes by returning the index.html
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
