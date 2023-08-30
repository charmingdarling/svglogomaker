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
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50%" cy="50%" r="50%" fill="${this.shapeColor}" />
  <text x="22%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

// Triangle
// The <polygon> element is used to create a shape with 3 sides.
// The attributes define the coordinates (x,y) for each corner.
class Triangle extends Shape {
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,50 500,500 0,500" fill="${this.shapeColor}" />
    <text x="25%" y="75%" font-size="140" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
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
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="500" height="500" fill="${this.shapeColor}" />
    <text x="20%" y="50%" font-size="175" dominant-baseline="middle" text-anchor: "middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// Exporting the Classes Circle, Triangle, Square as variables with values
module.exports = { Circle, Triangle, Square };

//https://docs.aspose.com/svg/net/drawing-basics/ - Helpful website

{
  /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="90" y="40" width="120" height="120" fill="turquoise" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>
</svg> (edited) 
6:21
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
6:21
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
</svg> */
}
