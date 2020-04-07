const express = require("express");
const app = express();

let persons = [
  { name: "Arto Hellas", number: "040-1234567", id: 1 },
  { name: "Ada Lovelace", number: "39-44-53235223", id: 2 },
  { name: "Dan Abramov", number: "12-34-345345", id: 3 },
  { name: "Mary Poppendiek", number: "39-23-64512323", id: 4 },
];

const infoHTML = `phonebook has info for ${
  persons.length
} people </br>  </br>${new Date()}`;

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(infoHTML);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
