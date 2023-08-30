// Questions array for user prompting
const questions = [
  {
    name: "text",
    type: "input",
    message: "Please choose 3 characters for your logo.",
    validate: (input) => {
      return input.length <= 3
        ? true
        : "Please choose up to 3 characters for your logo.";
    },
  },
  {
    name: "textColor",
    type: "input",
    message: "Text color? Choose a color keyword or hexadecimal number.",
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Shape color?  Choose a color keyword or hexadecimal number.",
  },
  {
    name: "shape",
    type: "list",
    message: "What shape would you like?",
    choices: ["circle", "triangle", "square"],
  },
];

// Modularization of the variable questions, exporting the value of questions
module.exports = questions;
