const fs = require('fs');
const path = require('path');

// Define source and destination paths
const source = path.join(__dirname, 'CNAME'); // Path to CNAME file in the current directory
const destination = path.join(__dirname, 'build', 'CNAME'); // Destination path in the build folder

// Ensure the destination directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
}

// Copy the CNAME file
fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('Error copying CNAME file:', err);
    } else {
        console.log('CNAME file copied successfully.');
    }
});