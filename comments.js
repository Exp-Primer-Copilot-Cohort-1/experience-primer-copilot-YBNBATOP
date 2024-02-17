// Create web server
// Create a route for comments

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('This is a GET request');
}   );

app.post('/comments', (req, res) => {
  res.send('This is a POST request');
}   );

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}   );

