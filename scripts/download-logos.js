const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  'staynb': 'https://www.realevals.xyz/images/staynb.png',
  'omnizon': 'https://www.realevals.xyz/images/omnizon.png',
  'dashdish': 'https://www.realevals.xyz/images/dashdish.png',
  'gocalendar': 'https://www.realevals.xyz/images/gocalendar.png',
  'gomail': 'https://www.realevals.xyz/images/gomail.png',
  'opendining': 'https://www.realevals.xyz/images/opendining.png',
  'networkin': 'https://www.realevals.xyz/images/networkin.png',
  'udriver': 'https://www.realevals.xyz/images/udriver.png',
  'flyunified': 'https://www.realevals.xyz/images/flyunified.png',
  'topwork': 'https://www.realevals.xyz/images/topwork.png',
  'zilloft': 'https://www.realevals.xyz/images/zilloft.png'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  const imagesDir = path.join(__dirname, '../public/images');
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Download all logos
  for (const [name, url] of Object.entries(logos)) {
    const filename = path.join(imagesDir, `${name}.png`);
    console.log(`Downloading ${name} logo...`);
    try {
      await downloadImage(url, filename);
      console.log(`Successfully downloaded ${name} logo`);
    } catch (error) {
      console.error(`Error downloading ${name} logo:`, error);
    }
  }
};

main(); 