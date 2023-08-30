// Constructor Shape is imported
const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("should render a circle with user chosen color", () => {
    const circle = new Circle();
    circle.setColor("yellow");
    expect(circle.render()).toBe(
      `<circle cx="50%" cy="50%" r="50%" fill="yellow" />`
    );
  });
});

describe("Triangle", () => {
  it("should render a triangle with user chosen color", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toBe(
      `<polygon points="250,50 500,500 0,500" fill="red" />`
    );
  });
});

describe("Square", () => {
  it("should render a square with user chosen color", () => {
    const square = new Square();
    expect(square.render()).toBe(
      `<polygon points="250,50 500,500 0,500" fill="blue" />`
    );
  });
});

module.exports = { Circle, Triangle, Square };
