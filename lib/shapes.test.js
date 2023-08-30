// Constructor Shape is imported
const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("should render a circle with user chosen color", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="50%" fill="yellow" />`
    );
  });
});

describe("Triangle", () => {
  it("should render a triangle with user chosen color", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      `<polygon points="250,50 500,500 0,500" fill="red" />`
    );
  });
});

describe("Square", () => {
  it("should render a square with user chosen color", () => {
    const square = new Square();
    shape.setColor("blue");
    expect(square.render()).toEqual(
      `<polygon points="250,50 500,500 0,500" fill="blue" />`
    );
  });
});
