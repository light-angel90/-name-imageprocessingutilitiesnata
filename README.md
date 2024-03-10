# Image Processing Utilities

This package provides basic image processing utilities for Node.js applications. It includes functionalities such as resizing images and converting them to grayscale.

## Installation

```bash
npm install image-processing-utils
```

## Usage

```javascript
const { resizeImage, convertToGrayscale } = require('image-processing-utils');

// Example usage
const inputImagePath = 'input.jpg';
const outputResizedPath = 'resized.jpg';
const outputGrayscalePath = 'grayscale.jpg';

// Resize image
resizeImage(inputImagePath, outputResizedPath, 200, 200)
    .then(() => console.log('Image resized successfully'))
    .catch(err => console.error('Error resizing image:', err));

// Convert image to grayscale
convertToGrayscale(inputImagePath, outputGrayscalePath)
    .then(() => console.log('Image converted to grayscale successfully'))
    .catch(err => console.error('Error converting image to grayscale:', err));
```

## API

### resizeImage(imagePath, outputPath, width, height)

Resize an image to the specified width and height.

- `imagePath`: Path to the input image.
- `outputPath`: Path to save the resized image.
- `width`: Target width of the resized image.
- `height`: Target height of the resized image.

Returns a Promise that resolves when the image is resized.

### convertToGrayscale(imagePath, outputPath)

Convert an image to grayscale.

- `imagePath`: Path to the input image.
- `outputPath`: Path to save the grayscale image.

Returns a Promise that resolves when the image is converted to grayscale.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
