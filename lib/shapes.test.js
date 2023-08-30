// Jest tests for shapes

// Constructor Shape is imported
const { Circle, Triangle, Square } = require("./shapes.js");

// Written test suite for circle
const circleShape = new Circle();
shape.setColor("yellow");
expect(shape.render()).toBe(
  `<circle cx="50%" cy="50%" r="50%" fill="yellow" />`
);

// Written test suite for triangle
const triangleShape = new Triangle();
shape.setColor("red");
expect(shape.render()).toBe(
  `<polygon points="250,50 500,500 0,500" fill="red" />`
);

// Written test suite for square
const squareShape = new Square();
shape.setColor("blue");
expect(shape.render()).toBe(
  `<rect x="0" y="0" width="500" height="500" fill="blue" />`
);

module.exports = { circleShape, triangleShape, squareShape };
