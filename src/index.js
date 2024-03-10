// imageProcessingUtils.js

const sharp = require('sharp');

/**
 * Resize an image to the specified width and height.
 * @param {string} imagePath - Path to the input image.
 * @param {string} outputPath - Path to save the resized image.
 * @param {number} width - Target width of the resized image.
 * @param {number} height - Target height of the resized image.
 * @returns {Promise} A promise that resolves when the image is resized.
 */
function resizeImage(imagePath, outputPath, width, height) {
    return sharp(imagePath)
        .resize(width, height)
        .toFile(outputPath);
}

/**
 * Convert an image to grayscale.
 * @param {string} imagePath - Path to the input image.
 * @param {string} outputPath - Path to save the grayscale image.
 * @returns {Promise} A promise that resolves when the image is converted to grayscale.
 */
function convertToGrayscale(imagePath, outputPath) {
    return sharp(imagePath)
        .greyscale()
        .toFile(outputPath);
}

module.exports = {
    resizeImage,
    convertToGrayscale
};
