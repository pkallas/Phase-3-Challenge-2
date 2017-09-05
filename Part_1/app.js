const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => console.log('Listening at port 3000'));

app.get('/api/shout/:word', (request, response) => {
  response.send(`${request.params.word.toUpperCase()}!!!`);
});

app.use(bodyParser.json());

app.post('/api/array/merge', (request, response) => {
  let arrayA = request.body['a'];
  let arrayB = request.body['b'];
  if (Array.isArray(arrayA) === false) {
    response.status(400).json({"error": "Input data should be of type Array."})
  } else if (Array.isArray(arrayB) === false) {
    response.status(400).json({"error": "Input data should be of type Array."})
  } else {
    let mergedArray = [];
    if (arrayA.length > arrayB.length) {
      let index = 0;
      do {
        mergedArray.push(arrayA[index]);
        mergedArray.push(arrayB[index]);
        index++;
      } while (index < arrayA.length);
    } else if (arrayB.length > arrayA.length) {
      let index = 0;
      do {
        mergedArray.push(arrayA[index]);
        mergedArray.push(arrayB[index]);
        index++;
      } while (index < arrayB.length);
    } else {
      let index = 0;
      do {
        mergedArray.push(arrayA[index]);
        mergedArray.push(arrayB[index]);
        index++;
      } while (index < arrayA.length);
    }
    response.json({ "result": mergedArray });
  };
});
