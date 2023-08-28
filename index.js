// Modules, importing/requiring these modules
const inquirer = require("inquirer");
const fs = require("fs");

// Scripts, importing these scripts
const questions = require("./lib/questions");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Async prepares node to tell them that this next function has an "await" and it needs to wait. This promise may get rejected or resolved.
async function init() {
  const answers = await inquirer.prompt(questions);
  let createShapeObj;
  switch (answers.shape) {
    case "circle":
      console.log("User has chosen the circle shape.");
      // Creating a new circle instance
      createShapeObj = new Circle();
      break;
    case "triangle":
      console.log("User has chosen the triangle shape.");
      createShapeObj = new Triangle();
      break;
    case "square":
      console.log("User has chosen the square shape.");
      createShapeObj = new Square();
      break;
    default:
      console.log("Error. Unsupported shape.");
      return;
  }

  const svgContent = createShapeObj.render();

  fs.writeFile("./assets/logo.svg", "svgContent", (err) =>
    err
      ? console.error("Error. SVG Logo not created.", err)
      : console.log("You created an SVG logo.")
  );
}

// Function to initialize
init();

// Promises (rejected, resolved) : When something gives you back a promise and if it is run it will PASS OR FAIL.
// PASS = Resolved
// FAIL = Rejected
