// Jest tests for shapes

// Constructor Shape is imported
const { Circle, Triangle, Square } = require("./shapes.js");

// Written test suite for circle
const circleShape = new Circle();
shape.setColor("yellow");
expect(shape.render()).toBe(
  `<circle cx="250" cy="100" r="60" fill="yellow" />`
);

// Written test suite for triangle
const triangleShape = new Triangle();
shape.setColor("red");
expect(shape.render()).toBe(
  `<polygon points="100,100 200,200 0,200" fill="red" />`
);

// Written test suite for square
const squareShape = new Square();
shape.setColor("blue");
expect(shape.render()).toBe(
  `<rect x="240" y="280" width="180" height="180" fill="blue" />`
);

module.exports = { circleShape, triangleShape, squareShape };
//! Not sure if I am exporting this correctly
