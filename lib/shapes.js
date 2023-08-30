class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  setColor(color) {
    this.shapeColor = color;
  }
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50%" cy="50%" r="50%" fill="${this.shapeColor}" />
  <text x="22%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,50 500,500 0,500" fill="${this.shapeColor}" />
    <text x="25%" y="75%" font-size="140" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="500" height="500" fill="${this.shapeColor}" />
    <text x="20%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// Exporting the Classes Circle, Triangle, Square as variables with values
module.exports = { Circle, Triangle, Square };
