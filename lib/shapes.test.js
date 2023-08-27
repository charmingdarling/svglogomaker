shapes.test.js; // Jest tests for shapes

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);

// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// Constructor Shape is imported
const { Circle, Triangle, Square } = require('./shapes.js');

// Written test suite for circle
const shape = new Circle();
shape.setColor("yellow");
expect(shape.render()).toBe(`<circle cx="250" cy="100" r="60" fill="yellow" />`);

// Written test suite for triangle
const shape = new Triangle();
shape.setColor("red");
expect(shape.render()).toBe(`<polygon points="125,37 250,250 50,250" fill="red" />`);

// Written test suite for square
const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toBe(`<rect x="240" y="280" width="180" height="180" fill="blue" />`);

module.exports = shapes;



