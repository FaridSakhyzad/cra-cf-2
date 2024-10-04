const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: ['.env', '.env.production'],
  override: true
});

const app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});