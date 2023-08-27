// Modules, requiring these modules
const inquirer = require("inquirer");
const fs = require("fs");

// Scripts, requiring these scripts
const generateSVG = require(".lib/generateShape");
const questions = require("./lib/questions");
const { Circle, Triangle, Square } = require("./lib/shapes");

function init() {
  // Promise STARTED, is executing work sometime, but the work is NOT completed at this time
  inquirer.promptScriptQuestions(questions);
  console.log("Starting to ask questions");
}
// Async prepares node to tell them that this next function has an "await" and it needs to wait. This promise may get rejected or resolved.
// (answers) is the parameter pointing to the function
const askUser = async (answers) => {
  // Promise is COMPLETED here
  const answers = await inquirer.promptScriptQuestions(questions);
  console.log(answer);
  const createShape = "Creating Shape...";
  fs.writeFile("/assets/svglogo.png", createShape, (err) =>
    err
      ? console.error("Error. SVG Logo not created.", err)
      : console.log("You created an SVG logo.")
  );
};
// Function to initialize
askUser();

// Promises (rejected, resolved) : When something gives you back a promise and if it is run it will PASS OR FAIL.
// PASS = Resolved
// FAIL = Rejected
