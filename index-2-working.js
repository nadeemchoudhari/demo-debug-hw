const express = require('express')

const app = express();
const world = process.env.WORLD || 'World';

app.set('port', (process.env.PORT || 8000));

app.get('/de', function(request, response) {
  response.send(`Hello Friend`);
});

app.get('/fr', function(request, response) {
  response.send(`Hello Ami`);
});

app.get('/es', function(request, response) {
  response.send(`Hello Amigo`);
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});

