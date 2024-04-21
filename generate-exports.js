const fs = require('fs');
const path = require('path');

const svgsDir = './src/svgs';

// Read the contents of the svgs directory
fs.readdir(svgsDir, (err, files) => {
    if (err) {
        console.error('Error reading svgs directory:', err);
        return;
    }

    // Generate the exports configuration based on the files
    const exportsConfig = {};
    files.forEach(file => {
        const name = path.parse(file).name;
        exportsConfig[`./${name}`] = {
            "types": `./dist/svgs/${name}.d.ts`,
            "default": `./dist/svgs/${name}.js`

        }
    });

    // Write the exports configuration to package.json
    const packageJsonPath = './package.json';
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading package.json:', err);
            return;
        }

        const packageJson = JSON.parse(data);
        packageJson.exports = exportsConfig;

        fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing package.json:', err);
                return;
            }
            console.log('Exports configuration updated successfully.');
        });
    });
});
