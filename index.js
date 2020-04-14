require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

morgan.token("type", function (req, res) {
  return JSON.stringify(req.body.content);
});
app.use(morgan(":method :url :status :response-time ms :type"));
app.use(morgan("tiny"));
app.use(express.json());

app.use(cors());
app.use(express.static("build"));

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

app.get("/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons.map((person) => person.toJSON()));
  });
});

app.get("/info", (req, res) => {
  res.send(infoHTML);
});

app.get("/persons/:id", (req, res) => {
  Person.findById(req.params.id).then((person) => {
    response.json(person.toJSON());
  });
});

app.post("/persons", (req, res) => {
  const body = req.body;
  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => res.json(savedPerson.toJSON()));
});

app.delete("/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => id === p.id);
  persons = persons.filter((p) => p.id !== id);
  if (person) {
    res.status(204).end();
  } else {
    res.status(404).send(errorHTML).end();
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
