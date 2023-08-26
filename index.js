// Modules, requiring these modules

const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

// Scripts, requiring these scripts
const generateSVG = require("");
const questions = require("./library/questions");

function init() {
  inquirer.createPromptModule(questions);
}

async function asyncAnswer() {
  console.log('This comes first.');
  const result = await resolveAfter2Seconds();
  console.log('This is the result.')
}

const test = 