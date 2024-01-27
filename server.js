const express = require('express');
const cors = require('cors');
const fs = require("fs");
const { parse } = require("csv-parse");
const { v4: uuid } = require('uuid');
const app = express();

app.use(express.json());
app.use(cors())

const data = [];

fs.createReadStream("./dataset.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function(row) {
    data.push({ ID: uuid(), ...row });
  })
  .on("error", function(error) {
    console.log(error.message);
  })
  .on("end", function() {
    console.log("parsed csv data:");
    // console.log(data);
  });

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/api/recipes', (req, res) => {
  console.log('movies data');
  res.json(data.slice(0, 100))
});

app.get('/api/recipes/cuisines', (req, res) => {
  let tempArr = [];
  let cuisines = [];
  tempArr = data.slice(0, 100).map(({ Cuisine }) => Cuisine);
  for (let cuisine of tempArr) {
    if (!cuisines.includes(cuisine)) {
      cuisines = [...cuisines, cuisine]
    }
  }
  cuisines = cuisines.map(cuisine => ({ 'ID': uuid(), 'Cuisine': cuisine, isSelected: false }))
  res.json(cuisines);
})

app.get('/api/recipes/:id', (req, res) => {
  const id = req.params.id;
  console.log({ id })
  const singleRecipe = data.slice(0, 100).filter(({ ID }) => ID === id);
  console.log(singleRecipe)
  res.json(singleRecipe);
})

app.listen(3000, () => {
  console.log('server started');
});
