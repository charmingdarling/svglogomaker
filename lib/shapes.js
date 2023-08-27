// Original Shape Choice
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Circle
class Circle extends Shape {
  render() {
    return;
    `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="100" r="60" fill="${this.shapeColor}" />
    <text x="250" y="100" font-size="60" "text-anchor: middle" fill="${this.shapeColor}>${this.text}</text>
    </svg>`;
  }
}

// <polygon points="50 15, 100 100, 0 100"/>
// Make even numbers, work with the shape.
// Triangle
class Triangle extends Shape {
  render() {
    `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
    <polygon points="125, 37 250, 250 50, 250" fill="${this.shapeColor}" />
    <text x="50" y="50" font-size="60" "text-anchor: middle" fill="${this.shapeColor}>${this.text}</text>
    </svg>`;
  }
}

// Square
class Square extends Shape {
  render() {
    `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
    <rect x="240" y="280" width="180" height="180" fill="${this.shapeColor}" />
    <text x="50" y="50" font-size="60" "text-anchor: middle" fill="${this.shapeColor}>${this.text}</text>
    </svg>`;
  }
}

// Exporting the Classes Circle, Triangle, Square as variables with values
module.exports = {
  Circle,
  Triangle,
  Square,
};

//https://docs.aspose.com/svg/net/drawing-basics/svg-text/
