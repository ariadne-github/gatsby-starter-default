const path = require('path');
const express = require('express');
const app = express();

app.use('/path_prefix', express.static('public'));
app.use('/path_prefix/*', (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, './public', './404', '/index.html'));
});
app.use('/*', (req, res) => {
  res.redirect('/path_prefix/');
});

app.listen(9000, () => {
  console.log('Listening on port 9000');
});