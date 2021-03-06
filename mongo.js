const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const url = `mongodb+srv://leonie_lea_january:${password}@cluster0-nosdz.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  number: { type: Number, unique: true, required: true },
});

personSchema.plugin(uniqueValidator);

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
}

if (process.argv.length == 5) {
  const personName = process.argv[3];
  const personNumber = process.argv[4];

  const person = new Person({
    name: personName,
    number: personNumber,
  });

  person.save().then((response) => {
    console.log(`added ${personName} number ${personNumber} to phonebook`);
    mongoose.connection.close();
  });
}
