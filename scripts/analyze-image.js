const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function analyzeImage() {
  const canvas = createCanvas(1, 1);
  const ctx = canvas.getContext('2d');
  
  const image = await loadImage(path.join(__dirname, '../public/forest.jpg'));
  canvas.width = image.width;
  canvas.height = 1; // Just analyze the top line
  
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, 1);
  
  // Calculate average color of the top line
  let r = 0, g = 0, b = 0;
  for (let i = 0; i < imageData.data.length; i += 4) {
    r += imageData.data[i];
    g += imageData.data[i + 1];
    b += imageData.data[i + 2];
  }
  
  const pixels = imageData.data.length / 4;
  r = Math.round(r / pixels);
  g = Math.round(g / pixels);
  b = Math.round(b / pixels);
  
  console.log(`Average color at top: rgb(${r}, ${g}, ${b})`);
  console.log(`Hex: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
}

analyzeImage().catch(console.error); 