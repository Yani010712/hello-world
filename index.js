const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}!`);
});


app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html' + '/public/about.html' + '/public/index2.html' + '/public/project.html');
});
