// Original Shape Choice
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Text
// The <text> element is used to define a text.
// x,y are the main attributes for text position.
// Baseline for text begins from bottom-left corner of first text-symbol
// It is important to set the y value larger than font size, otherwise the text does not into the viewport

// Fill
// Colors the interior of a graphic
// If there is no filling, you need to specify "none" or "transparent"

// Circle
// The <circle> element has 3 attributes. cx, xy, and r

class Circle extends Shape {
  render() {
    return `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
  <circle cx="300" cy="272" r="140" fill="${this.shapeColor}" />
  <text x="44%" y="50%" font-size="100" alignment-baseline="central" "text-anchor: middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Triangle
// The <polygon> element is used to create a shape with 3 sides.
// The attributes define the coordinates (x,y) for each corner.
class Triangle extends Shape {
  render() {
    return `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,100 200,200 0,200" fill="${this.shapeColor}" />
    <text x="50" y="50" font-size="60" "text-anchor: middle" fill="${this.shapeColor}">${this.text}</text>
    </svg>`;
  }
}

// Rectangle
// The <rect> element has 6 attributes
// x,y - the x,y coordinates of the rectangles top-left corner
// width, height - the width and height of the rectangle
// rx, ry - the x and y corners of the rectangle (radii)
// if x and y attributes are not set, then the top-left corner of the rectangle is defaulted (0,0)
// if rx, ry are not defined, they are defaulted to 0

// Top-left point of coordinates is (240,280);
class Square extends Shape {
  render() {
    return `<svg width="500" height="550" xmlns="http://www.w3.org/2000/svg">
    <rect x="240" y="280" width="180" height="180" fill="${this.shapeColor}" />
    <text x="50" y="50" font-size="60" "text-anchor: middle" fill="${this.shapeColor}">${this.text}</text>
    </svg>`;
  }
}

// Exporting the Classes Circle, Triangle, Square as variables with values
module.exports = { Circle, Triangle, Square };

//https://docs.aspose.com/svg/net/drawing-basics/ - Helpful website
