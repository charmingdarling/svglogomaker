// Questions array for user prompting
const questions = [
  {
    name: "text",
    type: "input",
    message: "Please choose 3 characters for your logo.",
  },
  {
    name: "textColor",
    type: "input",
    message:
      "What color would you like your text to be? You may enter a color keyword or hexadecimal number.",
  },
  {
    name: "shape",
    type: "list",
    message: "What shape would you like?",
    choices: ["circle", "triangle", "square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message:
      "What color would you like your shape to be?  You may enter a color keyword or hexadecimal number.",
  },
];

// Modularization of the variable questions, exporting the value of questions
module.exports = questions;
