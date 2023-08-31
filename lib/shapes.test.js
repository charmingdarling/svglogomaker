// Constructor Shape is imported
const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("should render a circle with user chosen color", () => {
    const shape = new Circle("KIM", "black", "yellow");
    // shape.setColor("yellow");
    expect(shape.render()).toEqual(
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="50%" fill="yellow" />
    <text x="22%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="black">KIM</text>
    </svg>`
    );
  });
});

describe("Triangle", () => {
  it("should render a triangle with user chosen color", () => {
    const shape = new Triangle("DEF", "white", "red");
    // shape.setColor("red");
    expect(shape.render()).toEqual(
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,50 500,500 0,500" fill="red" />
    <text x="25%" y="75%" font-size="140" dominant-baseline="middle" text-anchor: "middle" fill="white">DEF</text>
    </svg>`
    );
  });
});

describe("Square", () => {
  it("should render a square with user chosen color", () => {
    const square = new Square("ABC", "black", "blue");
    // shape.setColor("blue");
    expect(square.render()).toEqual(
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="500" height="500" fill="blue" />
    <text x="20%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="black">ABC</text>
    </svg>`
    );
  });
});
