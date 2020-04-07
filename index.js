const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  { name: "Arto Hellas", number: "040-1234567", id: 1 },
  { name: "Ada Lovelace", number: "39-44-53235223", id: 2 },
  { name: "Dan Abramov", number: "12-34-345345", id: 3 },
  { name: "Mary Poppendiek", number: "39-23-64512323", id: 4 },
];

const infoHTML = `phonebook has info for ${
  persons.length
} people </br>  </br>${new Date()}`;

const errorHTML = `<h1>This page does not exist</h1>`;

const generateId = () => {
  const min = persons.length + 1;
  return Math.floor(Math.random() * (100 - min) + min);
};

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => id === p.id);
  if (person) {
    res.json(person);
  } else {
    res.status(400).send(errorHTML).end();
  }
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(infoHTML);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => id === p.id);
  if (person) {
    res.json(person);
  } else {
    res.status(400).send(errorHTML).end();
  }
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.content) {
    return res.status(400).json({ error: "content missing" });
  }

  const person = {
    name: body.content.name,
    number: body.content.number,
    id: generateId(),
  };
  console.log(person);
  persons = persons.concat(person);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => id === p.id);
  persons = persons.filter((p) => p.id !== id);
  if (person) {
    res.status(204).end();
  } else {
    res.status(404).send(errorHTML).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
