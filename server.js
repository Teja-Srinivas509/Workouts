const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
