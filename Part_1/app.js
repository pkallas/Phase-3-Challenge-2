const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => console.log('Listening at port 3000'));

app.get('/api/shout/:w', (request, response) => {
  response.send(`${request.params.w.toUpperCase()}!!!`);
});

app.use(bodyParser.json());

app.post('/api/array/merge', (request, response) => {
  let arrayA = request.body.a;
  let arrayB = request.body.b;
  let longestArray;
  if (Array.isArray(arrayA) === false || Array.isArray(arrayB) === false) {
    response.status(400).json({ "error": "Input data should be of type Array." });
  } else {
    let mergedArray = [];
    arrayA.length > arrayB.length ? longestArray = arrayA : longestArray = arrayB;
    let index = 0;
    do {
      mergedArray.push(arrayA[index]);
      mergedArray.push(arrayB[index]);
      index++;
    } while (index < longestArray.length);
    let finalArray = mergedArray.filter(index => index !== undefined);
    response.json({ "result": finalArray });
  };
});
