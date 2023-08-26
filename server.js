class Shape {
  constructor(type, text, color) {
    this.type = type;
    this.text = text;
    this.color = color;
    this.create = function () {
      console.log("This is the shape.");
    };
  }
}

function Circle(type, text, color) {
  Shape.call(this);
}
